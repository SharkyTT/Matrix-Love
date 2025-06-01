const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

//tamaño del Canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const loveText = "My Love";
const fontSize = 18;
const columns = canvas.width / fontSize; 
const drops = Array.from({length: columns }, () => 1)

// fondo transcluido
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FF69B4"; // Rosa brillante
  ctx.font = `${fontSize}px 'Courier New'`; 

  for (let i = 0; i < drops.length; i++) {
    const char = loveText[Math.floor(Math.random() * loveText.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

