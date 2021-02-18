const clientId = '9d907e72f6dd4363b75aa55e6dfc2955';
const clientSecret = '330295cc10ec46f0bc089e93053ea0c9';

const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}


function getAlbum(){
  $.ajax({
    url:"https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
    success: function(res) {
      document.getElementById("album").innerHTML="<br><br><h1>"+res.results[0].name+"</h1><br>"
    }
  });
}