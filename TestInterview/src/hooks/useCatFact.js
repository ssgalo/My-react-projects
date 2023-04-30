import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  useEffect(refreshFact, [])
  /* const refreshFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setFact(data.fact))
      .catch(error => console.log(error))
  }
  useEffect(refreshFact, [])
  */
  return { fact, refreshFact }
}
