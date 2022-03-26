const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const kisim = []
kisim.push(JSON.parse(localStorage.getItem('userInfo')))
console.log(kisim[0].kullaniciSonucu.name);
let ad = kisim[0].kullaniciSonucu.name
let soyad = kisim[0].kullaniciSonucu.lastName


let yazi = document.getElementById('yazi')
yazi.innerHTML = 'Hoşgeldiniz ' + ad.toUpperCase() + ' ' + soyad.toUpperCase() 

let profil=document.getElementById('profil')
profil.innerText=ad.toUpperCase()

