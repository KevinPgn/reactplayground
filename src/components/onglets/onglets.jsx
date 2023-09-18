import { useState } from 'react'
import React from 'react'
import './onglets.css'
import { OngletsData } from '../../data/ongletsData'


export default function onglets() {
  
    const [active, setActive] = useState(1)

    const handleClick = (id) => {
        setActive(id)
    }


return (
    <>
        <div className="onglets-container">
            <div className="onglets-btn">
                {OngletsData.map((onglet) => {
                    return (
                        <div className='btn' onClick={() => handleClick(onglet.id)} key={onglet.id}>{onglet.buttonContent}</div>
                    )})}
            </div>

            <div className="onglets-content">
               {OngletsData.map((onglet) => {
                    {return active === onglet.id && (
                        <div className="content" key={onglet.id}>
                            <h1>{onglet.title}</h1>
                            <p>{onglet.content}</p>
                        </div>
                    )}
               })} 
            </div>
        </div>
    </>
  )
}
