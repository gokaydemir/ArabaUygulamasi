let form = document.getElementById('form')
let sifrem = document.getElementById('sifre')
let sifreTekrar = document.getElementById('sifreTekrar')
let ad = document.getElementById('ad')
let soyad = document.getElementById('soyad')
let mail = document.getElementById('mail')
let kullanicim = document.getElementById('kullanici')

let yeniDizi = []
yeniDizi.push(JSON.parse(localStorage.getItem('kullanici'))) 
form.addEventListener('submit', kaydol)
function kaydol(e) {
    let kulaniciSonuc = yeniDizi[0].find((isim) => isim.mail === mail.value || isim.username === kullanicim.value)
    {
  if (!/^[a-zA-Z]*$/g.test(ad.value)) {
        alert("Lütfen Sayi veya Türkçe Karakter Girmeyin")
    }
    else if (!/^[a-zA-Z]*$/g.test(soyad.value)) {
        alert("Lütfen Sayi veya Türkçe Karakter Girmeyin")
    }
    else if (sifrem.value.length > 15) {
        alert('Lütfen Şifreniz Maximum 15 Haneli Olsun')
    }

    else if (!isNaN(kullanicim.value)) {
        alert('Lütfen Kullanici Adını Sadece Sayi Girmeyin')
    }

    else if (sifrem.value.length < 8) {
        alert('Lütfen Şifreniz Minium 8 Haneli Olsun')
    }

  else if (yeniDizi[0].mail === mail.value || yeniDizi[0].parola === sifrem.value) {
alert('ŞİFRE VE MAİL AYNI OLMASIN')
    } 

    else if (sifrem.value !== sifreTekrar.value) {
        alert('Şifreniz Aynı Olsun')
    }
    else if (kulaniciSonuc) {
        alert('Mail veya Kullanici Adı Kullanılmıştır')
    } 
    else if (sifrem.value == sifreTekrar.value) {
        window.location.href = '/GirisYapmaForm/girisYap.html';

       let yeniKullanici={name:ad.value, lastName:soyad.value, username:kullanicim.value, mail:mail.value, parola:sifrem.value }
        let kullanicilar;
        if (localStorage.getItem('kullanici') === null) {
            kullanicilar = []
        }
        else {
            kullanicilar = JSON.parse(localStorage.getItem('kullanici'))

        }
        kullanicilar.push(yeniKullanici)
        localStorage.setItem('kullanici', JSON.stringify(kullanicilar)) 
        sifrem.value = ''
        sifreTekrar.value = ''
        ad.value = ''
        soyad.value = ''
        kullanicim.value = ''
        mail.value = ''

       

    }
    e.preventDefault()
}
}

















