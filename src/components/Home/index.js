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
    setBooksList(result?.data?.docs)
    setIsLoading(false)
  }

  const onChangeInSelect = val => {
    if (val === 'sortAscending') {
      const books = booksList.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase()
          ? 1
          : b.title.toLowerCase() > a.title.toLowerCase()
          ? -1
          : 0
      )
      setBooksList([...books])
    } else if (val === 'sortDescending') {
      const books = booksList.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase()
          ? -1
          : b.title.toLowerCase() > a.title.toLowerCase()
          ? 1
          : 0
      )
      setBooksList([...books])
    }
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
        <select
          className='sort-select-drop'
          onChange={e => onChangeInSelect(e.target.value)}
        >
          <option disabled selected>
            Select option
          </option>
          <option value='sortAscending'>
            Sort Alphabetically A-Z by Title
          </option>
          <option value='sortDescending'>
            Sort Alphabetically Z-A by Title
          </option>
          <option value='sortByPublishedDate'>
            Sort by Recent Published Date
          </option>
        </select>
      </div>
      <Book booksList={booksList} />
    </div>
  ) : (
    <Loader />
  )
}

export default Home
