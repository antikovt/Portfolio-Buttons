whoami = document.getElementById("tile-1");
whoami.addEventListener("click", function () {
    document.getElementById("whoami").scrollIntoView();
})

aboutme = document.getElementById("tile-2");
aboutme.addEventListener("click", function () {
    document.getElementById("aboutme").scrollIntoView();
})

uiux = document.getElementById("tile-3");
uiux.addEventListener("click", function () {
    document.getElementById("uiux").scrollIntoView();
})

photography = document.getElementById("tile-4");
photography.addEventListener("click", function () {
    document.getElementById("photography").scrollIntoView();
})

music = document.getElementById("tile-5");
music.addEventListener("click", function () {
    document.getElementById("music").scrollIntoView();
})

contactme = document.getElementById("tile-6");
contactme.addEventListener("click", function () {
    document.getElementById("contactme").scrollIntoView();
})




tags = document.getElementsByClassName("tags");
length = tags[0].clientWidth;

calculateOffset = function () {
    document.querySelector(':root').style.setProperty('--anim-offset', `-${length+(window.innerWidth/100*1.8)}px`);
};
calculateOffset();
window.onresize = calculateOffset;

for (let i=0; i<12; i++) {
    let newTag = document.createElement("p");
    newTag.classList.add("tag");
    newTag.innerHTML = tags[0].children[i].innerHTML;
    tags[0].appendChild(newTag);
}

tags[1].innerHTML = tags[0].innerHTML;