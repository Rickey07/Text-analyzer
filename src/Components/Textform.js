import React , {useState} from "react";
import Proptypes from 'prop-types';

let arr1 = [];


export default function TextForm (props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Operation upper case done", 'Success');
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Operation lower case done" , 'Success');
    }

    const FirstCap = () => {
        let newArr = text.split(" ");
        let updatedArr = newArr.map((word) => {
            word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            return word;
        });
        setText(updatedArr.join(" "));  
        props.showAlert("First Letter has been capitalized" , 'Success');
    }

    const extractMail = () => {
       let newArr = text.split (" ");
        arr1 = newArr.filter((word) => {
        return word.includes("@");
       });
       if (arr1.length === 0) {
        props.showAlert("No Email Found!","Danger")
       } else {
        props.showAlert("Emails Extracted","Success")
       }
         
    }

    const selectCopy = () => {
        let text = document.querySelector('.myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","Success")
    }

    const countWords = (text) => {
        let arr = text.split(" ");
        let newArr = arr.filter((word) => {
            return word!== String("");
        });
        return newArr.length;
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
            <textarea className="form-control myBox" placeholder="Leave a comment here" value={text} onChange={changeHandler} id="floatingTextarea2" style={{height: 200 + "px",backgroundColor:props.mode === 'dark'? '#777':'white',color:props.mode === 'dark'?'white':'black'}}></textarea>
            <label htmlFor="floatingTextarea2">Enter your text in the box</label>
            </div>
            <div className="container d-flex flex-wrap justify-content-center">
                <button className="btn btn-primary mt-3" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-success mt-3 mx-3" onClick={handleLowClick}>LowerCase</button>
                <button className="btn btn-danger mt-3 mx-3" onClick={FirstCap}>FirstCap</button>
                <button className="btn btn-info mt-3 mx-3" onClick={extractMail}>Extract Email</button>
                <button className="btn btn-info mt-3 mx-3" onClick={selectCopy}>Copy</button>
            </div>
            
        </div>
        <div className="container my-2">
            <h1>Your Text Summary</h1>
            <p>{countWords(text)} Words, {text.length} , Characters</p>
            <p>{words*text.split(" ").length},Minutes Read</p>
            <ul className="ul-email">Extracted Emails:- {  arr1.map((email,index) => {
                     return <li key={index}>{email}</li>})}
            </ul>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>.
        </>
    )
}