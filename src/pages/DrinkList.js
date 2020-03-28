import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const DrinkList = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((json) => {
        setDrinks(json.drinks)
      })
  }, [])
  return (
    <div>
      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <Link to={`/drinks/${drink.idDrink}`}>
            <h2>{drink.strDrink}</h2>
          </Link>
          <img src={`${drink.strDrinkThumb}/preview`} alt="cocktail" />
        </div>
      ))}
    </div>
  )
}