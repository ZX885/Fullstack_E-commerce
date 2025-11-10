import './style.scss'
import { BASE_URL } from '../../conf/store'
import { addToWishlist, deleteFood } from '../../conf/common';
// import { axiosCall } from '../../conf/axios'


function Item(props) {
    console.log("props.id =>", props.id);
    const handleAddToWishlist = async () =>{
        try{
            await addToWishlist(props.id);
            alert(`${props.name} добавлен(а) в Корнизу!`);
        } catch (error){
            console.error("Ошибка добавления в Корзину:", error);
            alert("Ошибка при добавлении в Корзину!");
        }
    };

    return (
        <div className="product-item-wrapper">

            <img
                src={BASE_URL + props.image}
                alt=""
                width={"100%"}
                height={250}
            />
            <div className="info">
                <p>{props.name}</p>
                <span>{props.category}</span>
                <div className="price">
                    <span>${props.price}</span>
                </div>
                <span>Left: {props.quantity}</span>
              
                <div className="actions">
                    <button onClick={handleAddToWishlist} className='add_to_w'>В Корзину</button>
                </div>
            </div>
        </div>
    )
    
}
// function Item({ name, price, image, quantity, category, itemID }) {
//     return (
//       <div className="product-item-wrapper">
//         <img src={BASE_URL + image} alt="" width={"100%"} height={250} />
//         <div className="info">
//           <p>{name}</p>
//           <div className="price">
//             <span>${price}</span>
//             <span>{quantity}</span>
//             <span>{category}</span>
//           </div>
//           {/* <p>ID товара: {itemID}</p> */}
//         </div>
//       </div>
//     );
//   }
export default Item;