 function iSaidDontPoke() {
    alert("I told you, Don't poke the fox!");
}


function  sayDontpoke() {
	alert("you are warned, don't poke the fox")
}

sayDontpoke()

//http://www.welivesecurity.com/wp-content/uploads/2014/08/Firefox-logo.png
//https://s-media-cache-ak0.pinimg.com/236x/4a/02/6e/4a026efbde8336cf570632dc2a03b412.jpg
var myImage = document.querySelector('img');

myImage.onclick = function() {
	iSaidDontPoke();
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'http://www.welivesecurity.com/wp-content/uploads/2014/08/Firefox-logo.png') {
      myImage.setAttribute ('src','https://s-media-cache-ak0.pinimg.com/236x/4a/02/6e/4a026efbde8336cf570632dc2a03b412.jpg');
    } else {
      myImage.setAttribute ('src','http://www.welivesecurity.com/wp-content/uploads/2014/08/Firefox-logo.png');
    }
}

