import {intervalDog} from '../login/signIn';

let ret = document.querySelector('.returnBtn').addEventListener('click', () => {
    document.querySelector('.dog').classList.remove('show');
    document.querySelector('.cat').classList.remove('show');
    document.querySelector('.btn').style.display = 'none';
    document.querySelector('.returnBtn').style.display = 'none';
    document.querySelector('.resultDog').style.display = 'none';
    document.querySelector('.resultCat').style.display = 'none';
    document.querySelector('.votes').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
    clearInterval(intervalDog);
})

export {ret};
