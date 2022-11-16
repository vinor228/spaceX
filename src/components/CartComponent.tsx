import {LaunchImage, Cart, InfoText} from "./GridStyle";
import React from "react";


type CartTypes = {
    item: any
    getOneElementData: (arg: string) => void
    children?: JSX.Element|JSX.Element[]
}


const CartComponent = ({item,  getOneElementData}:CartTypes) =>
     (
        <Cart  onClick={() => getOneElementData(item.id)} size={item.cartSize} key={item.id}>
            <LaunchImage
                src={item.links.flickr.original[0]}
                loading='lazy'
            />
            <InfoText>{item.name}</InfoText>
            <InfoText>{item.date_local}</InfoText>
        </Cart>
    )

export default CartComponent
