function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 2000);
}
setInterval(createStar, 100);

