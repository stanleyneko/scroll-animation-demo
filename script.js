// document.addEventListener("scroll", () => {
//   const box = document.getElementById("box1");
//   const rect = box.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   if (rect.top < windowHeight - 100) {
//     box.classList.add("visible");
//   }
// });

// document.addEventListener("scroll", () => {
//   alert("Hello! I am an alert box!!");
// });

const showBox = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ["0 100px", 0],
  };
  entries[0].target.animate(keyframes, 500);
};
const boxObserver = new IntersectionObserver(showBox);
boxObserver.observe(document.getElementById("box1"));

const showHello = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ["0 100px", 0],
  };
  entries[0].target.animate(keyframes, 500);
};

const helloObserver = new IntersectionObserver(showHello);
helloObserver.observe(document.getElementById("hello"));
