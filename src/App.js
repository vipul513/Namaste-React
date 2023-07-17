import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./fixtures/resData"
import { Header } from "./components/Header";

const RestaurantCard = (props) => {
    const { resData } = props
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.data;
    let resLogoURL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        cloudinaryImageId;
    return (
        <div className="res-card">
            <div className="res-logo">
                <img alt="JC Cafe" src={resLogoURL}></img>
            </div>
            <div className="res-details">
                <h3 className="res-name"> {name} </h3>
                <h4> {"⭐️ " + avgRating} </h4>
                <h4> {cuisines.join(", ")} </h4>
                <h4> {"Cost for Two:- ₹" + costForTwo / 100} </h4>
                <h4> {"Estimate Time:- " + deliveryTime} </h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map(restaurant => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)

const rootElm = ReactDOM.createRoot(document.getElementById("root"));

// if you want to render react component write it in <../>
rootElm.render(<AppLayout />);