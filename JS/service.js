// service

const serviceData = [
  {
    images: ["./assets/i-1.png", "./assets/i-2.png", "./assets/i-3.png"],
    title: "instagram services - Real - No",
    description: "Drop - 30 Refill 🔥⚡",
  },
  {
    images: ["./assets/i-1.png", "./assets/i-2.png", "./assets/i-3.png"],
    title: "instagram services - Organic - Yes",
    description: "No Drop - 60 Refill 🔥⚡",
  },
  {
    images: ["./assets/i-1.png", "./assets/i-2.png", "./assets/i-3.png"],
    title: "instagram services - Organic - Yes",
    description: "No Drop - 60 Refill 🔥⚡",
  },
  {
    images: ["./assets/i-1.png", "./assets/i-2.png", "./assets/i-3.png"],
    title: "instagram services - Organic - Yes",
    description: "No Drop - 60 Refill 🔥⚡",
  },
  {
    images: ["./assets/i-1.png", "./assets/i-2.png", "./assets/i-3.png"],
    title: "instagram services - Organic - Yes",
    description: "No Drop - 60 Refill 🔥⚡",
  },
  {
    images: ["./assets/i-1.png", "./assets/i-2.png", "./assets/i-3.png"],
    title: "instagram services - Organic - Yes",
    description: "No Drop - 60 Refill 🔥⚡",
  },
  {
    images: ["./assets/i-1.png", "./assets/i-2.png", "./assets/i-3.png"],
    title: "instagram services - Organic - Yes",
    description: "No Drop - 60 Refill 🔥⚡",
  },
];

// Step 3: Function to generate card HTML using template literals
function generateServiceCards(data) {
  const container = document.getElementById("instagram-service-slider");
  let cardsHTML = "";

  data.forEach((service) => {
    let imagesHTML = "";
    service.images.forEach((src) => {
      imagesHTML += `<img class="i-service-imgs p-2 rounded-2" src="${src}" alt="">`;
    });

    cardsHTML += `
                    <div class="instagram-servicecard p-4 rounded-4 swiper-slide">
                        <div class="d-flex gap-2 ">
                            ${imagesHTML}
                        </div>
                        <p>${service.title}</p>
                        <p>${service.description}</p>
                    </div>
                `;
  });

  container.innerHTML = cardsHTML;

  new Swiper(".instagram-service-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
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
}

generateServiceCards(serviceData);
