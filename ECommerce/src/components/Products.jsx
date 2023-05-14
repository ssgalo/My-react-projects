/* eslint-disable react/prop-types */
import './Product.css'
import { AddToCartIcon } from './Icons.jsx'

// eslint-disable-next-line react/prop-types
export const Products = ({products}) => {

    const thereAreProducts = products?.length > 0

    return(
        <main className='products'>
            {thereAreProducts &&
                <ul>
                {products.slice(0, 10).map(product => {
                

                return (
                    <li key={product.id}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                        <button
                        style={{ backgroundColor: '#09f' }} 
                        >
                            <AddToCartIcon />
                        </button>
                    </div>
                    </li>
                )
                })}
            </ul>
            }
            {!thereAreProducts &&
                <h3>No hay productos para su filtro</h3>
            }
            
    </main>
    )
}