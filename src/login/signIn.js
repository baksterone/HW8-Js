import {getDog} from '../dogAPI/dogAPI';

let name = document.getElementById('name').value,
    pass = document.getElementById('password').value;

function timeDog(){
    getDog().then(response =>{ response.json().then(data => {
        
        let newImg = document.querySelector('.dogImg')
        newImg.src = data[0].url;
        newImg.alt = 'dog';
    })  
    })
}

let intervalDog = setInterval(timeDog, 5000);


let guest = document.querySelector('.guest').addEventListener('click', () => {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.voteBtnDog').style.display = 'none';
    document.querySelector('.returnBtn').style.display = 'block';
    document.querySelector('.dog').classList.add('show');
    intervalDog;
})

let admin = document.querySelector('.signIn').addEventListener('click', () => {
    if(name == 'admin' && pass == 'admin'){
        document.querySelector('.btn').style.display = 'block';
        document.querySelector('.login').style.display = 'none';
        
    }
})

export {admin};
export {guest};
export {intervalDog};