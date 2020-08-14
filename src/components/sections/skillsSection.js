import React from 'react'

export default function skillsSection() {
    return (
        <div>
            <div style={{padding:"30px 10px 10px 10px"}}>
                <h5 style={{fontSize:"2.5vh",textAlign:"center"}}>YETENEKLER</h5>
                <div className="row" style={{margin:"10px"}}>
                    <div className="col-sm-3">Programlama Dilleri</div>
                    <div className="col-sm-3">Veritabanları</div>
                    <div className="col-sm-3">Araçlar</div>
                    <div className="col-sm-3">Frameworkler</div>
                </div>
            </div>
        </div>
    )
}
