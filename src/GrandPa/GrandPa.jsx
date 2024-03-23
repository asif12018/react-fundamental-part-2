import { createContext } from "react";
import Children from "../Children/Children";

//creating context api

export const AssetContext = createContext('gold');

const GrandPa = () => {
    return (
        <div>
            <h1>this is grand pa</h1>
            <AssetContext.Provider value="silver">
                <Children></Children>
            </AssetContext.Provider>
        </div>
    );
};

export default GrandPa;