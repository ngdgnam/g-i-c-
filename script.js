const messages = [
  "🌼 Lời chúc 20/10 gửi các bạn nữ và cô giáo",
  "Nhân ngày Phụ nữ Việt Nam 20/10, xin gửi tới các cô giáo và các bạn nữ lời chúc tốt đẹp nhất",
  "Kính chúc các cô luôn mạnh khỏe, hạnh phúc và tiếp tục truyền ngọn lửa tri thức, tình yêu thương đến các thế hệ học trò",
  "Chúc các bạn nữ luôn xinh đẹp, tự tin, học tập tốt và đạt được nhiều thành công trong cuộc sống",
  "Chúc mọi người một ngày 20/10 thật ý nghĩa, ngập tràn niềm vui và yêu thương.",
  "Bên gia đình và bạn bè",
  "🌸✨",
  "🌼"
];

let msgIndex = 0;
let charIndex = 0;

function openLetter(){
  document.querySelector('.open-btn').style.display = 'none';
  const letter = document.getElementById('letter');
  letter.style.display = 'block';
  startFallingText();
  typeMessage();
}

function typeMessage(){
  if (msgIndex >= messages.length) return;
  const messageDiv = document.getElementById('message');
  if (charIndex === 0){
    messageDiv.innerHTML += "\n";
  }
  let current = messages[msgIndex];
  if (charIndex < current.length){
    messageDiv.innerHTML += current.charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, 25);
  } else {
    charIndex = 0;
    msgIndex++;
    setTimeout(typeMessage, 300);
  }
}

/* Hiệu ứng chữ rơi */
function startFallingText(){
  for(let i=0; i<10; i++){
    setInterval(()=>{
      createFallingText();
    }, 600 * Math.random() + 300);
  }
}

function createFallingText(){
  const textEl = document.createElement('div');
  textEl.className = 'falling-text';
  textEl.textContent = "20/10 ❤️";
  textEl.style.left = Math.random() * window.innerWidth + 'px';
  textEl.style.animationDuration = (3 + Math.random()*3) + 's';
  document.body.appendChild(textEl);
  setTimeout(()=> textEl.remove(), 7000);
}
