import './style.scss'
import { useEffect, useState } from 'react'
import { getFood } from '../../conf/common'
import Item from './item'
function Products(){
    const [foods, setFoods] = useState([])
    useEffect(() => {
        getFood().then(data => {
            setFoods(data);
            // console.log('data:', data);
            // if (Array.isArray(data)) {
            //     setFoods(data);
            // } else {
            //     // console.log("but got: ", data);
            //     setFoods([])
            // }
        }).catch(err => console.error("error: ", err))
    }, [])

    return(
        <div id='Product-page'>
            <h1>Fresh product</h1>
            <div className="new-arrivals">
                
                    <li>New Arrival</li>
                    <li>Featured</li>
                    <li>Special offer</li>
                
            </div>
            <div className="items">
                {
                    foods.map((food, index)=>{
                        return(
                            <Item
                                key={index}
                                name={food.name}
                                price={food.price}
                                image={food.image}
                                category={food.category}
                                quantity={food.quantity}
                                itemID={food.id}
                            />
                        )
                    })
                }

            </div>

        </div>
    )

}

export default Products;