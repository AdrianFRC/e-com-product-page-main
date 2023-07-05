

const itemPrice = 125;
const deleteCartItems = document.getElementById("delete-items");
const cartItem = document.querySelector(".cart-item");
const checkOutButton = document.querySelector(".checkout");
const cartEmpty = document.querySelector(".cart-empty");
const priceQuantity = document.querySelector(".price-quantity");
const total = document.querySelector(".total");
const headerItems = document.querySelector(".header-items");
const quantity = document.querySelector(".quantity");
function plusQuantity(){
  quantity.value = Number(quantity.value) + 1;
}

function minusQuantity(){
  if(quantity.value != 0){
    quantity.value = Number(quantity.value) - 1;
  }
}

function addToCart() {
  const inputValue = document.querySelector("input.quantity").value;
  if (inputValue != 0) {
    if (!headerItems.querySelector("p")) {
      const cartItem = document.createElement("p");
      headerItems.appendChild(cartItem);
      cartItem.textContent = inputValue;
      priceQuantity.textContent = "$" + itemPrice + ".00" + " x " + inputValue;
      total.textContent = "$" + itemPrice * Number(inputValue) + ".00";
    } else {
      const quantity = document.querySelector("p");
      quantity.textContent = Number(inputValue) + Number(quantity.textContent);
      priceQuantity.textContent =
        "$" + itemPrice + ".00" + " x " + quantity.textContent;
      total.textContent =
        "$" + itemPrice * Number(quantity.textContent) + ".00";
    }
    cartItem.classList.remove("hidden");
    checkOutButton.classList.remove("hidden");
    cartEmpty.classList.add("hidden");
  }
  // Reset quantity
  document.querySelector("input.quantity").value = 0;
}

// Empty the cart deleting all items
deleteCartItems.addEventListener("click", function () {
  const headerItems = document.querySelector(".header-items");
  headerItems.querySelector("p").remove();
  cartItem.classList.add("hidden");
  checkOutButton.classList.add("hidden");
  cartEmpty.classList.remove("hidden");
  priceQuantity.textContent = 0;
  total.textContent = 0;
});

// Open the sidenav bar
function openNav() {
  document.getElementById("mySidenav").style.width = "240px";
  document.getElementById("sidenavBackground").classList.toggle("hidden");
}

// Close the sidenav bar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sidenavBackground").classList.toggle("hidden");
}

// Show the cart items
function showCart() {
  let element = document.getElementById("cart");
  element.classList.toggle("hidden");
}

// Open the Modal
function openModal() {
  if (window.innerWidth > 999) {
    document.getElementById("myModal").style.display = "block";
  }
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndexLightBox = 1;
showSlidesLightBox(slideIndexLightBox);

// Next/previous controls
function plusSlidesLightBox(n) {
  showSlidesLightBox((slideIndexLightBox += n));
}

// Thumbnail image controls
function currentSlideLightBox(n) {
  showSlidesLightBox((slideIndexLightBox = n));
}

let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Lightbox image function
function showSlidesLightBox(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndexLightBox = 1;
  }
  if (n < 1) {
    slideIndexLightBox = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexLightBox - 1].style.display = "block";
  dots[slideIndexLightBox - 1].className += " active";
}

// Slide image function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("current-thumbnail");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
