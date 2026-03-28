const offers = document.querySelector(".offers-items");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function slide(step) {
    const total = offers.children.length;
    index = (index + step + total) % total;
    offers.style.transform = `translateX(-${index * 100}%)`;
}
next.onclick = () => slide(1);
prev.onclick = () => slide(-1);
setInterval(() => slide(1), 5000);
const menuItems = [
    { name: "LASAL CHEESE", price: "$18", desc: "Lorem ipsum", img: "images/food1.png" },
    { name: "JUMBO CRAB SHRIMP", price: "$24", desc: "Lorem ipsum", img: "images/food2.png" },
    { name: "KOKTAIL JUICE", price: "$12", desc: "Lorem ipsum", img: "images/food3.png" },
    { name: "CAPO STEAK", price: "$60", desc: "Lorem ipsum", img: "images/food4.png" },
    { name: "ORGANIC FRUIT SALAD", price: "$8", desc: "Lorem ipsum", img: "images/food5.png" },
    { name: "CHEESE PIZZA", price: "$18", desc: "Lorem ipsum", img: "images/food6.png" },
    { name: "KOFTA MEAT", price: "$40", desc: "Lorem ipsum", img: "images/food7.jpeg" },
    { name: "SPANISH PIES", price: "$14", desc: "Lorem ipsum", img: "images/food8.jpeg" },
    { name: "CHEESE TOST", price: "$6", desc: "Lorem ipsum", img: "images/food9.jpeg" },
    { name: "FRUIT SALAD", price: "$14", desc: "Lorem ipsum", img: "images/food10.jpeg" },
    { name: "CHICKEN SHAWARMA", price: "$20", desc: "Lorem ipsum", img: "images/food11.jpeg" },
    { name: "MEGA CHEESE PIZZA", price: "$30", desc: "Lorem ipsum", img: "images/food12.jpeg" },
];

const left = document.querySelector(".menu-items-left");
const right = document.querySelector(".menu-items-right");

menuItems.forEach((item, i) => {
    const html = `
    <div class="menu-item">
      <img src="${item.img}">
      <div>
        <h3>${item.name} <span>${item.price}</span></h3>
        <p>${item.desc}</p>
      </div>
    </div>`;
    (i < 6 ? left : right).innerHTML += html;
});
const images = document.querySelectorAll(".img-gallery img");
const box = document.getElementById("boxContainer");
const boxItem = document.getElementById("boxItem");
const close = document.getElementById("close");
const nextImg = document.getElementById("nextImg");
const prevImg = document.getElementById("prevImg");
let current = 0;

images.forEach((img, i) => {
    img.onclick = () => {
        box.style.display = "flex";
        current = i;
        boxItem.style.backgroundImage = `url(${img.src})`;
    };
});

close.onclick = () => box.style.display = "none";
nextImg.onclick = () => {
    current = (current + 1) % images.length;
    boxItem.style.backgroundImage = `url(${images[current].src})`;
};
prevImg.onclick = () => {
    current = (current - 1 + images.length) % images.length;
    boxItem.style.backgroundImage = `url(${images[current].src})`;
};
document.getElementById("contactForm").onsubmit = function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
};
