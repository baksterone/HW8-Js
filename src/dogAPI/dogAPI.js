import {dogNews} from '../NYT/NYT_Api';

let dogLinks = document.querySelector('.dogNews');
let newImgDog = document.querySelector('.dogImg');
let petName;
const DOG_IMG = 'https://api.thedogapi.com/v1/images/search';

// Получение картинок собак

async function getDog(){
    let dog = await fetch(DOG_IMG);
    return dog;
}

let showDog = document.querySelector('.dogBtn').addEventListener('click', () => {
    let showDog = getDog();
    showDog.then(response =>{ response.json().then(data => {
        
        
        newImgDog.src = data[0].url;
        newImgDog.alt = 'dog';

        if (data[0].breeds.length == 0){
            petName = "dog";
          } else{
            petName = data[0].breeds[0].name;
          }       
           dogLinks = document.querySelector('.dogNews');
           dogLinks.innerHTML = '';
        

        dogNews(petName);
        
        
        
        
        document.querySelector('.voteBtnDog').style.display = 'block';
        document.querySelector('.dog').style.display = 'block';
        document.querySelector('.btn').style.display = 'none';
        document.querySelector('.returnBtn').style.display = 'block';
        document.querySelector('.resultDog').style.display = 'block';
        document.querySelector('.resultCat').style.display = 'none';
        dogLinks.style.display = 'flex';
    })  
})
})


export {dogLinks};
export {showDog};
export {getDog};
export {newImgDog};