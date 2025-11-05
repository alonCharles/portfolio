import React from 'react'
import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <header className='bg-gray-950 font-serif'>
        <nav className="flex items-center justify-evenly h-16">
            <h1 className='font-bold text-gray-300 text-xl'>Monthly Expense Tracker</h1>
            <Link className='text-gray-200' to='/'>Home</Link>
            <Link className='text-gray-200' to='/expenses'>Expenses</Link>
            <Link className='text-gray-200' to='/about'>About Page</Link>
        </nav>
      </header>
  )
}

export default Navbar
