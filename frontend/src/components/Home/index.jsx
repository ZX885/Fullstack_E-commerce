import './style.scss'
import foto from './foto.jpg'
import svg from './Union.svg'
import pepsi from './pepsi.jpg'
import Footer from '../Footer'
function Home() {

    return (
        <>
            <div className="header">

                <div className='header-foto'>
                    <div className='h3'>
                        <h3>
                            Доставка свежих продуктов🚚
                        </h3>
                        <img id='toch' src={svg} alt="" />

                        <h5>+998(97)910-92-64</h5>
                        <a href="https://t.me/Axrora_Market">Axrora_Market</a>
                    </div>
                    <div>
                        <img id='foto' src={foto} alt="" />
                        <div className="svg">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci eum ratione illum id
                                libero architecto labore quaerat eligendi odit, illo nostrum nesciunt
                                veniam ab corrupti debitis necessitatibus, soluta quos dolorem!

                            </p>
                        </div>

                    </div>
                </div>
                <div className='fresh_block'>
                    <div className='fresh'>
                        <h1>Свежие продукты</h1>
                    </div>
                    <div className="fresh_products">
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                        <div className="f">
                            <img src={pepsi} alt="" />
                            <h5>Product_name</h5>
                            <b className='type'>type</b>
                            <p className='mini_t'>Lorem ipsum dolor sit amet conse</p>
                            <div>
                                <b className='price'>150</b>
                                <span className='add_fav'>🧺</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="category">
                    <div><h1>Категории</h1></div>
                    <div className='categ'>
                        <a href="/products"><h2 className="categories fruits">Фрукты</h2></a>
                        <a href=""><h2 className="categories vegetables">Овощи</h2></a>
                        <a href=""><h2 className="categories milk_p">Молочные</h2></a>
                        <a href=""><h2 className="categories drinks">Напитки</h2></a>
                        <a href=""><h2 className="categories gadgets">Электроника</h2></a>
                        <a href=""><h2 className="categories chemists">Средства</h2></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;