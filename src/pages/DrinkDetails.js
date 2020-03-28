import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DrinkDetails = () => {
  const { idDrink } = useParams()
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then((response) => response.json())
      .then((json) => {
        setDrinks(json.drinks)
      })
  }, [idDrink])

  return (
    <div>
      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <h2>{drink.strDrink}</h2>
          <img src={`${drink.strDrinkThumb}/preview`} alt="cocktail" />
          <p>{drink.strIngredient1}</p>
          <p>{drink.strIngredient2}</p>
          <p>{drink.strInstructions}</p>
        </div>
      ))}
    </div>
  )
}
