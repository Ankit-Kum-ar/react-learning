
import { IoIosArrowDown } from "react-icons/io";
import { ItemList } from "./ItemList";
import { useState } from "react";
export const RestaurentCategory = ({data, showItems , setShowIndex}) => {
    // const [showItems, setShowItems]   = useState(false);
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            {/* Accordion */}
            <div className="mr-72 rounded-2xl shadow-lg bg-zinc-800 shadow-gray-800 mb-8 w-auto border-2 justify-center items-center border-white p-5 "  onClick={handleClick}>
                <span className="flex text-lg font-semibold mb-2 cursor-pointer">{data.title} ({data.itemCards.length})
                    <p className="mt-[6px] ml-auto"><IoIosArrowDown /></p>
                </span>
                {showItems && <ItemList className="" items={data?.itemCards}/>}              
            </div>
            
        </div>
    )
}