from typing import Iterator
import random
import string
from flask import Response
from gevent.queue import Queue
import gevent


def generate_id(size=6, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


class SubscriptionDoesNotExistException(Exception):
    pass


class ServerSentEvent:
    def __init__(self, data, event):
        self.data = data
        self.event = event
        self.event_id = generate_id()
        self.desc_map = {
            self.data: "data",
            self.event: "event",
            self.event_id: "id",
        }

    def encode(self) -> str:
        if not self.data:
            return ""
        lines = ["{}: {}".format(name, key) for key, name in self.desc_map.items() if key]
        return "{}\n\n".format("\n".join(lines))


class Channel:
    def __init__(self):
        self.subscriptions = {}

    def notify(self, sub_id, message):
        if self.subscriptions.get(sub_id):
            self.subscriptions[sub_id].put(message)

    def event_generator(self, sub_id) -> Iterator[ServerSentEvent]:
        q = Queue()
        self.subscriptions[sub_id] = q
        try:
            while True:
                yield q.get()
        except GeneratorExit:
            del self.subscriptions[sub_id]

    def subscribe(self, sub_id):
        def gen() -> Iterator[str]:
            for sse in self.event_generator(sub_id):
                yield sse.encode()
        return Response(gen(), mimetype='text/event-stream')

    def publish(self, sub_id, message, event=None):
        if not self.subscriptions.get(sub_id):
            raise SubscriptionDoesNotExistException()
        sse = ServerSentEvent(str(message), event)
        gevent.spawn(self.notify, sub_id, sse)
