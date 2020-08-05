from flask import Flask
from models import initialize, Book, Author, DATABASE
from flask import g, jsonify, abort, request


app = Flask(__name__)
PORT = 5000
DEBUG = True

@app.before_request
def before_request():
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(request):
    g.db.close()
    return request

@app.errorhandler(404)
def not_found(error):
    return jsonify(generate_response(404, error='Not found.'))

@app.errorhandler(400)
def bad_request(error):
    return jsonify(generate_response(400, error='Bad Request.'))

@app.errorhandler(422)
def unprocessable_entity(error):
    return jsonify(generate_response(422, error='Unprocessable Entity.'))

@app.route('/api', methods=['GET'])
def index():
    return "Hello world."

@app.route('/api/books', methods=['GET'])
def get_books():
    books = Book.select()
    books = [book.to_json() for book in books ]
    return jsonify(generate_response(data=books))

@app.route('/api/book/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = try_book(book_id)
    return jsonify(generate_response(data=book.to_json()))

@app.route('/api/authors', methods=['GET'])
def get_authors():
    authors = Author.select()
    authors = [author.to_json() for author in authors ]
    return jsonify(generate_response(data=authors))

@app.route('/api/author/<int:author_id>', methods=['GET'])
def get_auhtor(author_id):
    author = try_author(author_id) 
    return jsonify(generate_response(data=author.to_json()))

@app.route('/api/book', methods=['POST'])
def post_book():
    # print(request)
    if not request.json:
        abort(400)
    
    name = request.json.get('name', '')
    isbn = request.json.get('isbn', '')
    author = request.json.get('author', '')

    book = Book.new(name, isbn, author)
    
    if book is None:
        abort(422)

    return jsonify(generate_response(data = book.to_json()))

@app.route('/api/author', methods=['POST'])
def post_author():
    print(request.json)
    if not request.json:
        abort(400)
    
    firstName = request.json.get('firstName', '')
    lastName = request.json.get('lastName', '')

    author = Author.new(firstName, lastName)
    
    if author is None:
        abort(422)

    return jsonify(generate_response(data = author.to_json()))

@app.route('/api/book/<int:book_id>', methods=['PUT'])
def put_book(book_id):
    book = try_book(book_id)
    if not request.json:
        abort(400)

    book.name = request.json.get('name', book.name)
    book.isbn = request.json.get('isbn', book.isbn)
    book.author = request.json.get('author', book.author)

    if book.save():
        return jsonify(generate_response(data=book.to_json()))
    else: 
        abort(422)

@app.route('/api/author/<int:author_id>', methods=['PUT'])
def put_author(author_id):
    print(request.json)
    author = try_author(author_id)
    if not request.json:
        abort(400)

    author.firstName = request.json.get('firstName', author.firstName)
    author.lastName = request.json.get('lastName', author.lastName)

    if author.save():
        return jsonify(generate_response(data=author.to_json()))
    else: 
        abort(422)

def try_book(book_id):
    try:
        return Book.get(id = book_id) 
    except Book.DoesNotExist:
        abort(404)

def try_author(author_id):
    try:
        return Author.get(id = author_id) 
    except Author.DoesNotExist:
        abort(404)

def generate_response(status=200, data=None, error=None):
    return {'status':status, 'data':data, 'error':error}

if __name__ == '__main__':
    initialize()
    app.run(   
        port = PORT,
        debug = DEBUG 
        )