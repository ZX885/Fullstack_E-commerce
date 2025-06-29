import { Outlet, Link } from "react-router-dom";
import styles from './style.scss'
import logo from './Logo.png'


export default function Nav() {
    return (
        <div style={styles}>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>

                <div className="link">
                    <h3>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </h3>
                    <div className="links">
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

            </nav>
            <Outlet />
        </div>
    )
}