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
                                Главная
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link>
                                Сообщение
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link to={'products'}>
                                Корзинка
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link>
                                Профиль
                            </Link>
                        </span>
                        <span className="nav-link">
                            <Link to={'create_product'}>
                                Создать товар
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