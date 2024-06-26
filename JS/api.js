const serviceData = [
  {
    imgSrc: "./assets/Instagram2.png",
    title: "Instagram Followers",
    buttonText: "Buy Me",
  },
  {
    imgSrc: "./assets/Instagram2.png",
    title: "Instagram Likes",
    buttonText: "Buy Now",
  },
  {
    imgSrc: "./assets/Instagram2.png",
    title: "Instagram Likes",
    buttonText: "Buy Now",
  },
  {
    imgSrc: "./assets/Instagram2.png",
    title: "Instagram Likes",
    buttonText: "Buy Now",
  },
  {
    imgSrc: "./assets/Instagram2.png",
    title: "Instagram Likes",
    buttonText: "Buy Now",
  },
  {
    imgSrc: "./assets/Instagram2.png",
    title: "Instagram Likes",
    buttonText: "Buy Now",
  },
  {
    imgSrc: "./assets/Instagram2.png",
    title: "Instagram Likes",
    buttonText: "Buy Now",
  },
  {
    imgSrc: "./assets/Instagram2.png",
    title: "Instagram Likes",
    buttonText: "Buy Now",
  },
  {
    imgSrc: "./assets/Instagram2.png",
    title: "Instagram Likes",
    buttonText: "Buy Now",
  },
];

// Step 3: Function to generate card HTML using template literals
function generateServiceCards(data) {
  const container = document.getElementById("related-service-section");
  let cardsHTML = "";

  data.forEach((service) => {
    cardsHTML += `
                    <div class="swiper-slide related-servicecard d-flex flex-column align-items-center rounded-end-4 p-3">
                        <div class="img-size">
                            <img class="w-100 h-auto" src="${service.imgSrc}" alt="" />
                        </div>
                        <p class="fw-bolder my-2">${service.title}</p>
                        <button class="buy-me-btn btn text-white px-3 py-0">${service.buttonText}</button>
                    </div>
                `;
  });

  container.innerHTML = cardsHTML;

  // Initialize Swiper after slides are added
  if (!window.swiperInstance) {
    window.swiperInstance = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      },
    });
  } else {
    window.swiperInstance.update();
  }
}

generateServiceCards(serviceData);
const articles = [
  {
    imageSrc: "./assets/articles.png",
    title: "Rush of American users to buy from our site!",
    description:
      "Fallonik 7 golden tips to get more likes on Instagram that will help you to follow these things in time",
  },
  {
    imageSrc: "./assets/articles.png",
    title: "Rush of American users to buy from our site!",
    description:
      "Fallonik 7 golden tips to get more likes on Instagram that will help you to follow these things in time",
  },
  {
    imageSrc: "./assets/articles.png",
    title: "Rush of American users to buy from our site!",
    description:
      "Fallonik 7 golden tips to get more likes on Instagram that will help you to follow these things in time",
  },
  {
    imageSrc: "./assets/articles.png",
    title: "Rush of American users to buy from our site!",
    description:
      "Fallonik 7 golden tips to get more likes on Instagram that will help you to follow these things in time",
  },
  {
    imageSrc: "./assets/articles.png",
    title: "Rush of American users to buy from our site!",
    description:
      "Fallonik 7 golden tips to get more likes on Instagram that will help you to follow these things in time",
  },
  {
    imageSrc: "./assets/articles.png",
    title: "Rush of American users to buy from our site!",
    description:
      "Fallonik 7 golden tips to get more likes on Instagram that will help you to follow these things in time",
  },
];

// Function to create a single slide HTML element
function articlesSlide(imageSrc, title, description) {
  return `
    <div class="articles-cards p-2 rounded-4">
      <img src="${imageSrc}" alt="">
      <h6 class="fw-bold my-4">${title}</h6>
      <p>${description}</p>
      <div class="d-flex justify-content-center w-100">
        <button class="btn rounded-5 see-more text-white px-4">
          SEE MORE ...
        </button>
      </div>
    </div>
  `;
}

// Function to render all slides from the articles array
function renderArticlesCards() {
  const swiperWrapper = document.getElementById("articles-card-container");
  swiperWrapper.innerHTML = ""; // Clear previous content

  articles.forEach((article) => {
    const slideHTML = articlesSlide(
      article.imageSrc,
      article.title,
      article.description
    );
    swiperWrapper.innerHTML += slideHTML;
  });

  // Initialize Swiper after slides are added
  if (!window.swiperInstance) {
    window.swiperInstance = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    });
  } else {
    window.swiperInstance.update();
  }
}

renderArticlesCards();
