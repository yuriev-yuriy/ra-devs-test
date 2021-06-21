const heartRef = document.querySelectorAll('.main-list__item-svgHeart');
const star1Ref = document.querySelector('.star1');
const star2Ref = document.querySelector('.star2');
const star3Ref = document.querySelector('.star3');
const star4Ref = document.querySelector('.star4');
const star5Ref = document.querySelector('.star5');
const starRef = document.querySelectorAll('.second-wrapper .star');
const wrapperRef = document.querySelector('.second-wrapper');
let activeStarLenght = document.querySelectorAll(
  '.second-wrapper .star.main-list__item-svgStar-active',
).length;

console.log(activeStarLenght);

export default heartRef;

heartRef.forEach(item =>
  item.addEventListener('click', () => {
    if (item.classList.contains('main-list__item-svgStar-active')) {
      item.classList.remove('main-list__item-svgStar-active');
      return;
    }
    item.classList.add('main-list__item-svgStar-active');
  }),
);

// Функция проверяет куда нажали и меняет классы
var cStars = function (nowPos) {
  // Убираем у всех элементов active
  for (let i = 0; starRef.length > i; i++) {
    starRef[i].classList.remove('main-list__item-svgStar-active');
  }
  // Добавляет активный класс всем элементам до выбранного, включая выбранный
  for (let i = 0; nowPos + 1 > i; i++) {
    starRef[i].classList.add('main-list__item-svgStar-active');
  }
};

// При наведении
wrapperRef.addEventListener('mouseover', function (e) {
  let myTarget = e.target;
  // Длина массива
  let i = starRef.length;
  // Находи выбранный элемент в массиве и заносим его индекс в переменную
  while (i--) {
    if (starRef[i] == myTarget) {
      let currentIndex = i;
      cStars(currentIndex);
      break;
    }
    // cStars(currentIndex);
  }
  // cStars(currentIndex);
});

// При клике
wrapperRef.addEventListener('click', function (e) {
  // Выбранный элемент
  let myTarget = e.target;
  // Длина массива
  let i = starRef.length;
  // Находи выбранный элемент в массиве и заносим его индекс в переменную
  while (i--) {
    if (starRef[i] == myTarget) {
      let currentIndex = i;
      cStars(currentIndex);
      break;
    }
    // cStars(currentIndex);
  }
  // cStars(currentIndex);
  // Меняем количество активных айтемов
  activeStarLenght = document.querySelectorAll(
    '.second-wrapper .star.main-list__item-svgStar-active',
  ).length;
});

// При мауслив

wrapperRef.addEventListener('mouseleave', function (e) {
  cStars(+activeStarLenght - 1);
});
