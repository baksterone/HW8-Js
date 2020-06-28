import {timer} from '../login/signIn';
import {newImgDog} from '../dogAPI/dogAPI';

let ret = document.querySelector('.returnBtn').addEventListener('click', () => {
    document.querySelector('.dog').style.display = 'none';
    document.querySelector('.cat').style.display = 'none';
    document.querySelector('.btn').style.display = 'none';
    document.querySelector('.returnBtn').style.display = 'none';
    document.querySelector('.resultDog').style.display = 'none';
    document.querySelector('.resultCat').style.display = 'none';
    document.querySelector('.votes').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
    clearInterval(timer);
    newImgDog.src = '';
    newImgDog.alt = '';
})

export {ret};
