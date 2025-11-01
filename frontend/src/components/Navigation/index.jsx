import { Outlet, Link } from "react-router-dom";
import styles from './style.scss'
import logo from './Logo.png'
import Products from "../Products";


export default function Nav() {
    return (
        <div className="head" style={styles}>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>

                <div className="link">
                    <div className="links">
                        <span className="nav-link">
                            <Link to={"/"}>
                                Home
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link>
                                Vegetables
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link to={'products'}>
                                Fruits
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link>
                                Drinks
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link to={'create_product'}>
                                create_product
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="add">
                    
                </div>

            </nav>
            <Outlet />
        </div>
    )
}