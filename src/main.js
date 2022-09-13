const shareBtn = document.querySelector('.share-icon');
const socialIcons = document.querySelector('.card__content__social-icons');

shareBtn.addEventListener('click', () => {
  socialIcons.classList.toggle('show')
});