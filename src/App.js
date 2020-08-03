import React from 'react';

function App() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Spotifydan Seçmece Playlistler</h1>
      <h1 style={{textAlign:"center"}}>
        <iframe style={{margin:"10px",borderRadius:"10px"}} src="https://open.spotify.com/embed/playlist/7gIfmB7g2PrijKlgO08oZ4" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe style={{margin:"10px",borderRadius:"10px"}} src="https://open.spotify.com/embed/playlist/73wmpmwoNg4iqN9LDdeU3t" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe style={{margin:"10px",borderRadius:"10px"}} src="https://open.spotify.com/embed/playlist/5Bxyjl5wGqqBKFCyats1Ss" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe style={{margin:"10px",borderRadius:"10px"}} src="https://open.spotify.com/embed/playlist/7qPaEAghnlkuAktJhOs8wQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </h1>
    </div>
  );
}

export default App;