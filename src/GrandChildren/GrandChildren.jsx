import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const GrandChildren = () => {
   const gift = useContext(AssetContext);
    return (
        <div>
            <h3>this is grandchildren</h3>
            <p>has: {gift}</p>
        </div>
    );
};

export default GrandChildren;