/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/NYT/NYT_Api.js":
/*!****************************!*\
  !*** ./src/NYT/NYT_Api.js ***!
  \****************************/
/*! exports provided: dogNews, catNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dogNews", function() { return dogNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catNews", function() { return catNews; });
/* harmony import */ var _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dogAPI/dogAPI */ "./src/dogAPI/dogAPI.js");
/* harmony import */ var _catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catAPI/catAPI */ "./src/catAPI/catAPI.js");



function dogNews(petName) {
  _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__["newImgDog"].onload = () => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${petName}&api-key=9Qrfj2x9LqaGAJSXAVviKPzDNwJFYYnV`).then(response => {
      response.json().then(data => {
        let i;

        for (i = 0; i < 3; i++) {
          let a = document.createElement('a'),
              arr = data.response.docs[i];
          _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__["dogLinks"].append(a);
          a.href = arr.web_url;
          a.innerHTML = arr.headline.main;
        }
      });
    });
  };
}

function catNews(petName) {
  _catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__["newImgCat"].onload = () => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${petName}&api-key=9Qrfj2x9LqaGAJSXAVviKPzDNwJFYYnV`).then(response => {
      response.json().then(data => {
        let i;

        for (i = 0; i < 3; i++) {
          let a = document.createElement('a'),
              arr = data.response.docs[i];
          _catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__["catLinks"].append(a);
          a.href = arr.web_url;
          a.innerHTML = arr.headline.main;
        }
      });
    });
  };
}



/***/ }),

/***/ "./src/catAPI/catAPI.js":
/*!******************************!*\
  !*** ./src/catAPI/catAPI.js ***!
  \******************************/
/*! exports provided: showCat, getCat, catLinks, newImgCat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCat", function() { return showCat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCat", function() { return getCat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catLinks", function() { return catLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newImgCat", function() { return newImgCat; });
/* harmony import */ var _NYT_NYT_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NYT/NYT_Api */ "./src/NYT/NYT_Api.js");

let catLinks = document.querySelector('.catNews');
let newImgCat = document.querySelector('.catImg');
let petName;
const CAT_IMG = 'https://api.thecatapi.com/v1/images/search?size=full'; // Получение картинок котов

async function getCat() {
  let cat = await fetch(CAT_IMG);
  return cat;
}

let showCat = document.querySelector('.catBtn').addEventListener('click', () => {
  let showCat = getCat();
  showCat.then(response => {
    response.json().then(data => {
      newImgCat.src = data[0].url;
      newImgCat.alt = 'cat';

      if (data[0].breeds.length == 0) {
        petName = "cat";
      } else {
        petName = data[0].breeds[0].name;
      }

      catLinks = document.querySelector('.catNews');
      catLinks.innerHTML = '';
      Object(_NYT_NYT_Api__WEBPACK_IMPORTED_MODULE_0__["catNews"])(petName);
      document.querySelector('.voteBtnCat').classList.add('show');
      document.querySelector('.cat').classList.add('show');
      document.querySelector('.btn').style.display = 'none';
      document.querySelector('.returnBtn').style.display = 'block';
      document.querySelector('.resultDog').style.display = 'none';
      document.querySelector('.resultCat').style.display = 'block';
    });
  });
});


/***/ }),

/***/ "./src/dogAPI/dogAPI.js":
/*!******************************!*\
  !*** ./src/dogAPI/dogAPI.js ***!
  \******************************/
/*! exports provided: dogLinks, showDog, getDog, newImgDog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dogLinks", function() { return dogLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDog", function() { return showDog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDog", function() { return getDog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newImgDog", function() { return newImgDog; });
/* harmony import */ var _NYT_NYT_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NYT/NYT_Api */ "./src/NYT/NYT_Api.js");

let dogLinks = document.querySelector('.dogNews');
let newImgDog = document.querySelector('.dogImg');
let petName;
const DOG_IMG = 'https://api.thedogapi.com/v1/images/search'; // Получение картинок собак

async function getDog() {
  let dog = await fetch(DOG_IMG);
  return dog;
}

let showDog = document.querySelector('.dogBtn').addEventListener('click', () => {
  let showDog = getDog();
  showDog.then(response => {
    response.json().then(data => {
      newImgDog.src = data[0].url;
      newImgDog.alt = 'dog';

      if (data[0].breeds.length == 0) {
        petName = "dog";
      } else {
        petName = data[0].breeds[0].name;
      }

      dogLinks = document.querySelector('.dogNews');
      dogLinks.innerHTML = '';
      Object(_NYT_NYT_Api__WEBPACK_IMPORTED_MODULE_0__["dogNews"])(petName);
      document.querySelector('.voteBtnDog').classList.add('show');
      document.querySelector('.dog').classList.add('show');
      document.querySelector('.btn').style.display = 'none';
      document.querySelector('.returnBtn').style.display = 'block';
      document.querySelector('.resultDog').style.display = 'block';
      document.querySelector('.resultCat').style.display = 'none';
    });
  });
});





/***/ }),

/***/ "./src/likeDislike/dislike.js":
/*!************************************!*\
  !*** ./src/likeDislike/dislike.js ***!
  \************************************/
/*! exports provided: dogDislike, catDislike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dogDislike", function() { return dogDislike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catDislike", function() { return catDislike; });
/* harmony import */ var _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dogAPI/dogAPI */ "./src/dogAPI/dogAPI.js");
/* harmony import */ var _catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catAPI/catAPI */ "./src/catAPI/catAPI.js");


let dogDislikeArr = [];
let catDislikeArr = [];
let dogDislike = document.querySelector('.dogDislike').addEventListener('click', () => {
  Object(_dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__["getDog"])().then(response => {
    response.json().then(data => {
      dogDislikeArr.push(data[0].url);
      let newImg = document.querySelector('.dogImg');
      newImg.src = data[0].url;
      newImg.alt = 'dog';
      let l = dogDislikeArr.length;
      let dislikeBlock = document.querySelector('.dislikesDog');
      dislikeBlock.innerHTML = `<span>${l} dislikes</span>`;

      for (let img of dogDislikeArr) {
        dislikeBlock.innerHTML += `<img src="${img}" class="dislikeImg" alt="dog">`;
      }
    });
  });
});
let catDislike = document.querySelector('.catDislike').addEventListener('click', () => {
  Object(_catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__["getCat"])().then(response => {
    response.json().then(data => {
      catDislikeArr.push(data[0].url);
      let newImg = document.querySelector('.catImg');
      newImg.src = data[0].url;
      newImg.alt = 'cat';
      let l = catDislikeArr.length;
      let dislikeBlock = document.querySelector('.dislikesCat');
      dislikeBlock.innerHTML = `<span>${l} dislikes</span>`;

      for (let img of catDislikeArr) {
        dislikeBlock.innerHTML += `<img src="${img}" class="dislikeImg" alt="cat">`;
      }
    });
  });
});



/***/ }),

/***/ "./src/likeDislike/like.js":
/*!*********************************!*\
  !*** ./src/likeDislike/like.js ***!
  \*********************************/
/*! exports provided: dogLike, catLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dogLike", function() { return dogLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catLike", function() { return catLike; });
/* harmony import */ var _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dogAPI/dogAPI */ "./src/dogAPI/dogAPI.js");
/* harmony import */ var _catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catAPI/catAPI */ "./src/catAPI/catAPI.js");
/* harmony import */ var _NYT_NYT_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NYT/NYT_Api */ "./src/NYT/NYT_Api.js");



let dogLikeArr = [];
let catLikeArr = [];
let petName;
let dogLike = document.querySelector('.dogLike').addEventListener('click', () => {
  Object(_dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__["getDog"])().then(response => {
    response.json().then(data => {
      dogLikeArr.push(data[0].url);
      _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__["newImgDog"].src = data[0].url;
      _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__["newImgDog"].alt = 'dog';

      if (data[0].breeds.length == 0) {
        petName = "dog";
      } else {
        petName = data[0].breeds[0].name;
      }

      _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__["dogLinks"].innerHTML = '';
      let likeBlock = document.querySelector('.likesDog');
      let l = dogLikeArr.length;
      likeBlock.innerHTML = `<span>${l} likes</span>`;

      for (let img of dogLikeArr) {
        likeBlock.innerHTML += `<img src="${img}" class="likeImg" alt="dog">`;
      }

      Object(_NYT_NYT_Api__WEBPACK_IMPORTED_MODULE_2__["dogNews"])(petName);
    });
  });
});
let catLike = document.querySelector('.catLike').addEventListener('click', () => {
  Object(_catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__["getCat"])().then(response => {
    response.json().then(data => {
      catLikeArr.push(data[0].url);
      _catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__["newImgCat"].src = data[0].url;
      _catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__["newImgCat"].alt = 'cat';

      if (data[0].breeds.length == 0) {
        petName = "cat";
      } else {
        petName = data[0].breeds[0].name;
      }

      _catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__["catLinks"].innerHTML = '';
      let l = catLikeArr.length;
      let likeBlock = document.querySelector('.likesCat');
      likeBlock.innerHTML = `<span>${l} likes</span>`;

      for (let img of catLikeArr) {
        likeBlock.innerHTML += `<img src="${img}" class="likeImg" alt="cat">`;
      }

      Object(_NYT_NYT_Api__WEBPACK_IMPORTED_MODULE_2__["catNews"])(petName);
    });
  });
});



/***/ }),

/***/ "./src/login/signIn.js":
/*!*****************************!*\
  !*** ./src/login/signIn.js ***!
  \*****************************/
/*! exports provided: admin, guest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin", function() { return admin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guest", function() { return guest; });
/* harmony import */ var _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dogAPI/dogAPI */ "./src/dogAPI/dogAPI.js");

let name = document.getElementById('name').value,
    pass = document.getElementById('password').value;

function timeDog() {
  Object(_dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__["getDog"])().then(response => {
    response.json().then(data => {
      let newImg = document.querySelector('.dogImg');
      newImg.src = data[0].url;
      newImg.alt = 'dog';
    });
  });
} // let intervalDog = setInterval(timeDog, 5000);


let guest = document.querySelector('.guest').addEventListener('click', () => {
  document.querySelector('.login').style.display = 'none';
  document.querySelector('.voteBtnDog').style.display = 'none';
  document.querySelector('.returnBtn').style.display = 'block';
  document.querySelector('.dog').classList.add('show'); // intervalDog;
});
let admin = document.querySelector('.signIn').addEventListener('click', event => {
  if (name.trim() === 'admin' && pass.trim() === 'admin') {
    document.querySelector('.btn').style.display = 'block';
    document.querySelector('.login').style.display = 'none';
    alert('hi');
  }

  event.preventDefault();
});

 // export {intervalDog};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dogAPI/dogAPI */ "./src/dogAPI/dogAPI.js");
/* harmony import */ var _catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catAPI/catAPI */ "./src/catAPI/catAPI.js");
/* harmony import */ var _likeDislike_like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likeDislike/like */ "./src/likeDislike/like.js");
/* harmony import */ var _likeDislike_dislike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likeDislike/dislike */ "./src/likeDislike/dislike.js");
/* harmony import */ var _return_returnBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./return/returnBtn */ "./src/return/returnBtn.js");
/* harmony import */ var _result_resultBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result/resultBlock */ "./src/result/resultBlock.js");
/* harmony import */ var _login_signIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/signIn */ "./src/login/signIn.js");











_dogAPI_dogAPI__WEBPACK_IMPORTED_MODULE_0__["showDog"]; //Отрисовка собак при нажатии на кнопку "Dog"

_catAPI_catAPI__WEBPACK_IMPORTED_MODULE_1__["showCat"]; //Отрисовка котов при нажатии на кнопку "Cat"

_likeDislike_like__WEBPACK_IMPORTED_MODULE_2__["dogLike"]; //Добавление лайков собак

_likeDislike_like__WEBPACK_IMPORTED_MODULE_2__["catLike"]; //Добавление лайков котов

_likeDislike_dislike__WEBPACK_IMPORTED_MODULE_3__["dogDislike"]; //Добавление дислайков собак

_likeDislike_dislike__WEBPACK_IMPORTED_MODULE_3__["catDislike"]; //Добавление дислайков котов

_result_resultBlock__WEBPACK_IMPORTED_MODULE_5__["dogResult"]; //результаты голосования

_result_resultBlock__WEBPACK_IMPORTED_MODULE_5__["catResult"]; //результаты голосования

_return_returnBtn__WEBPACK_IMPORTED_MODULE_4__["ret"]; //Кнопка return

_login_signIn__WEBPACK_IMPORTED_MODULE_6__["guest"]; //Войти как гость

_login_signIn__WEBPACK_IMPORTED_MODULE_6__["admin"]; //Войти как зарегестрированный пользователь логин и пароль admin

/***/ }),

/***/ "./src/result/resultBlock.js":
/*!***********************************!*\
  !*** ./src/result/resultBlock.js ***!
  \***********************************/
/*! exports provided: dogResult, catResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dogResult", function() { return dogResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catResult", function() { return catResult; });
let dogResult = document.querySelector('.resultDog').addEventListener('click', () => {
  document.querySelector('.votes').style.display = 'block';
  document.querySelector('.cats').style.display = 'none';
  document.querySelector('.dogs').style.display = 'flex';
});
let catResult = document.querySelector('.resultCat').addEventListener('click', () => {
  document.querySelector('.votes').style.display = 'block';
  document.querySelector('.dogs').style.display = 'none';
  document.querySelector('.cats').style.display = 'flex';
});



/***/ }),

/***/ "./src/return/returnBtn.js":
/*!*********************************!*\
  !*** ./src/return/returnBtn.js ***!
  \*********************************/
/*! exports provided: ret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ret", function() { return ret; });
/* harmony import */ var _login_signIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/signIn */ "./src/login/signIn.js");

let ret = document.querySelector('.returnBtn').addEventListener('click', () => {
  document.querySelector('.dog').classList.remove('show');
  document.querySelector('.cat').classList.remove('show');
  document.querySelector('.btn').style.display = 'none';
  document.querySelector('.returnBtn').style.display = 'none';
  document.querySelector('.resultDog').style.display = 'none';
  document.querySelector('.resultCat').style.display = 'none';
  document.querySelector('.votes').style.display = 'none';
  document.querySelector('.login').style.display = 'block'; // clearInterval(intervalDog);
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map