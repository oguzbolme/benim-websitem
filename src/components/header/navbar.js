import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faUser, faBriefcase, faDraftingCompass, faCode, faGraduationCap, faComments } from '@fortawesome/free-solid-svg-icons'

export default function navbar() {
    return (
        <div>
            <div className="sidebar">
                <AnchorLink href='#introSection'><FontAwesomeIcon icon={faDove} /> Oğuzhan Bölme</AnchorLink>
                <AnchorLink href='#aboutSection'><FontAwesomeIcon icon={faUser} /> Hakkımda</AnchorLink>
                <AnchorLink href='#experienceSection'><FontAwesomeIcon icon={faBriefcase} /> Deneyim</AnchorLink>
                <AnchorLink href='#projectsSection'><FontAwesomeIcon icon={faDraftingCompass} /> Projeler</AnchorLink>
                <AnchorLink href='#skillsSection'><FontAwesomeIcon icon={faCode} /> Yetenekler</AnchorLink>
                <AnchorLink href='#educationSection'><FontAwesomeIcon icon={faGraduationCap} /> Eğitim</AnchorLink>
                <AnchorLink href='#contactSection'><FontAwesomeIcon icon={faComments} /> İletişim</AnchorLink>
            </div>
        </div>
    )
}
