import React , {useState} from "react";
import Proptypes from 'prop-types';


export default function TextForm (props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
    }

    const FirstCap = () => {
        let newArr = text.split(" ");
        let updatedArr = newArr.map((word) => {
            word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            return word;
        });
        setText(updatedArr.join(" "));  
    }
    let updatedArr = [];
    const extractMail = () => {
       let newArr = text.split (" ");
        updatedArr = newArr.filter((word) => {
        return word.includes("@");
       });
       
    }

    const changeHandler = (event) => {
        setText(event.target.value);
    }
    const [text,setText] = useState("");
    let words = 0.008;
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="form-floating mt-5">
            <textarea className="form-control" placeholder="Leave a comment here" value={text} onChange={changeHandler} id="floatingTextarea2" style={{height: 200 + "px"}}></textarea>
            <label htmlFor="floatingTextarea2">Enter your text in the box</label>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-success mt-3 mx-3" onClick={handleLowClick}>LowerCase</button>
            <button className="btn btn-danger mt-3 mx-3" onClick={FirstCap}>FirstCap</button>
            <button className="btn btn-danger mt-3 mx-3" onClick={extractMail}>Extract Email</button>
        </div>
        <div className="container my-2">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words, {text.length} , Characters</p>
            <p>{words*text.split(" ").length},Minutes Read</p>
            <span>Extracted Email: {updatedArr.map((email,index) => {
                return (<span>{updatedArr[index]}</span>);
            })}</span>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>.
        </>
    )
}