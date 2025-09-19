// EmailJS
emailjs.init("rP3Q--SoF8J4DHCCD");

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm("service_qbzzrxn","template_mnld11s",this)
  .then(()=>{ Swal.fire({ icon:"success", title:"Message Sent!", text:"Your message has been sent successfully." }); this.reset(); })
  .catch(err=>{ Swal.fire({ icon:"error", title:"Oops...", text:"Failed to send message." }); console.error(err); });
});

// Smooth scroll for navbar links
document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click", e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior:"smooth" });
  });
});

// Typing effect
const typingElement = document.querySelector(".typing");
const texts = ["Software Engineer","Agentic AI Enthusiast","Web Developer","Python Developer"];
let textIndex=0, charIndex=0, typingDelay=150, erasingDelay=100, newTextDelay=1500;

function type(){ if(charIndex<texts[textIndex].length){ typingElement.textContent += texts[textIndex].charAt(charIndex); charIndex++; setTimeout(type,typingDelay); } else{ setTimeout(erase,newTextDelay); } }
function erase(){ if(charIndex>0){ typingElement.textContent = texts[textIndex].substring(0,charIndex-1); charIndex--; setTimeout(erase,erasingDelay); } else{ textIndex=(textIndex+1)%texts.length; setTimeout(type,typingDelay); } }
document.addEventListener("DOMContentLoaded",()=>{ if(texts.length) setTimeout(type,newTextDelay); });

// Dark/Light mode
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  themeBtn.innerHTML = document.body.classList.contains("dark") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark":"light");
});
if(localStorage.getItem("theme")==="dark"){ document.body.classList.add("dark"); themeBtn.innerHTML='<i class="fas fa-sun"></i>'; }

// Section reveal on scroll
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add("visible"); }
  });
},{ threshold:0.2 });
sections.forEach(section=>observer.observe(section));
