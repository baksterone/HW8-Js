import {catNews} from '../NYT/NYT_Api';

let catLinks = document.querySelector('.catNews');
let newImgCat = document.querySelector('.catImg');
let petName;

const CAT_IMG = 'https://api.thecatapi.com/v1/images/search?size=full';

// Получение картинок котов

async function getCat(){
    let cat = await fetch(CAT_IMG);
    return cat;
}

let showCat = document.querySelector('.catBtn').addEventListener('click', () => {
    let showCat = getCat();
    showCat.then(response =>{response.json().then(data => {
        
        
        newImgCat.src = data[0].url;
        newImgCat.alt = 'cat';
        
        if (data[0].breeds.length == 0){
            petName = "cat";
          } else{
            petName = data[0].breeds[0].name;
          }       
           catLinks = document.querySelector('.catNews');
           catLinks.innerHTML = '';
        

        catNews(petName);
        
        document.querySelector('.voteBtnCat').classList.add('show');
        document.querySelector('.cat').classList.add('show');
        document.querySelector('.btn').style.display = 'none';
        document.querySelector('.returnBtn').style.display = 'block';
        document.querySelector('.resultDog').style.display = 'none';
        document.querySelector('.resultCat').style.display = 'block';
        
    })  
});
})



export {showCat, getCat, catLinks, newImgCat};
