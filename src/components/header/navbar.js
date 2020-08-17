import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faUser, faBriefcase, faDraftingCompass, faCode, faGraduationCap, faComments, faBars } from '@fortawesome/free-solid-svg-icons'
import Social from '../Social';

export default function Navbar() {

    const [toggle, setToggle] = useState(true)

    function setToggleState(){
        if(toggle===false){
            setToggle(true)
            document.getElementById("sidebar-content").style.display="none"
        }
        else{
            setToggle(false)
            document.getElementById("sidebar-content").style.display="block"
        }
    }

    return (
        <div>
            <div className="sidebar">
                <AnchorLink href='#introSection'><FontAwesomeIcon icon={faDove} /> Oğuzhan Bölme</AnchorLink>
                <button id="sidebar-toggle" onClick={setToggleState}><FontAwesomeIcon icon={faBars} /></button>
                <div id="sidebar-content">
                    <AnchorLink href='#aboutSection'><FontAwesomeIcon icon={faUser} /> Hakkımda</AnchorLink>
                    <AnchorLink href='#experienceSection'><FontAwesomeIcon icon={faBriefcase} /> Deneyim</AnchorLink>
                    <AnchorLink href='#projectsSection'><FontAwesomeIcon icon={faDraftingCompass} /> Projeler</AnchorLink>
                    <AnchorLink href='#skillsSection'><FontAwesomeIcon icon={faCode} /> Yetenekler</AnchorLink>
                    <AnchorLink href='#educationSection'><FontAwesomeIcon icon={faGraduationCap} /> Eğitim</AnchorLink>
                    <AnchorLink href='#contactSection'><FontAwesomeIcon icon={faComments} /> İletişim</AnchorLink>
                    <Social/>
                </div>
            </div>
        </div>
    )
}
