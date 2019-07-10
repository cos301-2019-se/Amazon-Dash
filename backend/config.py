import configparser
import os


class Config:
    def __init__(self, settingsfile=None):
        self.settingsfile = settingsfile or \
                os.path.join(os.getcwd(), 'setup.cfg')
        self.__load_settings()

    def __load_settings(self):
        if not os.path.isfile(self.settingsfile):
            raise FileNotFoundError((f'Cannot find settings file '
                                    f'{self.settingsfile}'))
        config = configparser.ConfigParser()
        config.read(self.settingsfile)
        try:
            self.__dbsettings = {}
            mongoconf = config['mongodb']
            self.__dbsettings['host'] = os.getenv('DB_HOST') \
                or mongoconf.get('host')
            self.__dbsettings['port'] = os.getenv('DB_PORT') \
                or mongoconf.get('port')
            self.__dbsettings['username'] = os.getenv('DB_USER') \
                or mongoconf.get('username')
            self.__dbsettings['username'] = os.getenv('DB_PASS') \
                or mongoconf.get('pass')
        except KeyError:
            print(f'{self.settingsfile} does not contain a mongodb section')
            self.__dbsettings['port'] = os.getenv('DB_PORT')
            self.__dbsettings['host'] = os.getenv('DB_HOST')
            self.__dbsettings['username'] = os.getenv('DB_USER')
            self.__dbsettings['password'] = os.getenv('DB_PASS')

        self.__appsettings = config['app'] if 'app' in config else {}

    def get_dbport(self):
        return int(self.__dbsettings.get('port') or 27017)

    def get_dbhost(self):
        return self.__dbsettings.get('host')

    def get_dbuser(self):
        return self.__dbsettings.get('username')

    def get_dbpass(self):
        return self.__dbsettings.get('password')

    def get_port(self):
        return self.__appsettings.get('port')
