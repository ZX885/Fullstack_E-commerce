import "./style.scss"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer_1">
                    <div className="footer_d">
                        <h1>Axrora Market</h1>
                        <a href="">Обратная связь</a>
                        <a href="">Доставка</a>
                        <a href="">Оплата</a>
                        <a href="">Контакты</a>
                    </div>
                    <div className="footer_d">
                        <a href="">+998992609264</a>
                        <a href="email:zarruhzakirov@gmail.com">zarruhzakirov@gmail.com</a>
                    </div>
                </div>
                <div className="br"></div>
                <div className="footer_2">
                    <div>
                    <p>2024-2025, "Axrora Market" official site</p>
                    </div>
                    <div>
                        <p>Политика конфиденциальности и оферта</p>
                        <p>Пользовательское соглашение</p>
                    </div>
                </div>
            </div>
        </div>
    )
}