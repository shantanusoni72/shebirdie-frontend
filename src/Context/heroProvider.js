import { createContext, useState } from "react";

export const heroContext = createContext();

export function HeroProvider({ children }) {
    const [isStepOneHidden, HideStepOne] = useState(false);
    const [[bundleValue, beforePrice, afterPrice], setBundleValue] = useState([5, 174.75, 113.59]);
    const [getImageFromColorPalette, setImageFromColorPalette] = useState('https://www.shesbirdie.com/cdn/shop/files/cyan_68a52f3d-ed67-4091-9915-4c9f73f76d05_800x.jpg');

    const [getIndexOfProductChooser, setIndexOfProductChooser] = useState(null);

    const [getProductArray, setProductArray] = useState([]);

    return (
        <heroContext.Provider 
            value={{ isStepOneHidden, HideStepOne, bundleValue, beforePrice, afterPrice, setBundleValue, getImageFromColorPalette, 
                    setImageFromColorPalette, getIndexOfProductChooser, setIndexOfProductChooser, getProductArray, setProductArray
            }}>
            {children}
        </heroContext.Provider>
    );
}