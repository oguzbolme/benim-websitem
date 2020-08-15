import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faUser, faBriefcase, faDraftingCompass, faCode, faGraduationCap, faComments, faHamburger } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const [toggle, setToggle] = useState(true)

    function setToggleState(){
        if(toggle===false){
            setToggle(true)
            document.getElementById("sidebar-content").style.display="block"
        }
        else{
            setToggle(false)
            document.getElementById("sidebar-content").style.display="none"
        }
    }

    return (
        <div>
            <div className="sidebar">
                <AnchorLink href='#introSection'><FontAwesomeIcon icon={faDove} /> Oğuzhan Bölme</AnchorLink>
                <button id="sidebar-toggle" onClick={setToggleState}><FontAwesomeIcon icon={faHamburger} /></button>
                <div id="sidebar-content">
                    <AnchorLink href='#aboutSection'><FontAwesomeIcon icon={faUser} /> Hakkımda</AnchorLink>
                    <AnchorLink href='#experienceSection'><FontAwesomeIcon icon={faBriefcase} /> Deneyim</AnchorLink>
                    <AnchorLink href='#projectsSection'><FontAwesomeIcon icon={faDraftingCompass} /> Projeler</AnchorLink>
                    <AnchorLink href='#skillsSection'><FontAwesomeIcon icon={faCode} /> Yetenekler</AnchorLink>
                    <AnchorLink href='#educationSection'><FontAwesomeIcon icon={faGraduationCap} /> Eğitim</AnchorLink>
                    <AnchorLink href='#contactSection'><FontAwesomeIcon icon={faComments} /> İletişim</AnchorLink>
                </div>
            </div>
        </div>
    )
}
