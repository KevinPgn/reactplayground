import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/emc.css"

export default function emc() {
  
  const [taille, setTaille] = useState("")
  const [poids, setPoids] = useState("")
  const [age, setAge] = useState("")

  const [result, setResult] = useState("")
  const [interpretation, setInterpretation] = useState("Interprétration : ")

  const handleSubmit = (e) => {
    e.preventDefault()

    setResult(Number(Math.round(poids / (taille * taille) * 10000)))
  }

  useEffect(() => {
    if (result < 18.5) {
      setInterpretation("Interprétration : Insuffisance pondérale")
    } else if (result >= 18.5 && result <= 24.9) {
      setInterpretation("Interprétration : Poids normal")
    } else if (result >= 25 && result <= 29.9) {
      setInterpretation("Interprétration : Surpoids")
    } else if (result >= 30 && result <= 34.9) {
      setInterpretation("Interprétration : Obésité modérée")
    } else if (result >= 35 && result <= 39.9) {
      setInterpretation("Interprétration : Obésité sévère")
    } else if (result >= 40) {
      setInterpretation("Interprétration : Obésité morbide")
    }
  }, [result])


  const handleChange = (e) => {
    const {name, value} = e.target
    if (name === 'taille') {
      setTaille(Number(value))
    } else if (name === 'poids') {
      setPoids(Number(value))
    } else if (name === 'age') {
      setAge(Number(value))
    }
  }

  
  
  return (
    <>
      <div className="container">
        <form className="emc" onSubmit={handleSubmit}>
          <h1 className='title'>EMC Calculator</h1>
          <input type="number" value={taille} onChange={handleChange} name='taille' placeholder='Votre taille (en cm)'/>
          <input type="number" value={poids} onChange={handleChange} name='poids' placeholder='Votre poids (en kg)'/>
          <input type="number" value={age} onChange={handleChange} name='age' placeholder='Votre age'/> 
          <button type="submit" className='submit'>Calculez votre IMC</button>
        </form>

        <div className="result">
          <h1>Poids : {result}</h1>
          <h2>{interpretation}</h2>         
        </div>
      </div>
    </>
  )
}
