import React from 'react'
import "./emoji.css"
import { useState } from 'react'
import { emojiList } from '../../data/dataEmoji'

export default function emojiFound() {
  
  const [value, setValue] = useState('')
  const [emoji, setEmoji] = useState(emojiList)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

    const handleCopy = (emoji, name) => {
        navigator.clipboard.writeText(emoji)
        alert(name + " copied to clipboard")
    }

  return (
    <>
        <div className="container">
            <div className="emoji">
                <h1>Emoji Found</h1>
                <input value={value} type="text" onChange={handleChange} placeholder="Search your emoji here"/>
            </div>

            <div className="emoji-list">
                {emoji.filter((emoji) => {
                    if (value === '') {
                        return emoji
                    } else if (emoji.name.toLowerCase().includes(value.toLowerCase())) {
                        return emoji
                    }
                }).map((emoji) => {
                    return (
                        <div className="emoji-item" key={emoji.id} onClick={() => handleCopy(emoji.emoji, emoji.name)}>
                            <div className="emoji-item-emoji">{emoji.emoji}</div>
                        </div>
                    )})}
            </div>      
        </div>


    </>
  )
}
