import './style.css'
import defaultImg from '../../assets/default.jpg'
import CONSTANTS from '../../utils/constant'

const Book = ({ booksList }) => {
  console.log(booksList)
  return (
    <div className='books-container'>
      {booksList &&
        booksList.length > 0 &&
        booksList.map(book => {
          return (
            <div className='books-card' key={book.key}>
              {book?.cover_i ? (
                <img
                  src={CONSTANTS.BOOKS_IMAGE_API + book?.cover_i + '-L.jpg'}
                  height='60%'
                  width='60%'
                  alt='Book Image'
                />
              ) : (
                <img
                  src={defaultImg}
                  height='60%'
                  width='60%'
                  alt='Book Image'
                />
              )}
              <div className='book-details'>
                <span className='book-title'>{book.title}</span>
                {book?.author_name && book?.author_name.length > 0 ? (
                  <span>{book?.author_name[0]}</span>
                ) : null}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Book
