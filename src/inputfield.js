import React,{Fragment, useState} from "react";

const InputField = (props) => {
    const [inputValue,setInputValue] = useState("");

    const updateInputValue = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue)
    };

    const submitClicked = () => {
    if(inputValue){
        props.addTask(inputValue);
    }
    setInputValue("");
    };

    return (
            <Fragment>
                <input type="text" onChange={updateInputValue} value={inputValue} placeholder="Enter new item" />
                <button onClick={submitClicked}>+</button>
            </Fragment>
    )
    }

export default InputField;