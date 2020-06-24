const CAT_IMG = 'https://api.thecatapi.com/v1/images/search?size=full';

// Получение картинок котов

async function getCat(){
    let cat = await fetch(CAT_IMG);
    return cat;
}

let showCat = document.querySelector('.catBtn').addEventListener('click', () => {
    let showCat = getCat();
    showCat.then(response =>{response.json().then(data => {
        
        let newImg = document.querySelector('.catImg')
        newImg.src = data[0].url;
        newImg.alt = 'cat';
        newImg.style.display = 'block';
        
        document.querySelector('.voteBtnCat').classList.add('show');
        document.querySelector('.cat').classList.add('show');
        document.querySelector('.btn').style.display = 'none';
        document.querySelector('.returnBtn').style.display = 'block';
        document.querySelector('.resultDog').style.display = 'none';
        document.querySelector('.resultCat').style.display = 'block';
        
    })  
});
})



export {showCat};
export {getCat};