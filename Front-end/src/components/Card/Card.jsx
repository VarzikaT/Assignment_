import React from 'react'
import "./Card.css"

function Card({name , author , desc}) {
  return (
    <div>
    <div class = "card-container">
      <div class = "card">
        <div class = "image">
          <img href = "#" src ="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"/>
        </div>
        <div class = "content">
          <h3>{name}</h3>
          <p>
            {desc}
          </p>
          {author}
        </div>
      </div>    
    </div>
    
  </div>
  )
}

export default Card