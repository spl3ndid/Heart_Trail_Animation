const bodyel = document.querySelector("body");

let lastMove = 0;
const throttleDelay = 50; // in milliseconds

bodyel.addEventListener("mousemove", (event) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastMove < throttleDelay) return;
    lastMove = currentTime;

    const x = event.clientX; 
    const y = event.clientY; 
    
    const spanel = document.createElement("span");
    spanel.style.left = x + "px";
    spanel.style.top = y + "px";

    const size = Math.random() * 50 + 50; // Sizes between 50px and 100px
    spanel.style.width = size + "px";
    spanel.style.height = size + "px";

    bodyel.appendChild(spanel);

    setTimeout(() => {
        spanel.remove();
    }, 3000); // Match this with the animation duration in CSS
});
