import './style.scss'
import { BASE_URL } from '../../conf/store'
// import { axiosCall } from '../../conf/axios'


function Item(props) {

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