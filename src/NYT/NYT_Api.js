import {newImgDog, dogLinks} from '../dogAPI/dogAPI';
import {newImgCat, catLinks} from '../catAPI/catAPI';


function dogNews(petName){
    newImgDog.onload = () => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${petName}&api-key=9Qrfj2x9LqaGAJSXAVviKPzDNwJFYYnV`)
        .then(response =>{
            response.json()
              .then(data =>{
                let i;
                for (i=0;i < 3;i++){
                  let a = document.createElement('a'),
                      arr = data.response.docs[i];
                  dogLinks.append(a);
                  a.href = arr.web_url;
                  a.innerHTML = arr.headline.main;
    }
              })})}}


function catNews(petName){
    newImgCat.onload = () => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${petName}&api-key=9Qrfj2x9LqaGAJSXAVviKPzDNwJFYYnV`)
        .then(response =>{
            response.json()
              .then(data =>{
                let i;
                for (i=0;i < 3;i++){
                  let a = document.createElement('a'),
                      arr = data.response.docs[i];
                  catLinks.append(a);
                  a.href = arr.web_url;
                  a.innerHTML = arr.headline.main;
    }
              })})}}

export {dogNews, catNews};