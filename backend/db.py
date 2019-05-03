import pymongo


class MongoClient:
    __instance = None

    class __MongoClient:
        def __init__(self, host, port, database):
            self.host = host
            self.port = port
            self.__client = pymongo.MongoClient(host, port)
            self.__db = self.__client[database]

        def find(self, collection, query=None, filter=None):
            return self.__db[collection].find(query, filter)

        def update(self, collection, query, values):
            return self.__db[collection].update_many(query, {'$set': values})

        def insert(self, collection, data):
            return self.__db[collection].insert_one(data)

        def count(self, collection, query=None):
            return self.__db[collection].count(query)

    def __init__(self, host, port, database):
        if not MongoClient.__instance:
            MongoClient.__instance = \
                    MongoClient.__MongoClient(host, port, database)

    def find(self, *args, **kwargs):
        return MongoClient.__instance.find(*args, **kwargs)

    def update(self, *args, **kwargs):
        return MongoClient.__instance.update(*args, **kwargs)

    def insert(self, *args, **kwargs):
        return MongoClient.__instance.insert(*args, **kwargs)

    def count(self, *args, **kwargs):
        return MongoClient.__instance.count(*args, **kwargs)
