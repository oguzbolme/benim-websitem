import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'

export default function Social() {
    return (
        <div>
            <div style={{color:"#CDD1C4"}}>
                <h5 style={{textAlign:"center",fontSize:"5vh"}}>
                    <a href="https://tr.linkedin.com/in/o%C4%9Fuzhan-b%C3%B6lme-842404194" target="_blank" rel="noopener noreferrer" style={{padding:0,display:"inline"}}><FontAwesomeIcon style={{margin:"10px"}} icon={faLinkedin} /></a>
                    <a href="https://github.com/oguzbolme" target="_blank" rel="noopener noreferrer" style={{padding:0,display:"inline"}}><FontAwesomeIcon style={{margin:"10px"}} icon={faGithub} /></a>
                </h5>
                <h5 style={{textAlign:"center",fontSize:"5vh"}}>
                    <a href="https://www.instagram.com/ozibuo/" target="_blank" rel="noopener noreferrer" style={{padding:0,display:"inline"}}><FontAwesomeIcon style={{margin:"10px"}} icon={faInstagram} /></a>
                    <a href="https://open.spotify.com/user/ou6s2ukhedw83lchgm4tv2mw3?si=m_efhsG8TRWMPW6bdB207g" target="_blank" rel="noopener noreferrer" style={{padding:0,display:"inline"}}><FontAwesomeIcon style={{margin:"10px"}} icon={faSpotify} /></a>
                </h5>
            </div>
        </div>
    )
}
