import './style.scss'
import foto from './foto.jpg'
import svg from './Union.svg'

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
                        <img src={foto} alt="" />
                        <div className="svg">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci eum ratione illum id 
                            libero architecto labore quaerat eligendi odit, illo nostrum nesciunt 
                            veniam ab corrupti debitis necessitatibus, soluta quos dolorem!

                        </p>
                        </div>

                    </div>
                </div>
                {/* ///////////////////////////////////////////////////// */}
                <div>

                </div>
            </div>


        </>
    )
}

export default Home;