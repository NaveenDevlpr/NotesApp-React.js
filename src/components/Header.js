import React from "react"

const Header=({handleDarkMode})=>{
    return(
        <div className="Header">
            <h2>Notes</h2>
            <button onClick={()=>handleDarkMode((previousDarkMode)=>!previousDarkMode)} className="toggle">Toggle Mode</button>
        </div>
    )
}


export default Header