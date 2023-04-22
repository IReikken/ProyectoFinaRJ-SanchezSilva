import cartIcon from  './media/cart.png'

const CartWidget = () => {
    return (
        <div className='relative'>
            <img src= {cartIcon}  className='max-h-[50px] mr-5 pl-6'  alt="Icono de carrito de compras"/>
            <p className='leading-none text-center  pt-[1px] absolute bottom-[-3px] right-[8px] text-[12] text-white bg-red-500 rounded-xl w-[20px] h-[20px] align-middle' >{0}</p>
            
        </div>

    )
}

export default CartWidget