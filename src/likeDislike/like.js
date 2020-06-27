import {getDog, dogLinks, newImgDog} from '../dogAPI/dogAPI';
import {getCat, catLinks, newImgCat} from '../catAPI/catAPI';
import {dogNews, catNews} from '../NYT/NYT_Api';


let dogLikeArr = [];
let catLikeArr = [];
let petName;



let dogLike = document.querySelector('.dogLike').addEventListener('click', () => {
     getDog().then(response => { response.json().then(data => {
        dogLikeArr.push(data[0].url);
        newImgDog.src = data[0].url;
        newImgDog.alt = 'dog';

        if (data[0].breeds.length == 0){
            petName = "dog";
          } else{
            petName = data[0].breeds[0].name;
          }
          
          dogLinks.innerHTML = '';


        let likeBlock = document.querySelector('.likesDog');
        let l = dogLikeArr.length;
        likeBlock.innerHTML =`<span>${l} likes</span>`;
        for (let img of dogLikeArr){
            likeBlock.innerHTML += `<img src="${img}" class="likeImg" alt="dog">`;
          }
        dogNews(petName);
    })
})
})

let catLike = document.querySelector('.catLike').addEventListener('click', () => {
    getCat().then(response => { response.json().then(data => {
        catLikeArr.push(data[0].url);
        
        newImgCat.src = data[0].url;
        newImgCat.alt = 'cat';
        if (data[0].breeds.length == 0){
            petName = "cat";
          } else{
            petName = data[0].breeds[0].name;
          }
          
          
          catLinks.innerHTML = '';

        let l = catLikeArr.length;
        let likeBlock = document.querySelector('.likesCat');
        likeBlock.innerHTML =`<span>${l} likes</span>`;
        for (let img of catLikeArr){
            likeBlock.innerHTML += `<img src="${img}" class="likeImg" alt="cat">`;
          }
          catNews(petName);
    })
})
})


export {dogLike};
export {catLike};