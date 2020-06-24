import {getDog} from '../dogAPI/dogAPI';
import {getCat} from '../catAPI/catAPI';


let dogLikeArr = [];
let catLikeArr = [];


let dogLike = document.querySelector('.dogLike').addEventListener('click', () => {
    getDog().then(response => { response.json().then(data => {
        dogLikeArr.push(data[0].url);
        let newImg = document.querySelector('.dogImg')
        newImg.src = data[0].url;
        newImg.alt = 'dog';

        let likeBlock = document.querySelector('.likesDog');
        let l = dogLikeArr.length;
        likeBlock.innerHTML =`<span>${l} likes</span>`;
        for (let img of dogLikeArr){
            likeBlock.innerHTML += `<img src="${img}" class="likeImg" alt="dog">`;
          }
    })
})
})

let catLike = document.querySelector('.catLike').addEventListener('click', () => {
    getCat().then(response => { response.json().then(data => {
        catLikeArr.push(data[0].url);
        let newImg = document.querySelector('.catImg')
        newImg.src = data[0].url;
        newImg.alt = 'cat';

        let l = catLikeArr.length;
        let likeBlock = document.querySelector('.likesCat');
        likeBlock.innerHTML =`<span>${l} likes</span>`;
        for (let img of catLikeArr){
            likeBlock.innerHTML += `<img src="${img}" class="likeImg" alt="cat">`;
          }
    })
})
})


export {dogLike};
export {catLike};