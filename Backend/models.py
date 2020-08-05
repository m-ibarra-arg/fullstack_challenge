from peewee import *
import datetime

DATABASE =  SqliteDatabase('./app.db', pragmas={
    'journal_mode': 'wal',
    'cache_size': -1024 * 64})


class Author(Model):
    class Meta:
        database = DATABASE
        db_table = 'author'

    id = AutoField(primary_key=True)
    firstName = TextField()
    lastName = TextField()

    def to_json(self):
        return {'firstName': self.firstName, 'lastName': self.lastName, 'id': self.id}

    @classmethod 
    def new(cls, firstName, lastName):
        try:
            return cls.create(firstName=firstName, lastName=lastName)
        except IntegrityError:
            print("Error de integridad")
            return None


class Book(Model):
    class Meta:
        database = DATABASE
        db_table = 'books'

    id = AutoField()
    name = CharField(max_length=250)
    isbn = CharField(unique=True, max_length=20)
    author = ForeignKeyField(Author)

    def to_json(self):
        return {'id': self.id, 'name': self.name, 'isbn': self.isbn, 'author': self.author.to_json()}

    @classmethod 
    def new(cls, name, isbn, author):
        try:
            return cls.create(name=name, isbn=isbn, author=author )
        except IntegrityError:
            print("Error de integridad")
            return None


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Author, Book], safe=True)
    DATABASE.close()
