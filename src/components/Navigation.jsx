import React from 'react'

function Navigation(){
    return(
        <nav>
            <img className="nav--logo-img" src="src\assets\logo_raw.png" alt="Sovnklinikken logo"/>
            <ul className='nav--menu'>
                <li>Søvnproblemer</li>
                <hr />
                <li>Behandling</li>
                <hr />
                <li>Priser</li>
                <hr />
                <li>Timebestilling</li>
                <hr />
                <li>Om oss</li>
                <hr />
                <li>Kontakt</li>
            </ul>
        </nav>
    )
}

export default Navigation