// import { Outlet, Link } from "react-router-dom";
// import styles from './style.scss'
// import logo from './Logo.png'
// import Products from "../Products";
// import Footer from "../Footer";


// export default function Nav() {
//     return (
//         <div className="head" style={styles}>
//             <nav>
//                 <div>
//                     <img src={logo} alt="" />
//                 </div>

//                 <div className="link">
//                     <div className="links">
//                         <span className="nav-link">
//                             <Link to={"/"}>
//                                 Главная
//                             </Link>
//                         </span>
//                         <span className="nav-link">
//                             <Link>
//                                 Сообщение
//                             </Link>
//                         </span>
//                         <span className="nav-link">
//                             <Link to={'products'}>
//                                 Корзинка
//                             </Link>
//                         </span>
//                         <span className="nav-link">
//                             <Link to={'profile'}>
//                                 Профиль
//                             </Link>
//                         </span>
//                         <span className="nav-link">
//                             <Link to={'create_product'}>
//                                 Создать товар
//                             </Link>
//                         </span>
//                     </div>
//                 </div>
//                 <div className="add">

//                 </div>

//             </nav>

//             <Outlet />
//             <Footer></Footer>
//         </div>
//     )
// }
// ////////////////////////////////////////////////////////////////////////////////


import { Outlet, Link, useNavigate } from "react-router-dom";
import styles from './style.scss';
import logo from './Logo.png';
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { logoutEntirely } from "../../conf/auth";
import Profile from "../Profile/Profile";
export default function Nav() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("access");
        setIsAuth(!!token);
    }, []);
    // const owner = Profile.user.username
    const handleLogout = () => {
        logoutEntirely();
        setIsAuth(false);
        navigate("/login");
    };

    return (
        <div className="head" style={styles}>
            <nav>
                <div>
                    <img src={logo} alt="Logo" />
                </div>

                <div className="link">
                    <div className="links">
                        <span className="nav-link">
                            <Link to="/">Главная</Link>
                        </span>
                        <span className="nav-link">
                            <Link to="/products">Товары</Link>
                        </span>
                        <span className="nav-link">
                            <Link to="/wishlist">Корзина</Link>
                        </span>
                        {isAuth ? (
                            <>
                                <span className="nav-link">
                                    <Link to="/profile">Профиль</Link>
                                </span>
                                {/* { (owner == 'admin') => {
                                    <div>
                                        
                                    </div>
                                }} */}
                                <span className="nav-link">
                                            <Link to="/create_product">Создать продукт</Link>
                                        </span>

                                <button className="logout-btn" onClick={handleLogout}>
                                    Выйти
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="nav-link">
                                    <Link to="/login">Войти</Link>
                                </span>
                                <span className="nav-link">
                                    <Link to="/register">Регистрация</Link>
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <Outlet />
            <Footer />
        </div>
    );
}
