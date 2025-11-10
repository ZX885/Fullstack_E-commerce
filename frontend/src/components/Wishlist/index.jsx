import { useEffect, useState } from "react";
import { getWishlist, deleteFromWishlist } from "../../conf/common";
import Item from "../Products/item";

function Wishlist() {
    const [foods, setFoods] = useState([])

    useEffect(() =>{
        getWishlist()
        .then(data =>{
            if (Array.isArray(data)) setFoods(data);
            else setFoods([]);
        })
        .catch(err => console.error('Ошибка загрузки Корзины', err));

    }, []);

    const handleDelete = async (id) =>{
        try{
            await deleteFromWishlist(id);
            setFoods(foods.filter(f => f.id !== id));
        } catch (err){
            console.error(err);
            alert('ошибка при удалении из Корзины!');
        }
    };

    return (
        <div className="wishlist-page">
            <h1>Корзина</h1>
            <div className="items">
                {foods.length > 0 ?(
                    foods.map((food)=>(
                        <div key={food.id}>
                            <Item
                                name={food.name} 
                                price={food.price} 
                                image={food.image} 
                                category={food.category} 
                                quantity={food.quantity}
                                id={food.id} 
                            />
                            <button onClick={() =>handleDelete(food.id)}>Удалить</button>
                        </div>
                    ))
                ) :(
                    <p>Корзина пусто</p>
                )}
            </div>
        </div>
    );


}


export default Wishlist;