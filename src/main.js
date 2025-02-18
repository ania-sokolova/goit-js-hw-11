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


