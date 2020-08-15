import React from 'react'

export default function ProjectsSection() {
    return (
        <div>
            <div style={{padding:"30px 10px 10px 10px"}}>
                <h5 style={{fontSize:"3vh",textAlign:"center"}}>PROJELER</h5>
                <div className="row" style={{margin:"10px"}}>
                    <div className="col-sm-6">
                        <div className="card mb-3" style={{maxWidth:"540px",backgroundColor:"#30323D"}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={require('../../images/dikilim.png')} alt="dikilim" className="card-img" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 style={{color:"#E8C547"}} className="card-title">Dikilim</h5>
                                        <p style={{color:"#CDD1C4"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card mb-3" style={{maxWidth:"540px",backgroundColor:"#30323D"}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={require('../../images/smart-library.png')} alt="smart-library" className="card-img" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 style={{color:"#E8C547"}} className="card-title">Akıllı Kütüphane</h5>
                                        <p style={{color:"#CDD1C4"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:"10px"}}>
                    <div className="col-sm-6">
                        <div className="card mb-3" style={{maxWidth:"540px",backgroundColor:"#30323D"}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={require('../../images/directory.png')} alt="directory" className="card-img" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 style={{color:"#E8C547"}} className="card-title">Telefon Rehberi</h5>
                                        <p style={{color:"#CDD1C4"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card mb-3" style={{maxWidth:"540px",backgroundColor:"#30323D"}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={require('../../images/machine-learning.png')} alt="ml" className="card-img" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 style={{color:"#E8C547"}} className="card-title">Çocuklar için ML</h5>
                                        <p style={{color:"#CDD1C4"}} className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
