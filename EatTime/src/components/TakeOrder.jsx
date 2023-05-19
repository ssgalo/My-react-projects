import { recipes as foods } from '../mocks/meal.json'

export const TakeOrder = () => {
    const API_KEY = "0cb7d15d8ae44bf19e735f7a53f9ff90"
    const URL = "https://api.spoonacular.com/recipes/random?number=20&apiKey=0cb7d15d8ae44bf19e735f7a53f9ff90"
    
    return (
        <div className='productContainer'>
            {foods.map(food => {
               return (
                    <div className="productItem">
                        <div className='productHeader'>
                            <img src={food.image} alt={food.title} />
                        </div>
                        <div className='productContent'>
                            <p>{food.title}</p>
                            <button class='button-order'>Agregar</button>
                        </div>
                    </div>
               ) 
            })}
        </div>
    )
}