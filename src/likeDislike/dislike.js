import {getDog, dogLinks, newImgDog} from '../dogAPI/dogAPI';
import {getCat, catLinks, newImgCat} from '../catAPI/catAPI';
import {dogNews, catNews} from '../NYT/NYT_Api';


let dogDislikeArr = [],
    catDislikeArr = [],
    petName;


let dogDislike = document.querySelector('.dogDislike').addEventListener('click', () => {
    getDog().then(response => { response.json().then(data => {
        
        newImgDog.src = data[0].url;
        newImgDog.alt = 'dog';

        if (data[0].breeds.length == 0){
            petName = "dog";
          } else{
            petName = data[0].breeds[0].name;
          }
          
          dogLinks.innerHTML = '';
    })
})
        dogDislikeArr.push(newImgDog.src);
        let dislikeBlock = document.querySelector('.dislikesDog');
            let l = dogDislikeArr.length;
            dislikeBlock.innerHTML =`<span>${l} dislikes</span>`;
            for (let img of dogDislikeArr){
                dislikeBlock.innerHTML += `<img src="${img}" class="dislikeImg" alt="dog">`;
            }
            dogNews(petName);
})

let catDislike = document.querySelector('.catDislike').addEventListener('click', () => {
    getCat().then(response => { response.json().then(data => {
        
        
        newImgCat.src = data[0].url;
        newImgCat.alt = 'cat';

        if (data[0].breeds.length == 0){
            petName = "cat";
          } else{
            petName = data[0].breeds[0].name;
          }
          
          catLinks.innerHTML = '';
    })
})
        catDislikeArr.push(newImgCat.src);
        let dislikeBlock = document.querySelector('.dislikesCat');
            let l = catDislikeArr.length;
            dislikeBlock.innerHTML =`<span>${l} dislikes</span>`;
            for (let img of catDislikeArr){
                dislikeBlock.innerHTML += `<img src="${img}" class="dislikeImg" alt="cat">`;
            }
            catNews(petName);
})


export {dogDislike};
export {catDislike};