import pymongo

class UninitializedException(Exception):
    def __init__(self, message):
        self.message = message

class MongoClient:
    """
    A class to handle interactions with a MongoDB server. It is a singleton.
    Attributes
    ----------
    __instance : MongoClient.__MongoClient
    """
    __instance = None

    class __MongoClient:
        """
        A class to handle interactions with a MongoDB server. This is the instance
        class for the singleton.
        Attributes
        ----------
        host : string
               The database host
        port : int
               The database port
        __client : pymongo.MongoClient
                   The pymongo client that interacts with the database
        __db : object
               The database retrieved by the client.

        """
        def __init__(self, host, port, database):
            self.host = host
            self.port = port
            self.__client = pymongo.MongoClient(host, port)
            self.__db = self.__client[database]

        def find(self, collection, query=None, filter=None):
            """
            Retrieve data from the database.
            Parameters
            ----------
            collection : string
                         The collection to query
            query : dict
                    The dictionary to query objects using
            filter : dict
                     The dictionary used to filter the objects
            Returns
            -------
            list
                A list of retrieved objects.
            """
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
    
    def __getattr__(self, key):
        return getattr(self.__instance, key)

    @classmethod
    def find(cls, *args, **kwargs):
        return cls.__instance.find(*args, **kwargs)

    @classmethod
    def update(cls, *args, **kwargs):
        return cls.__instance.update(*args, **kwargs)

    @classmethod
    def insert(cls, *args, **kwargs):
        return cls.__instance.insert(*args, **kwargs)

    @classmethod
    def count(cls, *args, **kwargs):
        return cls.__instance.count(*args, **kwargs)
