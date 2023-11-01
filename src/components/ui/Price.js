"use client";

// public
import { useSelector } from "react-redux";

//* components
import Title from "./Title"

//* helper
import { separatorThreeToThree } from "@/helper/functions";


const Price = ({ children, customClassName }) => {

    const targetCurrency = useSelector(state => state.options.targetCurrency);


    return (
        <Title customClassName={customClassName}>
            <span>{targetCurrency?.symbol}</span>
            <span>{separatorThreeToThree(children)}</span>
        </Title>
    );
};


export default Price;