import './style.scss'
import { useEffect, useState } from 'react'
import { deleteFood, getFood } from '../../conf/common'
import Item from './item'


function Products() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        getFood().then(data => {
            setFoods(data);
            console.log('data:', data);
            if (Array.isArray(data)) {
                setFoods(data);
            } else {
                console.warn("Invalid response:", data);
                setFoods([])
            }
        }).catch(err => console.error("error: ", err))
    }, [])

    const handleDelete = async (id) => {
        try {
            await deleteFood(id);
            setFoods(foods.filter(food => food.id !== id));
        } catch (err) {
            console.error(err);
            alert("Error deleting food!")
        }
    };

    return (
        <div id='Product-page'>
            <h1>Fresh product</h1>
            <div className="new-arrivals">

                <li>New Arrival</li>
                <li>Featured</li>
                <li>Special offer</li>

            </div>
            <div className="items">
                {
                    foods.map((food, index) => {
                        return (
                            <div>
                                <Item
                                    key={index}
                                    name={food.name}
                                    price={food.price}
                                    image={food.image}
                                    category={food.category}
                                    quantity={food.quantity}
                                    id={food.id}
                                />
                                <button onClick={() => handleDelete(food.id)}> Delete </button>
                            </div>
                        )
                    })
                }

                {/* <div className="items">
                    {foods.length > 0 ? (
                        foods.map((food) => (
                            <div key={food.id} className="product-item">
                                <Item
                                    name={food.name}
                                    price={food.price}
                                    image={food.image}
                                    category={food.category}
                                    quantity={food.quantity}
                                    id={food.id}
                                />
                                <button onClick={() => handleDelete(food.id)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>Нет продуктов для отображения</p>
                    )}
                </div> */}

            </div>

        </div>
    )

}

export default Products;