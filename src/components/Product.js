import React from "react";

export default function Product({ href, children }) 
{
    return(
        <div className = "product">
             <img src={href}/>
             {children}   
        </div>
    );
}