
const shareIcons = document.querySelector('.card__content__share-icons');
const shareBtn = document.querySelector('.card__content__button');

shareBtn.addEventListener('click', ()=>{
	shareIcons.classList.toggle('show');
	shareBtn.classList.toggle('rotate');
});