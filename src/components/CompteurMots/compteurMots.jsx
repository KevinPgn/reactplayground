import { useEffect, useState } from 'react'
import './compteurMots.css'

export default function compteurMots() {
  
    const [textAreaValue, setTextAreaValue] = useState('')
    const [wordCount, setWordCount] = useState(500)

    const handleChange = (event) => {
        const value = event.target.value
        setTextAreaValue(value)

        setWordCount(500 - value.length)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return (
    <div className="container-words">
        <form onSubmit={handleSubmit}>
        <textarea name="" id="" cols="30" rows="10" value={textAreaValue} onChange={handleChange}></textarea>
        <button className="submit">Submit</button>
        </form>
        <div className="words-count">{wordCount} words</div>
    </div>
  )
}
