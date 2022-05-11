import React from 'react'
import Card from '../Card/Card'
import data from '../data'
import Header from '../Header/Header'

function Dashboard() {
  return (
    <div>

        <Header/>
        <div className='lay'>

        {data.map( (each)=> <Card name={each.name} desc={each.desc} author={each.author}  /> )}
        
        </div>
    </div>
  )
}

export default Dashboard