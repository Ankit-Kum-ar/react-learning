import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import {useDispatch} from "react-redux";

export const ItemList = ({items}) => {
    console.log(items);
    const dispatch = useDispatch();
    const handleButtonClick = (e, arg) => {
        e.stopPropagation();
        // Add any additional button click logic here

        // AddItem slice action has dispatch
        // console.log(arg.card.info.name);
        dispatch(addItems(arg))
    };
    const handleButtonClickWrapper = (arg) => (e) => {
        handleButtonClick(e, arg);
      };
    return (
        <div className="justify-center items-center" >
            <div className="flex flex-wrap ">
                {items.map((item) => (
                    <div key={item.card.info.id} className="m-2 p-2 border-gray-400 border-b-[1px] flex flex-row-reverse"> 
                        <div className="w-3/12 ml-4">
                            <div className=" absolute justify-center items-center">
                                <button onClick={handleButtonClickWrapper(item)} className="font-bold text-center w-24 font-sans  bg-white text-green-700 p-1 mx-9 rounded-md"> ADD</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="" />
                        </div>
                        <div className="w-9/12">
                          <span className="font-semibold">{item.card.info.name}</span> 
                          <br/>  
                          <span className="text-xs">₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100} </span>
                            
                          <p className="text-sm mt-2 mb-3">{item.card.info.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}