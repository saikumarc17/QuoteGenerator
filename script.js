
const Quote=document.getElementById('Quote');
const QuoteAuthor=document.getElementById('QuoteAuthor');

// using array of imageslinks for displaying randomly for each quote
let images=[
    "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg",
    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
    "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg",
    "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
    "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg",
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg",
    "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg",
    "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg",
    "https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg",
    "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
    "https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg",
    "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg"
]

// loading quote on page load
window.onload = () => {
    generateImage();
    getQuote()
};

// fetch api for getting quote 
async function getQuote(){
    generateImage();
    const url='https://api.freeapi.app/api/v1/public/quotes/quote/random';
    const options={method:'GET',headers:{accept:'application/json'}}
    try {
        const response=await fetch(url,options);
        const data=await response.json();
        Quote.innerText=`"${data.data.content}"`
        QuoteAuthor.innerText=`"${data.data.author}"`
    } catch (error) {
        console.log(error);
    }
}


function copyClipboard(){
    const copyText=`${Quote.innerText} \n ${QuoteAuthor.innerText}`;
    // using navigator/clipboard api
    navigator.clipboard.writeText(copyText)
    .then(()=>{alert(copyText)})
    .catch(()=>{alert("Failed to copy")})
}



function generateImage(){
    const ele=document.getElementById('createImage');
    // generating random number from 0-14 to get image from array of images
    ele.style.backgroundImage = `url('${images[Math.floor(Math.random() * 15)]}')`;
    console.log(images[Math.floor(Math.random() * 15)]);
    
}

function shareOnTwitter() {
    const message=`${Quote.innerText} \n${QuoteAuthor.innerText} \n`;
    const hashtags = `${QuoteAuthor.innerText}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&hashtags=${hashtags}`;
    window.open(twitterShareUrl, '_blank');
}
