let kullaniciAdi=document.getElementById('kullanici')
let sifre=document.getElementById('sifre')
let form=document.getElementById('form')
let yazi=document.getElementById('yazi')
const kullanici=[]
kullanici.push(JSON.parse(localStorage.getItem('kullanici')))
console.log(kullanici);
form.addEventListener('submit',kullaniciIslem)

function kullaniciIslem(e) {
    
    let kullaniciSonucu=kullanici[0].find((kullanici)=>kullanici.username===kullaniciAdi.value&&kullanici.parola===sifre.value)
 

    if (kullaniciSonucu) {
        window.location.href = '/AnaSayfa/anaSayfa.html';
        let yeniKullanici=kullanici.filter(yeniKullanici=>yeniKullanici.username==kullaniciAdi.value)
        let user= {kullaniciSonucu}
        localStorage.setItem('userInfo', JSON.stringify(user) )
        let userInfo = localStorage.getItem('userInfo')
       
    
    }
        else{
            yazi.innerHTML='Kullanıcı Adı veya Şifre Hatalı'
            yazi.style.backgroundColor='red'
            yazi.style.color='white'
            sifre.value=''
        }
    
    e.preventDefault()
    
}

