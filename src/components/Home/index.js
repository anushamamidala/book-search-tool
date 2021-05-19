import React, { useState } from 'react'
import axios from 'axios'

import Book from '../Book'
import Loader from '../Loader'
import CONSTANTS from '../../utils/constant'
import './style.css'

const Home = () => {
  const [booksList, setBooksList] = useState([])
  const [searchKey, setSearchKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => {
    const result = await axios(
      CONSTANTS.BOOKS_OPEN_API_SEARCH +
        '?q=' +
        searchKey +
        '&fields=key,cover_i,title,author_name,name,publish_date,isbn&mode=everything'
    )
    console.log(result)
    setBooksList(result?.data?.docs)
    setIsLoading(false)
  }
  return !isLoading ? (
    <div className='main-container'>
      <div className='search-container'>
        <input
          className='search-box'
          type='text'
          placeholder='Search Books'
          value={searchKey}
          onChange={e => setSearchKey(e.target.value)}
        />
        <button className='search-button' onClick={handleSearch}>
          Search
        </button>
      </div>
      <Book booksList={booksList} />
    </div>
  ) : (
    <Loader />
  )
}

export default Home
