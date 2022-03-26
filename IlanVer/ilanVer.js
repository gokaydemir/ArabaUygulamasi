const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

let form=document.getElementById('form')
let kullaniciAdi=document.getElementById('username')
let arabaMarkası=document.getElementById('marka')
let tipi=document.getElementById('type')
let yili=document.getElementById('yil')
let yakit=document.getElementById('yakit')
let fiyat=document.getElementById('fiyat')
let profil=document.getElementById('profil')
let km=document.getElementById('km')
let vites=document.getElementById('vites')

const kullaniciBilgileri=[]
kullaniciBilgileri.push(JSON.parse(localStorage.getItem('userInfo')))
kullaniciAdi.value=kullaniciBilgileri[0].kullaniciSonucu.username
profil.innerText=kullaniciBilgileri[0].kullaniciSonucu.name.toUpperCase()



form.addEventListener('submit',localStorageKaydet)
function localStorageKaydet(e) {
    let satılıkAraba={carGear:vites.value,carKm:km.value,carName:arabaMarkası.value, carType:tipi.value, carYear:yili.value, carFuel:yakit.value, Price:fiyat.value,userName:kullaniciAdi.value }
    let satılıkArabalar;
    if (localStorage.getItem('satilikAraba') === null) {
        satılıkArabalar = []
    }
    else {
        satılıkArabalar = JSON.parse(localStorage.getItem('satilikAraba'))

    }
    satılıkArabalar.push(satılıkAraba)
    localStorage.setItem('satilikAraba', JSON.stringify(satılıkArabalar)) 

    arabaMarkası.value=''
    fiyat.value=''
    tipi.value=''
    yili.value=''
    km.value=''
    vites.value=''
    window.location.href = '/Ilanlarım/ilanlarım.html';
    
    e.preventDefault()
    
}