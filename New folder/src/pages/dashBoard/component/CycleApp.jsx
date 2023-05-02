import React from "react";
import "../styles/Cycle.css"
function CycleApp(){
    return(
        <div className="cycleApp">
            <div className="tainer">
             <h2>my App</h2>
            <h3>shop product</h3>
            <div className="mee"onClick={()=>{window.location.href = "/page10"}} >
            <h3>about Us</h3>
            </div>
            <h3>Period calculator </h3>
            <div className="meeee"onClick={()=>{window.location.href = "/page6"}} >
            <h3>sign in</h3>
            </div>
            <div className="yoo"onClick={()=>{window.location.href = "/page7"}} >
            <h3>Register</h3>
            </div>
            </div>
            <div className="container">
                <div className="container1">
                <h1>What can we help you <br />
                do?</h1>
                </div>
                <div className="container2">
                        <div  className="small2" onClick={()=>{window.location.href = "/page7"}} >
                    <p>Track my pregnancy</p>
                    </div>
                </div>
                <div className="container3">
                <div className="small3" onClick={()=>{window.location.href = "/page2"}} >
                    <p>Track my period</p>
                </div>
                </div>
                <div className="container4">
                    <div className="small5" onClick={()=>{window.location.href = "/page3"}} >
                    <p>Decode my <br />
                 discharge</p>
                    </div>
                </div>
                <div className="container5">
                   
                    <div className="small8" onClick={()=>{window.location.href = "/page5"}} >
                    <p>none of the above</p>
                    </div>
                    <button id="next-button" onClick={()=>{window.location.href = "/page3"}} >        
                    Next</button>
               
                </div>
            </div>
        </div>
    )
}
export default CycleApp;