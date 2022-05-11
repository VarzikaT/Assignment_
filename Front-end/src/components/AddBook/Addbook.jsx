import React from 'react'
import './Addbook.css'

function Addbook() {

  const submithandler = () => {
    window.location.href = "/books"
  }

  return (
    <div>
      <div class="wrapper">
      <div class="pageTitle title">Add Books </div>
      <div class="secondaryTitle title">Add the description of the books to be added</div>
      <input type="text" class="name formEntry" placeholder="Name of the Book" />
      <input type="text" class="email formEntry" placeholder="Name of the Author"/>
      <textarea class="message formEntry" placeholder="Price of the Book"></textarea>
      <button class="submit formEntry" onClick={submithandler}>Submit</button>
  </div>
    </div>
  )
}

export default Addbook