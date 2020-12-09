window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = false;

let p = document.createElement('p');
const words = document.querySelector(".words");
words.appendChild(p);

var gog;
var yt;
var fb;
var wapp;
var net;
var hist;
var ig;
var cr;

recognition.addEventListener("result", e => {

    // console.log(e.results);
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("")

    p.textContent = transcript;
    if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }


    var a = ["blue", "red", "green","Green","thistle","olive","turquoise","Peru","violet","teal","purple", "pink", "orange","Orange","silver","yellow","cyan", "magenta", "black","white", "gray","brown","Brown","grey","maroon","Grey","lime","aquamarine","chocolate","lavender","Navy","fuchsia"];
     for(var i=0; i <= a.length; i++) {
     if(transcript.includes(a[i])) {     
        document.body.style.background = a[i];
     }}


     if(transcript.includes("default")) {     
        document.body.style.background = "url('Slike/pozadina.jpg')";
        document.body.style.backgroundRepeat = "repeat";
        document.body.style.backgroundSize = "cover";
     }


     
if(transcript.includes("repeat after me")) {
    var b = transcript;
    b = b.replace("repeat after me","");
    responsiveVoice.speak(b);
}


if(transcript.includes("Google")) {
gog = window.open('http://google.com')
}
if(transcript.includes("exit")) {
gog.close()
};


if(transcript.includes("YouTube")) {  
yt = window.open('http://youtube.com')
};
if(transcript.includes("close")) {
yt.close()
};


if(transcript.includes("Facebook")) {  
fb = window.open('http://facebook.com')
};
if(transcript.includes("off")) {
fb.close()
};



if(transcript.includes("WhatsApp")) {  
wapp = window.open('http://web.whatsapp.com')
};
if(transcript.includes("app")) {
wapp.close()
};


if(transcript.includes("Netflix")) {  
net = window.open('http://netflix.com')
};
if(transcript.includes("video")) {
net.close()
};


/* if(transcript.includes("history")) {  
hist = window.open('chrome://history')
};
if(transcript.includes("clear")) {
hist.close()
}; */


if(transcript.includes("Instagram")) {  
ig = window.open('http://instagram.com')
};
if(transcript.includes("picture")) {
ig.close()
};


if(transcript.includes("Corona")) {
cr = window.open('https://www.worldometers.info/coronavirus/')
};
if(transcript.includes("virus")) {
cr.close()
};



if(transcript.includes("reload")) {
location.reload();
}; 


console.log(transcript)
});



recognition.addEventListener("end", recognition.start);

recognition.start();