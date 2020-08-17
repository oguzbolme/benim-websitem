import React from 'react'

export default function ContactSection() {
    return (
        <div>
            <form action="/action_page.php" style={{margin:"10px",padding:"20px"}}>
            <h5 style={{fontSize:"3vh",textAlign:"center"}}>İLETİŞİM</h5>
                <div className="form-group">
                    <input required type="text" className="form-control" placeholder="Ad"></input>
                    <br/>
                    <input required type="text" className="form-control" placeholder="Soyad"></input>
                    <br/>
                    <input required type="email" className="form-control" placeholder="E-Posta"></input>
                    <br/>
                    <input required type="text" className="form-control" placeholder="Konu"></input>
                    <br/>
                    <textarea required type="text" className="form-control" placeholder="Mesaj" rows="5"></textarea>
                    <br/>
                    <button type="submit" className="btn btn-block" style={{backgroundColor:"#212F3D",color:"#E8C547"}}>Gönder</button>
                </div>
            </form>
        </div>
    )
}
