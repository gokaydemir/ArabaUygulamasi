let profil=document.getElementById('profil')
const arabalar=[]

arabalar.push(JSON.parse(localStorage.getItem('satilikAraba')))

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const kullaniciBilgileri=[]
kullaniciBilgileri.push(JSON.parse(localStorage.getItem('userInfo')))
console.log(kullaniciBilgileri[0].kullaniciSonucu.username);
profil.innerText=kullaniciBilgileri[0].kullaniciSonucu.name.toUpperCase()

function creatCard() {
   let container=document.getElementById('container')
    let row=document.getElementById('row')
    container.appendChild(row)
    for (let i = 0; i < arabalar[0].length; i++) {
        if (arabalar[0][i].userName===kullaniciBilgileri[0].kullaniciSonucu.username) {
            const col=document.createElement('div');
            col.classList.add('col-md-4');
            row.appendChild(col);
            
            const cardRounded=document.createElement('div')
            cardRounded.classList.add("card")
            cardRounded.classList.add("rounded")
            col.appendChild(cardRounded)
                
            // Card İmage
            const image=document.createElement('div')
            image.classList.add('card-image')
            cardRounded.appendChild(image)
        
            const badge=document.createElement('span')
            badge.classList.add('card-notify-badge')
            image.appendChild(badge)
            badge.innerText=arabalar[0][i].userName
        
            const year=document.createElement('span')
            year.classList.add('card-notify-year')
            image.appendChild(year)
            year.innerText=arabalar[0][i].carYear
        
            const imageFluid=document.createElement('img')
            imageFluid.classList.add('img-fluid')
            image.appendChild(imageFluid)
            imageFluid.src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            
            // Card İmage Overlay
            const overlay=document.createElement('div')
            overlay.classList.add('card-image-overlay')
            overlay.classList.add('m-auto')
            cardRounded.appendChild(overlay)
        
            const detail1=document.createElement('span')
            detail1.classList.add('card-detail-badge')
            overlay.appendChild(detail1)
            detail1.innerText=arabalar[0][i].carFuel
        
            const detail2=document.createElement('span')
            detail2.classList.add('card-detail-badge')
            overlay.appendChild(detail2)
            detail2.innerText=arabalar[0][i].Price+' TL'
        
            const detail3=document.createElement('span')
            detail3.classList.add('card-detail-badge')
            overlay.appendChild(detail3)
            detail3.innerText=arabalar[0][i].carGear
        
            const detail4=document.createElement('span')
            detail4.classList.add('card-detail-badge')
            overlay.appendChild(detail4)
            detail4.innerText=arabalar[0][i].carType

            const detail5=document.createElement('span')
            detail5.classList.add('card-detail-badge')
            overlay.appendChild(detail5)
            detail5.innerText=arabalar[0][i].carKm + ' KM'
            
            const detail6=document.createElement('span')
            detail6.classList.add('card-detail-badge')
            overlay.appendChild(detail6)
            detail6.innerText=arabalar[0][i].carModel
            
        
                // Card Body
                const body=document.createElement('div')
                body.classList.add('card-body')
                body.classList.add('text-center')
                cardRounded.appendChild(body)
               
                const title=document.createElement('div')
                title.classList.add('ad-title')
                title.classList.add('m-auto')
                body.appendChild(title)
        
                const yazi=document.createElement('h5')
                yazi.classList.add('yazı')
                title.appendChild(yazi)
                yazi.innerText= arabalar[0][i].carName
                yazi.style.marginTop='1.2vh'
        
                const btn=document.createElement('a')
                btn.classList.add('ad-btn')
                body.appendChild(btn)
                btn.innerText='Satın Al'
                btn.style.cursor='pointer'
                btn.style.color='white';
        }
        else{
           
            
        }


    }
    
}
creatCard();