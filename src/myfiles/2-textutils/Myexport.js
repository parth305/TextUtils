// import React from 'react'
import About from './About'
import Navbar from './Navbar'
import TextForm from './TextForm'
import React, { useState } from 'react'
import Alerts from './Alerts'
import { Route, Router, Routes } from 'react-router-dom'

export default function Myexport() {
    const [mode, setmode] = useState("light")
    const [alert, setalert] = useState(null);
    const [color, setcolor] = useState("#8ABFEA")
    const showalert = (type, message) => {
        setalert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setalert(null);
        }, 1500);
    }
    function changecolor(event) {
        if (mode === "light") {
            return
        }
        // console.log(event.target.value);
        setcolor(event.target.value)
        document.body.style.backgroundColor = color
    }
    const togglemode = () => {
        if (mode === "light") {
            setmode("dark")
            document.body.style.backgroundColor = color
            showalert("success", "dark mode has been enabled");
            document.title = "TextUtils - Dark mode"
        }
        else {
            setmode("light");
            document.body.style.backgroundColor = "white"
            document.title = "TextUtils - light mode"
            showalert("success", "light mode has been enabled");
        }
    }
    return (
        <div>
            <Navbar title="Textutils" abouttext="About TextUtils" mode={mode} togglemode={togglemode} color={color} changecolor={changecolor} />
            <Alerts alert={alert} />
            {/* <Routes>
                <Route exact path="/about" element={<About />}>
                </Route>
                <Route exact path="/" element={<TextForm heading="Enter yor text to analyze" mode={mode} showalert={showalert} color={color} />}>
                </Route>
            </Routes> */}
            <TextForm heading="Enter yor text to analyze" mode={mode} showalert={showalert} color={color} />
        </div>
    )
}
