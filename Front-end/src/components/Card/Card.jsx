import React from 'react'
import "./Card.css"

function Card({name , author , desc}) {
  return (
        <div class="card-category-1">
          <div class="basic-card basic-card-aqua">
              <div class="card-content">
                    <span class="card-title">{name}</span>
                    <p class="card-text">
                        {desc}
                        Lorem ipsum dolor sit, quis nemo quia quo atque a, doloribus temporibus error quisquam cupiditate ullam ut.

                    </p>

                     <p>{author}</p>   
                </div>

              <div class="card-link">                 
                <button className='action-btn'>Edit</button>
                <button className='action-btn'>Delete</button>
              </div>
          </div>
        </div>
  )
}

export default Card