import React from 'react'
import '../assets/css/button.css'

const Styles=['filled','outlined'];

export const Button = ({
    children,
    // type,
    onClick,
    buttonStyle,
    // buttonSize
                      }) => {
                        const btnStyle = Styles.includes(buttonStyle)? buttonStyle:Styles[0];
        return(
            <button className={btnStyle}>
   
        {children}
    
</button>
        )
    };