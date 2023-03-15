const imageEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");

const nextEl = document.getElementById("next");
console.log(nextEl)
 
let x = 0;

prevEl.addEventListener('click', () => {
    x = x + 45;
    updateGallery();
});

next.addEventListener('click', () => {
    x = x - 45;
    updateGallery();
});

function updateGallery(){
    imageEl.style.transform = `perspective(1000px) rotateY(${x}deg)`
}

 