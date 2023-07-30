import { PiCurrencyInr } from "react-icons/Pi";
import { BiSolidOffer } from "react-icons/Bi";

export const MenuOfferCard = ({props}) => {
    return (
        <div className= "offer min-w-[200px] max-h-16 border-2 border-solid border-gray-300 mx-2 py-2 rounded-lg shadow-lg">
            <div className="discount flex items-center flex-nowrap">
                <BiSolidOffer className="text-red-700 mx-1 mb-1"/>
                <h6 className="text-sm text-gray-500 font-bold">{ props.info.header }</h6>
            </div>
            <div className="offer-text text-[10px] mx-1 text-ellipsis overflow-hidden whitespace-nowrap">
                <p>
                    { props.info.couponCode + " | " + props.info.description }
                </p>
            </div>
        </div>  
    )
}