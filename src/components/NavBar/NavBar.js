import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className= 'flex justify-end bg-blue-200'>
            <div className = ' text-blue-500 my-auto text-[40px] font-bold leading-none align-middle w-[33%]'>
                <h1>Farmacia</h1>
            </div>
            <div>
                <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Medicinas</button>
                <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Vitaminas</button>
                <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Suplementos</button>
                <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Higiene</button>
            </div>
            <CartWidget  />
        </nav>
    )
}

export default NavBar