import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './Navigation'
import Products from './Products'
import CreateProduct from './create_product/Create'
import Home from './Home'

export default function AllComponents() {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path='' element={<Nav />}>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/create_product' element={<CreateProduct />} />
            </Route >
        </Routes>
    )
}