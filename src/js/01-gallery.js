// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryRef = document.querySelector('.gallery');
const galleryCard = createGalleryCard(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryCard);


function createGalleryCard(gallery) {
    return gallery.map(({ description, preview, original }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}"">
            <img 
            class="gallery__image"
            src="${preview}" 
            alt="${description}">
        </a>
    </li>
    `;
    }).join('');
     
}
console.log(galleryCard)

    const lightbox = new SimpleLightbox('.gallery__item a', {
        captionsData: 'alt',
        captionDelay: 250,
    });


