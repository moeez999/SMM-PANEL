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
