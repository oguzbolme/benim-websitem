import React from 'react'

export default function contactSection() {
    return (
        <div>
            <form action="/action_page.php" style={{margin:"10px",padding:"20px"}}>
            <h5 style={{fontSize:"2.5vh",textAlign:"center"}}>İLETİŞİM</h5>
                <div class="form-group">
                    <input required type="text" class="form-control" placeholder="Ad"></input>
                    <br/>
                    <input required type="text" class="form-control" placeholder="Soyad"></input>
                    <br/>
                    <input required type="email" class="form-control" placeholder="E-Posta"></input>
                    <br/>
                    <input required type="text" class="form-control" placeholder="Konu"></input>
                    <br/>
                    <textarea required type="text" class="form-control" placeholder="Mesaj" rows="5"></textarea>
                    <br/>
                    <button type="submit" class="btn btn-block" style={{backgroundColor:"#212F3D",color:"white"}}>Gönder</button>
                </div>
            </form>
        </div>
    )
}
