import { useState } from 'react'

export const useButton = () => {

    const [value, setValue] = useState(0);

    const buttonClicked = e =>{
        setValue(value + 1);
    }


    return [value, setValue, buttonClicked];
}