const getCatImagesButton = document.querySelector(".getCatImagesButton");
const getDogImagesButton = document.querySelector(".getDogImagesButton");
const imageToDisplay = document.querySelector(".imageBlock");

getCatImagesButton.addEventListener("click", async () => {
  let randomImage = await getNewImage("cat");
  imageToDisplay.src = randomImage;
});
getDogImagesButton.addEventListener("click", async () => {
  let randomImage = await getNewImage("dog");
  imageToDisplay.src = randomImage;
});

async function getNewImage(param) {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(
    `https://api.unsplash.com/search/photos?query=${param}&client_id=K9gbP2Ze4NcQKZIfyQP7CYUgvEEg5iFX7o13c8p7ii4`
  )
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}
