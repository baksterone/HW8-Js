import {getDog} from '../dogAPI/dogAPI';
import {getCat} from '../catAPI/catAPI';


let dogDislikeArr = [];
let catDislikeArr = [];


let dogDislike = document.querySelector('.dogDislike').addEventListener('click', () => {
    getDog().then(response => { response.json().then(data => {
        dogDislikeArr.push(data[0].url);
        let newImg = document.querySelector('.dogImg')
        newImg.src = data[0].url;
        newImg.alt = 'dog';

        let l = dogDislikeArr.length;
        let dislikeBlock = document.querySelector('.dislikesDog');
        dislikeBlock.innerHTML =`<span>${l} dislikes</span>`;
        for (let img of dogDislikeArr){
            dislikeBlock.innerHTML += `<img src="${img}" class="dislikeImg" alt="dog">`;
          }
    })
})
})

let catDislike = document.querySelector('.catDislike').addEventListener('click', () => {
    getCat().then(response => { response.json().then(data => {
        catDislikeArr.push(data[0].url);
        let newImg = document.querySelector('.catImg')
        newImg.src = data[0].url;
        newImg.alt = 'cat';

        let l = catDislikeArr.length;
        let dislikeBlock = document.querySelector('.dislikesCat');
        dislikeBlock.innerHTML =`<span>${l} dislikes</span>`;
        for (let img of catDislikeArr){
            dislikeBlock.innerHTML += `<img src="${img}" class="dislikeImg" alt="cat">`;
          }
    })
})
})


export {dogDislike};
export {catDislike};