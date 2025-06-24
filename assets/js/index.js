//3D Rotation
const card = document.getElementById("myCard1");

card.addEventListener("click", () => {
  const isFlipped = card.style.transform === "rotateY(0.5turn)";
  card.style.transform = isFlipped ? "rotateY(0)" : "rotateY(0.5turn)";
});

const card2 = document.getElementById("myCard2");

card2.addEventListener("click", () => {
  const isFlipped = card2.style.transform === "rotateY(0.5turn)";
  card2.style.transform = isFlipped ? "rotateY(0)" : "rotateY(0.5turn)";
});



let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

// Auto-hide Navbar on scroll
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.transform = "translateY(0)";
        navbar.style.backgroundColor = "rgba(19, 86, 233, 0.4)"; // Change background color on scroll
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"; // Add shadow on scroll
    } else {
        navbar.style.transform = "translateY(-100%)";
    }
    prevScrollPos = currentScrollPos;
};

// Mobile Menu Toggle
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Card 1
//     const btn1 = document.getElementById('show-content-btn');
//     const content1 = document.getElementById('card-content');
//     if (btn1 && content1) {
//         btn1.addEventListener('click', function () {
//             content1.classList.toggle('hidden');
//         });
//     }
//     // Card 2
//     const btn2 = document.getElementById('show-content-btn2');
//     const content2 = document.getElementById('card-content2');
//     if (btn2 && content2) {
//         btn2.addEventListener('click', function () {
//             content2.classList.toggle('hidden');
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 4; i++) {
        const btn = document.getElementById(`more-btn-${i}`);
        const content = document.getElementById(`explain${i}`);
        if (btn && content) {
            btn.addEventListener('click', function () {
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    setTimeout(() => content.classList.remove('opacity-0'), 10); // trigger transition
                } else {
                    content.classList.add('opacity-0');
                    setTimeout(() => content.classList.add('hidden'), 500); // match duration-500
                }
            });
        }
    }
});