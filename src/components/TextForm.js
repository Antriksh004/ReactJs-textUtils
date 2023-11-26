import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("uppercase was clicked")

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")

    }
    const handleClearClick =()=>{
        // console.log("uppercase was clicked")

        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "success")

    }
    const handleLowClick =()=>{
        // console.log("uppercase was clicked")

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success")


    }
    const handleOnChange =(event)=>{
        // console.log("On Change")
        setText(event.target.value)//event.target.value will change the value whenever we update the text area

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to clipboard", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra spaces have been removed", "success")
    }
    const [text, setText] = useState('')
    //wrong way to change the state 
    //text = "newText";

    //correct way to change the state

    // setText ("newText");

    return (
        <>
        <div className="container" style ={{color : props.mode==='light'?'black':'white'}}>
            <h1>{props.heading} </h1>

            <div className="mb-3">

                <textarea className="form-control" value={text} onChange = {handleOnChange} style ={{backgroundColor : props.mode==='light'?'white':'#09112b', color : props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>
                Convert to uppercase
            </button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>
                Convert to lowercase
            </button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>
                Clear Text
            </button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>
                Copy Text
            </button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
                Remove Extra Spaces
            </button>


        </div>
        <div className="container my-3" style ={{color : props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>Average time to read : {0.008 * text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter some text to preview"}</p>
        </div>
        </>
    )
}
