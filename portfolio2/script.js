// --- Typing Effect ---
const typingElement = document.querySelector(".typing");
const texts = ["Software Engineer","Agentic AI Enthusiast","Web Developer","Python Developer"];
let textIndex=0, charIndex=0, typingDelay=150, erasingDelay=100, newTextDelay=1500;

function type(){
  if(charIndex<texts[textIndex].length){
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase,newTextDelay);
  }
}
function erase(){
  if(charIndex>0){
    typingElement.textContent = texts[textIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase,erasingDelay);
  } else {
    textIndex=(textIndex+1)%texts.length;
    setTimeout(type,typingDelay);
  }
}
document.addEventListener("DOMContentLoaded",()=>{ if(texts.length) setTimeout(type,newTextDelay); });

// --- Dark/Light Toggle ---
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  themeBtn.innerHTML = document.body.classList.contains("dark") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark":"light");
});
// Load saved theme
window.addEventListener("DOMContentLoaded", ()=>{
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme==="dark"){ document.body.classList.add("dark"); themeBtn.innerHTML='<i class="fas fa-sun"></i>'; }
});

// --- Smooth Scroll ---
document.querySelectorAll(".sidebar-nav a").forEach(link=>{
  link.addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior:"smooth" });
  });
});

// --- EmailJS Form ---
emailjs.init("rP3Q--SoF8J4DHCCD");
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm("service_qbzzrxn","template_mnld11s",this)
  .then(() => { Swal.fire({ icon:"success", title:"Message Sent!", text:"Your message has been sent successfully." }); form.reset(); })
  .catch((err) => { Swal.fire({ icon:"error", title:"Oops...", text:"Failed to send message. Please try again later." }); console.error(err); });
});
