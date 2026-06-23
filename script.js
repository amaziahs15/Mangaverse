
// ==========================
// MANGA DATABASE
// ==========================

const mangaData = {

onepiece:{
title:"One Piece",
author:"Eiichiro Oda",
rating:"8.9/10",
genre:"Adventure, Fantasy, Action",
status:"Ongoing",
chapters:"1153",
image:"images/onepiece.jpg",
summary:"Monkey D. Luffy sails across the Grand Line searching for the legendary One Piece treasure. Together with the Straw Hat Pirates, he battles powerful enemies and uncovers ancient secrets while pursuing his dream of becoming the Pirate King."
},

dragonball:{
title:"Dragon Ball",
author:"Akira Toriyama",
rating:"8.7/10",
genre:"Action, Martial Arts",
status:"Completed",
chapters:"519",
image:"images/dragonball.jpg",
summary:"Goku trains relentlessly to become stronger while protecting Earth from increasingly dangerous enemies and cosmic threats."
},

bleach:{
title:"Bleach",
author:"Tite Kubo",
rating:"8.5/10",
genre:"Action, Supernatural",
status:"Completed",
chapters:"686",
image:"images/bleach.jpg",
summary:"Ichigo Kurosaki gains Soul Reaper powers and defends humanity from Hollows while uncovering the mysteries of Soul Society."
},

rezero:{
title:"Re:Zero",
author:"Tappei Nagatsuki",
rating:"8.1/10",
genre:"Fantasy, Drama, Isekai",
status:"Ongoing",
chapters:"700+",
image:"images/rezero.jpg",
summary:"Subaru Natsuki is transported to another world where he discovers Return by Death, allowing him to relive events after every death."
},

naruto:{
title:"Naruto",
author:"Masashi Kishimoto",
rating:"8.4/10",
genre:"Adventure, Action",
status:"Completed",
chapters:"700",
image:"images/naruto.jpg",
summary:"Naruto Uzumaki dreams of becoming Hokage while overcoming challenges, building friendships and protecting his village."
},

aot:{
title:"Attack on Titan",
author:"Hajime Isayama",
rating:"8.8/10",
genre:"Dark Fantasy",
status:"Completed",
chapters:"139",
image:"images/aot.jpg",
summary:"Humanity struggles against giant Titans while uncovering dark truths about the world beyond the walls."
},

jjk:{
title:"Jujutsu Kaisen",
author:"Gege Akutami",
rating:"8.7/10",
genre:"Action, Supernatural",
status:"Completed",
chapters:"271",
image:"images/jjk.jpg",
summary:"Yuji Itadori enters the world of cursed spirits after becoming the host of the legendary curse Sukuna."
},

solo:{
title:"Solo Leveling",
author:"Chugong",
rating:"8.6/10",
genre:"Fantasy, Action",
status:"Completed",
chapters:"179",
image:"images/sololeveling.jpg",
summary:"The weakest hunter Sung Jin-Woo gains access to a mysterious leveling system and becomes humanity's strongest warrior."
},

deathnote:{
title:"Death Note",
author:"Tsugumi Ohba",
rating:"9.0/10",
genre:"Mystery, Thriller",
status:"Completed",
chapters:"108",
image:"images/deathnote.jpg",
summary:"Light Yagami discovers a supernatural notebook capable of killing anyone whose name is written inside it."
},

demonslayer:{
title:"Demon Slayer",
author:"Koyoharu Gotouge",
rating:"8.6/10",
genre:"Fantasy, Action",
status:"Completed",
chapters:"205",
image:"images/demonslayer.jpg",
summary:"Tanjiro Kamado joins the Demon Slayer Corps to save his sister and avenge his family."
}

};

// ==========================
// SEARCH
// ==========================

const searchBox =
document.querySelector(".search-box");

if(searchBox){

searchBox.addEventListener("keyup",()=>{

const value =
searchBox.value.toLowerCase();

const cards =
document.querySelectorAll(".manga-card");

cards.forEach(card=>{

const title =
card.querySelector("h4")
.textContent
.toLowerCase();

if(title.includes(value)){

card.parentElement.style.display="block";

}else{

card.parentElement.style.display="none";

}

});

});

}

// ==========================
// MODAL
// ==========================

function showManga(name){

const manga = mangaData[name];

document.getElementById("modalData").innerHTML = `

<img src="${manga.image}"
class="modal-cover">

<h2 class="modal-title">
${manga.title}
</h2>

<div class="modal-info">

<div class="modal-box">
<b>👨 Author</b><br>
${manga.author}
</div>

<div class="modal-box">
<b>⭐ Rating</b><br>
${manga.rating}
</div>

<div class="modal-box">
<b>📚 Chapters</b><br>
${manga.chapters}
</div>

<div class="modal-box">
<b>📈 Status</b><br>
${manga.status}
</div>

<div class="modal-box">
<b>🎭 Genre</b><br>
${manga.genre}
</div>

</div>

<h4 style="color:#ff3b3b;margin-top:20px;">
📖 Story Summary
</h4>

<p class="modal-summary">
${manga.summary}
</p>

`;

document.getElementById("mangaModal")
.style.display="block";

}

// ==========================
// CLOSE MODAL
// ==========================

function closeModal(){

document.getElementById("mangaModal")
.style.display="none";

}

window.onclick = function(event){

const modal =
document.getElementById("mangaModal");

if(event.target === modal){

modal.style.display="none";

}

};

// ==========================
// SCROLL REVEAL
// ==========================

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(
".manga-card,.trend-card,.genre-box"
).forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition="all 1s ease";

observer.observe(el);

});

// ==========================
// PARTICLES
// ==========================

const particles =
document.querySelector(".particles");

if(particles){

for(let i=0;i<40;i++){

const particle =
document.createElement("span");

particle.style.position="absolute";

particle.style.width=
Math.random()*5+2+"px";

particle.style.height=
particle.style.width;

particle.style.background="red";

particle.style.borderRadius="50%";

particle.style.left=
Math.random()*100+"%";

particle.style.top=
Math.random()*100+"%";

particle.style.opacity=
Math.random();

particle.style.boxShadow=
"0 0 10px red";

particle.style.animation=
`floatParticle ${Math.random()*10+5}s linear infinite`;

particles.appendChild(particle);

}

}
