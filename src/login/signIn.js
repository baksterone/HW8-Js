import {getDog, newImgDog} from '../dogAPI/dogAPI';

let timer;

function timeDog(){
    getDog().then(response =>{ response.json().then(data => {
        newImgDog.src = data[0].url;
        newImgDog.alt = 'dog';
    })  
})
}




let guest = document.querySelector('.guest').addEventListener('click', () => {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.voteBtnDog').style.display = 'none';
    document.querySelector('.dogNews').style.display = 'none';
    document.querySelector('.returnBtn').style.display = 'block';
    document.querySelector('.dog').style.display = 'block';
    timer = setInterval(() => {
        timeDog();
    }, 5000);
})

let admin = document.querySelector('.signIn').addEventListener('click', () => {
    let name = document.getElementById('name').value,
        pass = document.getElementById('password').value;
    if(name.trim() === 'admin' && pass.trim() === 'admin'){
        document.querySelector('.btn').style.display = 'block';
        document.querySelector('.login').style.display = 'none';
    } else{
        alert('Такого пользователя нет');
    }
    
    
})

export {admin};
export {guest};
export {timer};