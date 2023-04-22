import { useState } from 'react'
import arrowUp from './media/arrowUp.png' 
import arrowDown from './media/arrowDown.png'

const ItemQuantitySelector = ( {stock= 50, initial = 1, onAdd}) => {


    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }

    return(
        <div className="flex">
            <div className='inline-block pt-[6px]'>
                Cantidad:
            </div>
            <div className='border-2 flex align-middle ml-[10px]'>
                <div className=' mt-[4px]  mx-2'>
                    {quantity}
                </div>
                <div className='flex flex-col  my-auto mr-2'>
                    <button  onClick={increment} > 
                        <img src = {arrowUp} className="w-[16px] h-[16px] m-0"></img>
                    </button>
                    <button  onClick={decrement}>
                        <img src = {arrowDown} className="w-[16px] h-[16px] m-0"></img>
                    </button>
                </div>
            </div>
            

        </div>
    )

}

export default ItemQuantitySelector