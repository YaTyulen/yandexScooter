const buttonPreview = document.querySelector('.photo-gallery__button--previous');
const buttonNext = document.querySelector('.photo-gallery__button--next');
const galleryList = document.querySelector('.photo-gallery__list');

buttonNext.addEventListener('click', scrollNextHandler);
buttonPreview.addEventListener('click', scrollPreviewHandler);
        

function scrollNextHandler(){
    for(let i = 0; i < galleryList.children.length; i++){

        if(galleryList.children[i].classList.contains("photo-gallery__item--active")){

            if(galleryList.children[0].classList.contains("photo-gallery__item--active")){
                buttonPreview.disabled = false;
            }

            galleryList.children[i].classList.remove("photo-gallery__item--active");
            galleryList.children[i + 1].classList.add("photo-gallery__item--active");

            if(galleryList.children[galleryList.children.length - 1].classList.contains("photo-gallery__item--active")){
                buttonNext.disabled = true;
            }

            break;
        }
    }
}

function scrollPreviewHandler(){
    for(let i = 0; i < galleryList.children.length; i++){

        if(galleryList.children[i].classList.contains("photo-gallery__item--active")){

            if(galleryList.children[galleryList.children.length - 1].classList.contains("photo-gallery__item--active")){
                buttonNext.disabled = false;
            }

            galleryList.children[i].classList.remove("photo-gallery__item--active");
            galleryList.children[i - 1].classList.add("photo-gallery__item--active");

            if(galleryList.children[0].classList.contains("photo-gallery__item--active")){
                buttonPreview.disabled = true;
            }

            break;
        }
    }
}

