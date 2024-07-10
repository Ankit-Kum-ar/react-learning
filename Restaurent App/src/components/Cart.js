import { useDispatch, useSelector } from "react-redux"
import { ItemList } from "./ItemList"
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {

    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart());
    }
    // Reading Info from CartSlice (Subscribing to the store)
    const cartItems = useSelector((store) => store.cart.items)
    return(
        <div>
            <div className="text-center m-4 p-4 mb-6">
                <h1 className="text-3xl font-semibold font-sans">Cart</h1>
                
            </div>
            <button className="ml-64 bg-gray-600 hover:bg-slate-800 pl-2 pr-2 rounded-md" onClick={handleClear}>Clear All</button>
            <div className="ml-64 mr-72 rounded-2xl shadow-lg bg-zinc-800 shadow-gray-800 mb-8 border-2 justify-center items-center border-white  p-1 mt-3">
                <ItemList items={cartItems}/>
            </div>
        </div>

    )
}