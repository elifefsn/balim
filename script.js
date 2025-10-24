function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Kalp yerine yıldırım ve kalp karışık
  const symbols = ["❤️", "💋", "💞"];
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 250);
