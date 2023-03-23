import CartWidget from '../CartWidget/CartWidget'
import logo from  './media/logo.png'
import  {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className= 'flex justify-end bg-blue-200 h-[90px]'>
            <div className = 'w-[60%] pl-3'>
            <Link to='/'>   <img src={logo} className='max-h-[80px] pt-2'/> </Link>
            </div>
            <div className='pt-8'>
                <Link to='/category/meds' className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Medicinas</Link>
                <Link to='/category/vit' className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Vitaminas</Link>
                <Link to='/category/hig' className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Higiene</Link>
            </div>
            <div  className = 'pt-4' >
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar                                       