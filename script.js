const element = document.getElementById("element-10");

element.addEventListener("click", () => {
  if (element.style.backgroundColor === "lightblue") {
    element.style.backgroundColor = "darkred"; 
    element.style.color = "white";
  } else {
    element.style.backgroundColor = "lightblue"; 
    element.style.color = "darkred"; 
  }
});

const elementQuery = document.querySelector("#element-11");

elementQuery.addEventListener("click", () => {
  if (elementQuery.style.backgroundColor === "lightgreen") {
    elementQuery.style.backgroundColor = "greenyellow"; 
    elementQuery.style.color = "brown";
  } else {
    elementQuery.style.backgroundColor = "lightgreen";
    elementQuery.style.color = "blue";
  }
});




const imageContainer = document.getElementById("image-container");
const addBtn = document.getElementById("add-btn");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const removeBtn = document.getElementById("remove-btn");

addBtn.addEventListener("click", () => {
    const existingImage = document.getElementById("my-image");
    if (!existingImage) {
        const newImage = document.createElement("img");
        newImage.id = "my-image";
        newImage.src = "/images/city.jpg";
        newImage.alt = "City";
        newImage.style.display = "block";
        imageContainer.appendChild(newImage);
    }
});

increaseBtn.addEventListener("click", () => {
    const image = document.getElementById("my-image");
    if (image) {
        const currentWidth = parseInt(window.getComputedStyle(image).width);
        image.style.width = currentWidth + 20 + "px";
    }
});

decreaseBtn.addEventListener("click", () => {
    const image = document.getElementById("my-image");
    if (image) {
        const currentWidth = parseInt(window.getComputedStyle(image).width);
        if (currentWidth > 20) {
            image.style.width = currentWidth - 20 + "px";
        }
    }
});

removeBtn.addEventListener("click", () => {
    const image = document.getElementById("my-image");
    if (image) {
        image.remove();
    }
});























