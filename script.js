let scene1 = document.getElementById("scene1");
let scene2 = document.getElementById("scene2");

let continue1 = document.getElementById("continue1");

continue1.onclick = function(){

    scene1.style.display = "none";

    scene2.style.display = "block";

}
let scene3 = document.getElementById("scene3");

let continue2 = document.getElementById("continue2");

continue2.onclick = function(){

    scene2.style.display = "none";

    scene3.style.display = "block";

}
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let scene3Text = document.getElementById("scene3Text");

let noCount = 0;

let scene4 = document.getElementById("scene4");
let continue4 = document.getElementById("continue4");

let scene5 = document.getElementById("scene5");

let loadingText = document.getElementById("loadingText");

let progress = document.getElementById("progress");

let scene6 = document.getElementById("scene6");

let holdBtn = document.getElementById("holdBtn");

let holdStatus = document.getElementById("holdStatus");

let scene7 = document.getElementById("scene7");
let continue7 = document.getElementById("continue7");

let scene8 = document.getElementById("scene8");
let continue8 = document.getElementById("continue8");

let scene9 = document.getElementById("scene9");
let continue9 = document.getElementById("continue9");
let typewriter = document.getElementById("typewriter");

let scene10 = document.getElementById("scene10");

let continue10 = document.getElementById("continue10");

let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");

let choiceResult = document.getElementById("choiceResult");

let scene11=document.getElementById("scene11");

let giftBtn=document.getElementById("giftBtn");

let giftMessage=document.getElementById("giftMessage");

let continue11=document.getElementById("continue11");

let scene12=document.getElementById("scene12");

yesBtn.onclick = function(){

    scene3.style.display = "none";
    scene4.style.display = "block";

}

noBtn.onclick = function(){

    noCount++;

    if(noCount==1){

        scene3Text.innerHTML=
        "😒 Suar... Yes kar shanti se.";

    }

    else if(noCount==2){

        scene3Text.innerHTML=
        "😑 Ab bhi No? Itni bhi kya zidd hai... Yes dabao. 😒";

    }

    else{

        setTimeout(function(){

    scene3.style.display = "none";
    scene4.style.display = "block";

},2000);

    }

}

continue4.onclick = function(){

    scene4.style.display = "none";

    scene5.style.display = "block";

    let percent = 0;

    let messages = [

        "Collecting smiles... 😊",

        "Finding happy memories... 💙",

        "Adding a little magic... ✨",

        "Almost ready... 🌸"

    ];

    let msg = 0;

    loadingText.innerHTML = messages[0];

    let loading = setInterval(function(){

        percent++;

        progress.style.width = percent + "%";

        if(percent==25){

            loadingText.innerHTML = messages[1];

        }

        if(percent==50){

            loadingText.innerHTML = messages[2];

        }

        if(percent==75){

            loadingText.innerHTML = messages[3];

        }

        if(percent>=100){

            clearInterval(loading);

            setTimeout(function(){

                scene5.style.display = "none";

scene6.style.display = "block";
            },700);

        }

    },40);

}


let holdTimer;

function startHold(){

    holdStatus.innerHTML = "Keep Holding... ⏳";

    holdTimer = setTimeout(function(){

        holdStatus.innerHTML = "Unlocked! 🎉";

        setTimeout(function(){

            scene6.style.display = "none";
            scene7.style.display = "block";

        },1000);

    },3000);

}

function stopHold(){

    clearTimeout(holdTimer);

}

holdBtn.addEventListener("mousedown", startHold);
holdBtn.addEventListener("mouseup", stopHold);
holdBtn.addEventListener("mouseleave", stopHold);

// Mobile Support
holdBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    startHold();
});

holdBtn.addEventListener("touchend", stopHold);
holdBtn.addEventListener("touchcancel", stopHold);
continue7.onclick=function(){

    scene7.style.display="none";

    scene8.style.display="block";

}

continue8.onclick=function(){

    scene8.style.display="none";
    scene9.style.display="block";

    typewriter.innerHTML = "";
continue9.style.display = "none";

    let text = `Some people don't even realize
how special they are...

Maybe...

You're one of them. 💙

So I made this little journey
just to make you smile today. 😊`;

    let i = 0;

    let typing = setInterval(function(){

        typewriter.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typing);

            continue9.style.display = "inline-block";

        }

    },40);

}
continue9.onclick = function(){

    scene9.style.display = "none";

    scene10.style.display = "block";

}
function finishChoice(message){

    choiceResult.innerHTML=message;

    choice1.style.display="none";
    choice2.style.display="none";
    choice3.style.display="none";

    continue10.style.display="inline-block";

}

choice1.onclick=function(){

    finishChoice("🌷 I knew you'd pick flowers. Good choice! 😊");

}

choice2.onclick=function(){

    finishChoice("🍫 Chocolates are always a great idea. 😋");

}

choice3.onclick=function(){

    finishChoice("💌 I had a feeling you'd choose the surprise... 😉");

}

continue10.onclick=function(){

    scene10.style.display="none";

    giftBtn.style.display="inline-block";
    giftMessage.style.display="none";

    scene11.style.display="block";

}

giftBtn.onclick=function(){

    giftBtn.style.display="none";

    giftMessage.style.display="block";

}

continue11.onclick=function(){

    scene11.style.display="none";

    scene12.style.display="block";

}
