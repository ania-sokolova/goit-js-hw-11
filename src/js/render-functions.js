import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function renderImages(images) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = ""; 
  if (images.length === 0) {
    iziToast.error({
      title: "Error",
      message: "Sorry, no images found. Please try another search!",
      position: "topRight",
    });
    return;
  }

  const galleryMarkup = images
    .map(
      ({ previewURL, largeImageURL, tags }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image"
                 src="${previewURL}"
                 data-source="${largeImageURL}"
                 alt="${tags}" />
          </a>
        </li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", galleryMarkup);

  new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
}


