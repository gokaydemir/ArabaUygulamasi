//Kullanıcı adı Yazılı
const kisim = []
kisim.push(JSON.parse(localStorage.getItem('userInfo')))
let adı = kisim[0].kullaniciSonucu.name
let profil=document.getElementById('profil')
profil.innerText=adı.toUpperCase()

// Burger Menü
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
let form = document.getElementById('form')
let sifrem = document.getElementById('sifre')
let ad = document.getElementById('ad')
let soyad = document.getElementById('soyad')
let mail = document.getElementById('mail')
let kullanicim = document.getElementById('kullanici')

ad.value=kisim[0].kullaniciSonucu.name
soyad.value=kisim[0].kullaniciSonucu.lastName
kullanicim.value=kisim[0].kullaniciSonucu.username
mail.value=kisim[0].kullaniciSonucu.mail
sifrem.value=kisim[0].kullaniciSonucu.parola

form.addEventListener('submit',cikisYap)
function cikisYap(e) {

    window.location.href = '/IlkSayfa/ilkSayfa.html';
    e.preventDefault()
    
}
