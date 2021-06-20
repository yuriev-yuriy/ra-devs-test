const heartRef = document.querySelectorAll('.main-list__item-svgHeart');

export default heartRef;

heartRef.forEach(item =>
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      return;
    }
    item.classList.add('active');
  }),
);
