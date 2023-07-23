import { PiCurrencyInr } from "react-icons/Pi";
import { BiSolidOffer } from "react-icons/Bi";

export const MenuOfferCard = ({props}) => {
    return (
        <div className= "offer">
            <div className="discount">
                <BiSolidOffer/>
                <h4>{ props.info.header }</h4>
            </div>
            <div className="offer-text">
                <p>
                    { props.info.couponCode + " || " + props.info.description }
                </p>
            </div>
        </div>  
    )
}