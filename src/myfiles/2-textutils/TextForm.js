import React,{useState} from 'react'

export default function TextForm(props) {
    let [text,setText]=useState("");  //you can not cgange the value of text directly if you want to change then you have to use setetxt function
    function onUpperCaseClick(){
        // console.log("on upper case click");          when we click on the button
        setText(text.toUpperCase());
        props.showalert("success","Converted to uppercase");
    }
    function onStateChange(event){
        // console.log("Stae change");    when we type anything in the textarea state is changes
        let newtext=event.target.value
        setText(newtext)
    }
    let onLowerCaseClick=()=>{
        setText(text.toLowerCase());
        props.showalert("success","Converted to Lowercase");
    }
    
    let onCopyClick=()=>{
        navigator.clipboard.writeText(text);
        props.showalert("success","Copied to clipbord");
        document.getSelection().removeAllRanges();
    }
    let onClearClick=()=>{
        setText("");
        props.showalert("success","Text cleared");
    }
    let onCapitlizeClick=()=>{
        setText((text)=>{
            props.showalert("success","Capitalized the text");            
            return text.toLowerCase().split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
        })
    }
    return (
        <>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{color:props.mode==="dark"?"white":"black",backgroundColor:props.mode==="dark"?props.color:"white"}} onChange={onStateChange} value={text} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={onUpperCaseClick}>convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={onLowerCaseClick}>convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={onCopyClick}>copy to clipborad</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={onClearClick}>clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={onCapitlizeClick}>Title case</button>
        </div>
        <div className="container my-2" style={{color:props.mode==="dark"?"white":"black"}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} Words and {text.length} Characters</p>
            <p>{0.08 * text.split(/\s+/).length} Minutes to Read</p>
            <h3>Priview</h3>
            <p>{text.length===0?"Enter your text in the textarea above to analyze":text}</p>
        </div>
        </>

    )
}
