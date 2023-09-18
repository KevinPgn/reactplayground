import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <>
        <header>
            <nav>
                <div className="left">
                    <div className="logo">
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <div className="right">
                    <Link to="/popup">popup</Link>
                    <Link to="/todo">todo</Link>
                    <Link to="/emoji">emoji</Link>
                    <Link to="/emc">emc</Link>
                    <Link to="/shop">shop</Link>
                    <Link to="/caroussel">caroussel</Link>
                    <Link to="/compteurMots">compteurMots</Link>
                    <Link to="/onglets">onglets</Link>
                </div>
            </nav>
        </header>
    </>
  )
}
