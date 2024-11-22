import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navPagr = useNavigate()

  return (
    <div>
        <a href="/">Home</a>
        <a href="/about">about</a>

        <Link to="/">Home</Link>
        <Link to="/about">about</Link>

        <button onClick={()=>window.location.href="/"}>Go to Homepage</button>
        <button onClick={()=>navPagr('/')}>Go to Homepage</button>
    </div>
  )
}

export default Header