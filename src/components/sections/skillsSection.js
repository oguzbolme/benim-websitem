import React from 'react'

export default function skillsSection() {
    return (
        <div>
            <div style={{padding:"30px 10px 10px 10px"}}>
                <h5 style={{fontSize:"3vh",textAlign:"center"}}>YETENEKLER</h5>
                <div className="row" style={{backgroundColor:"#30323D",borderRadius:"10px",padding:"10px",margin:"10px"}}>
                    <div className="col-sm-3">
                        <h6 style={{color:"#E8C547"}}>Front-End</h6>
                        <h6 style={{color:"#CDD1C4"}}>React.js</h6>
                        <h6 style={{color:"#CDD1C4"}}>Bootstrap</h6>
                        <h6 style={{color:"#CDD1C4"}}>HTML5</h6>
                        <h6 style={{color:"#CDD1C4"}}>CSS3</h6>
                        <h6 style={{color:"#CDD1C4"}}>JavaScript</h6>
                    </div>
                    <div className="col-sm-3">
                        <h6 style={{color:"#E8C547"}}>Back-End</h6>
                        <h6 style={{color:"#CDD1C4"}}>.NET Core</h6>
                        <h6 style={{color:"#CDD1C4"}}>Node.js</h6>
                        <h6 style={{color:"#CDD1C4"}}>Go</h6>
                    </div>
                    <div className="col-sm-3">
                        <h6 style={{color:"#E8C547"}}>Mobil</h6>
                        <h6 style={{color:"#CDD1C4"}}>Android Studio</h6>
                        <h6 style={{color:"#CDD1C4"}}>Java</h6>
                        <h6 style={{color:"#CDD1C4"}}>XML</h6>
                    </div>
                    <div className="col-sm-3">
                        <h6 style={{color:"#E8C547"}}>Veritabanı</h6>
                        <h6 style={{color:"#CDD1C4"}}>SQL Server</h6>
                        <h6 style={{color:"#CDD1C4"}}>SQLite</h6>
                        <h6 style={{color:"#CDD1C4"}}>Firebase</h6>
                        <h6 style={{color:"#CDD1C4"}}>MongoDB</h6>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"#30323D",borderRadius:"10px",padding:"10px",margin:"10px"}}>
                    <div className="col-sm-3">
                        <h6 style={{color:"#E8C547"}}>Metodolojiler</h6>
                        <h6 style={{color:"#CDD1C4"}}>Agile</h6>
                        <h6 style={{color:"#CDD1C4"}}>Scrum</h6>
                    </div>
                    <div className="col-sm-3">
                        <h6 style={{color:"#E8C547"}}>Tasarım Prensipleri</h6>
                        <h6 style={{color:"#CDD1C4"}}>SOLID</h6>
                        <h6 style={{color:"#CDD1C4"}}>KISS</h6>
                        <h6 style={{color:"#CDD1C4"}}>DRY</h6>
                    </div>
                    <div className="col-sm-3">
                        <h6 style={{color:"#E8C547"}}>Programlama Yöntemleri</h6>
                        <h6 style={{color:"#CDD1C4"}}>Nesneye Yönelik Programlama</h6>
                        <h6 style={{color:"#CDD1C4"}}>Fonksiyonel Programlama</h6>
                    </div>
                    <div className="col-sm-3">
                        <h6 style={{color:"#E8C547"}}>Diğer Teknolojiler</h6>
                        <h6 style={{color:"#CDD1C4"}}>GitHub</h6>
                        <h6 style={{color:"#CDD1C4"}}>Docker</h6>
                        <h6 style={{color:"#CDD1C4"}}>Heroku</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
