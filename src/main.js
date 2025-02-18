import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from "izitoast";
import "../izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".search-form");
const searchInput = form.querySelector("input[name='text']");

form.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const query = searchInput.value.trim();

  if (query === "") {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search query!",
      position: "topRight",
    });
    return;
  }

  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Failed to fetch images. Please try again!",
      position: "topRight",
    });
  }
});



// const apiKey = "48848365-f4e25352a2e58b0aa69d4606d";
// const baseUrl = "https://pixabay.com/api/";

// const form = document.querySelector(".search-form");
// const searchInput = form.querySelector("input[name='text']");

// async function fetchImages(query) {
//   const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo`;

//   try {
//     const response = await axios.get(url);
//     console.log("Fetched Images:", response.data);
//     renderImages(response.data.hits); 
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     iziToast.error({
//       title: "Error",
//       message: `Error fetching images: ${error}`,
//       position: "topRight",
//     });
//   }
// }


// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const query = searchInput.value.trim();

//   if (query === "") {
//     alert("Please enter a search query!");
//     return;
//   }

//   fetchImages(query); /
// });


// function renderImages(images) {

//   if (images.length == 0) {
//     iziToast.error({
//       title: "Error",
//       message: `Sorry, there are no images matching your search query. Please try again!`,
//       position: "topRight",
//     });
//   }


//   const gallery = document.querySelector('.gallery');

//   const galleryMarkup = images
//   .map(
//     ({ previewURL, largeImageURL, tags }) =>
//       `<li class="gallery-item">
//         <a class="gallery-link" href="${largeImageURL}">
//           <img class="gallery-image"
//                src="${previewURL}"
//                data-source="${largeImageURL}"
//                alt="${tags}" />
//         </a>
//       </li>`
//   )
//   .join('');

//   gallery.insertAdjacentHTML('beforeend', galleryMarkup);

//   const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

// }