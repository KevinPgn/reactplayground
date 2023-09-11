import React from 'react'
import './popup.css'
import { useState } from 'react'

export default function popup() {
  
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="popup" onClick={() => setOpen(true)}>Open the popup</button>
    {open ? <div className="container-popup">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ipsum nesciunt corporis distinctio praesentium asperiores enim, id consectetur et numquam ex quisquam. Dicta voluptates esse, doloremque voluptas expedita ratione hic natus in mollitia. Ab sed at tempore, accusamus maxime aliquam commodi in molestias eos tempora esse, eum officia neque dignissimos.</p>
        <button className="close-popup" onClick={() => setOpen(false)}>Close</button>
      </div> : null}
    </>
  )
}