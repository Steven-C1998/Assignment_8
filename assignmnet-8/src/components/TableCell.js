import React, {useEffect, useState} from "react";
export default function TableCell(props) {
    let isFilled = props.isFilled
    let down = false
    const[color,setColor]=useState("white")
    
    function changeColor(){
        setColor(props.color)
        
    }
    document.addEventListener("mousedown", function () {
        down = true
        
    })
    //check if mouse down is false
    document.addEventListener("mouseup", function () {
        down = false
        
    })

    const box = document.querySelector('#container')
    const cell = document.getElementById("grid-item")
    //mousedown and mouse over to change color
    
    if(box){
        console.log('here')
        box.addEventListener("mouseover", function (e) {
        if (down) {
            e.target.style.backgroundColor = setColor(props.color)
            console.log("yoo")
        }
    })
}

    return (
        <div id="grid-item" className="grid-item" style={{backgroundColor : color}} onClick={changeColor} ></div>
    )

}
    

//     {
//         if(isFilled) {
//             return(
//             <div className="grid-item" ></div>
//             )
//         } else {
//             return(
//             <div className="grid-item"></div>

//             )
//         } 
//     }
// }