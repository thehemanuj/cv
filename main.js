let a=document.querySelector(".linkedin");
let b=document.querySelector(".whatsapp");
let c=document.querySelector(".instagram");
let d=document.querySelector(".facebook");
let e=document.querySelector(".gmail");
let f=document.querySelector(".qr");
let g=document.querySelector(".github");

a.onclick=()=>{
    f.style.backgroundImage="url(/cv/qr/linkedin.jpg)";
    f.style.backgroundSize="cover";
}

b.onclick=()=>{
    f.style.backgroundImage="url(/cv/qr/whatsapp.jpg)";
    f.style.backgroundSize="cover";
}

c.onclick=()=>{
    f.style.backgroundImage="url(/cv/qr/instagram.jpg)";
    f.style.backgroundSize="cover";
}

d.onclick=()=>{
    f.style.backgroundImage="url(/cv/qr/fb.jpg)";
    f.style.backgroundSize="cover";
}

e.onclick=()=>{
    f.style.backgroundImage="url(/cv/qr/gmail.png)";
    f.style.backgroundSize="cover";
}

g.onclick=()=>{
    f.style.backgroundImage="url(/cv/qr/github.jpg)";
    f.style.backgroundSize="cover";
}
