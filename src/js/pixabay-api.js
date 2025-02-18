
import axios from "axios";

const apiKey = "48848365-f4e25352a2e58b0aa69d4606d";
const baseUrl = "https://pixabay.com/api/";

// Function to fetch images from Pixabay API
export async function fetchImages(query) {
  const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo`;

  try {
    const response = await axios.get(url);
    return response.data.hits; // Return image data
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error; // Rethrow to handle in main.js
  }
}






// const apiKey = "48848365-f4e25352a2e58b0aa69d4606d";
// const baseUrl = "https://pixabay.com/api/";


// async function fetchImages(query) {
//   const url = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo`;

//   try {
//     const response = await axios.get(url);
//     console.log("Fetched Images:", response.data);
//     renderImages(response.data.hits); // Call the rendering function
//   } catch (error) {
//     console.error("Error fetching images:", error);
//   }
// }