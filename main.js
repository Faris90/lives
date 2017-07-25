var channelName = document.getElementById('channelName');
var channelSubs = document.getElementById('channelSubs');

var urlid = "";

var btn  = document.getElementById("btn");

btn.addEventListener("click", function(){
urlid = document.getElementById("url").value; //channel id looks like this UC-lHJZR3Gqxm24_Vd_AJ5Yw
setInterval(fetchData,150);

});


function renderSubs(data){
    
    
    channelSubs.innerHTML=data;
    
}

function renderName(data){
    
    
    channelName.innerHTML=data;
    
}


function fetchData(){
    
    
    var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=' + urlid + '&key=YOUR_CLIENT_KEY'); // Insert your client key that can be generated from Google Api's Console for free
ourRequest.onload = function(){
  var ourdata = JSON.parse(ourRequest.responseText); 
        renderName(ourdata['items'][0]['snippet']['title']);
        renderSubs(ourdata['items'][0]['statistics']['subscriberCount']);

};

ourRequest.send();
    
}

