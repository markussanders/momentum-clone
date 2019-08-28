import React from 'react';


const Focus = props => {
    const mainFocus = props.mainFocus;


    return (
        <div id="focus-div">
            <h4>TODAY</h4>
            <div id="main-focus-item-div">
                <button id="main-focus-mark-complete"></button>
                <h3 id="main-focus-text">{mainFocus}</h3>
                <button id="main-focus-delete">X</button>
            </div>
        </div>
    )
}

export default Focus;