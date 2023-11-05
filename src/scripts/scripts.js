//Split text alternative
const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += '<span class="letter">' + letter + "</span>";
});
gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: "100%" },
  { y: 0, delay: 2, stagger: 0.05, ease: "back.out(3)" }
);
