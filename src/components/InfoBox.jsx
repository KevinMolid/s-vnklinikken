import React from 'react'


function InfoBox(props){
    return(
        <div className="info-box">
            <p className="large-icon"><i className={props.icon}></i></p>
            <h2>{props.title}</h2>
            <p>{props.txt}</p>
            {props.btnTxt && <button>{props.btnTxt}</button>}
            {props.tlf && <p><i className="small-icon fa-solid fa-phone"></i> {props.tlf}</p>}
            {props.email && <p><i className="small-icon fa-solid fa-envelope"></i> {props.email}</p>}
        </div>
    )
}

export default InfoBox