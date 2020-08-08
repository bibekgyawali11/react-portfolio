import React from 'react'

export default function Header(props){
    return(
        <div>
        <button value="home" onClick={props.onChange}>Home</button>
        &nbsp;
        <button value="education" onClick={props.onChange}>Education</button>
        &nbsp;
        <button value="work" onClick={props.onChange}>Work</button>
        &nbsp;
        <button value="project" onClick={props.onChange}>Project</button>
        &nbsp;
        </div>
    )
}