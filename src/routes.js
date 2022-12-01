const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler
} = require('./handler')

const routes = [
  { // kriteria 1: API dapat menyimpan buku
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  { // kriteria 2: API dapat menampilkan seluruh buku
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  {
    // kriteria 3: API dapat menampilkan detail buku
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler
  },
  {
    // kriteria 4: API dapat mengubah data buku
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler
  },
  {
    // kriteria 5: API dapat menghapus data buku
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler
  }
]

module.exports = routes
