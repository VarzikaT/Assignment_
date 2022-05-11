import React from 'react'
import Card from '../Card/Card'
import data from '../data'
import Header from '../Header/Header'
import "./Mybooks.css"

function Mybooks() {
  return (
    <div>

        <Header/>
        
        <div className='books-container'>

            <div className='add-new-book'>
              <a href="/addbook"> 
                <button className='new-book-btn'>
                Add New Book
                </button>
              </a>
            </div>

            <div className='lay'>

            {data.map( (each)=> <Card name={each.name} desc={each.desc} author={each.author}  /> )}
            
            </div>
        </div>
    </div>
  )
}

export default Mybooks