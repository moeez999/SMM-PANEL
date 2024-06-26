AOS.init();

const socialItems = [
  {
    imageUrl: "./assets/freeservices.png",
    text: "FREE SERVICES",
    href: "#gift-section",
  },
  { imageUrl: "./assets/Facebook.png", text: "Facebook" },
  { imageUrl: "./assets/Youtube.png", text: "Youtube" },
  { imageUrl: "./assets/Twitter.png", text: "Twitter" },
  { imageUrl: "./assets/Instagram.png", text: "Instagram" },
  { imageUrl: "./assets/Threads.png", text: "Threads" },
];

function createSocialItemTemplate(item) {
  return `
        <a href=${item.href} class="text-decoration-none text-black">
          <div class="d-flex flex-column p-2 gap-2 justify-content-center align-items-center social-icons-container px-lg-4 py-lg-2 rounded-4 w-100">
              <div class="w-100"><img class="social-icons" src="${item.imageUrl}" alt="" /></div>
              <p class="fs-lg-6  fw-bold">${item.text}</p>
          </div>
        </a>
    `;
}

function createSocialItems() {
  const socialContainer = document.getElementById("socialContainer");
  if (socialContainer) {
    socialContainer.innerHTML = "";

    socialItems.forEach((item) => {
      const itemHTML = createSocialItemTemplate(item);
      socialContainer.innerHTML += itemHTML;
    });
  }
}

createSocialItems();
// Sample data: Array of gift boxes
const giftBoxes = [
  { title: "Gift Followers", number: 235 },
  { title: "Gift Followers", number: 235 },
  { title: "Gift Followers", number: 235 },
  { title: "Gift Followers", number: 235 },
  { title: "Gift Followers", number: 235 },
  { title: "Gift Followers", number: 235 },
];

// Function to render gift boxes using template literals
function renderGiftBoxes(giftBoxes) {
  const giftsContainer = document.querySelector(".gifts-box-container");

  // Clear existing content
  giftsContainer.innerHTML = "";

  // Iterate over each gift box data and generate HTML
  giftBoxes.forEach((gift) => {
    const giftBoxHTML = `
            <div class="gift-box rounded-4 px-2 px-md-4 py-2 py-md-3">
                <div class="d-flex gap-2">
                    <img src="./assets/gifts.png" alt="Gifts">
                    <img src="./assets/people.png" alt="People">
                </div>
                <p class="text-white mt-2">${gift.title}</p>
                <p class="gift-number rounded-4 text-center fw-bolder">${gift.number}</p>
            </div>
        `;

    // Append generated HTML to the container
    giftsContainer.innerHTML += giftBoxHTML;
  });
}

// Call renderGiftBoxes function with sample data
renderGiftBoxes(giftBoxes);

const coverageCardsData = [
  {
    title: "Facebook Smm Panel",
    description: `Increase your Facebook likes and become popular among friends and acquaintances quickly!
                              More followers, more visibility - experience the growth of your Facebook page!
                              Boost your Facebook engagement with real likes and followers - double your popularity!`,
  },
  {
    title: "Facebook Smm Panel",
    description: `Increase your Facebook likes and become popular among friends and acquaintances quickly!
                              More followers, more visibility - experience the growth of your Facebook page!
                              Boost your Facebook engagement with real likes and followers - double your popularity!`,
  },
  {
    title: "Facebook Smm Panel",
    description: `Increase your Facebook likes and become popular among friends and acquaintances quickly!
                              More followers, more visibility - experience the growth of your Facebook page!
                              Boost your Facebook engagement with real likes and followers - double your popularity!`,
  },
  {
    title: "Facebook Smm Panel",
    description: `Increase your Facebook likes and become popular among friends and acquaintances quickly!
                              More followers, more visibility - experience the growth of your Facebook page!
                              Boost your Facebook engagement with real likes and followers - double your popularity!`,
  },
  {
    title: "Facebook Smm Panel",
    description: `Increase your Facebook likes and become popular among friends and acquaintances quickly!
                              More followers, more visibility - experience the growth of your Facebook page!
                              Boost your Facebook engagement with real likes and followers - double your popularity!`,
  },
  {
    title: "Facebook Smm Panel",
    description: `Increase your Facebook likes and become popular among friends and acquaintances quickly!
                              More followers, more visibility - experience the growth of your Facebook page!
                              Boost your Facebook engagement with real likes and followers - double your popularity!`,
  },
  {
    title: "Facebook Smm Panel",
    description: `Increase your Facebook likes and become popular among friends and acquaintances quickly!
                              More followers, more visibility - experience the growth of your Facebook page!
                              Boost your Facebook engagement with real likes and followers - double your popularity!`,
  },
  {
    title: "Facebook Smm Panel",
    description: `Increase your Facebook likes and become popular among friends and acquaintances quickly!
                              More followers, more visibility - experience the growth of your Facebook page!
                              Boost your Facebook engagement with real likes and followers - double your popularity!`,
  },
];

// Function to create a single slide HTML element
function converageSlide(title, description) {
  return `
                <div class="swiper-slide">
                    <div class="coverage-card rounded-4 p-4">
                        <h5 class="coverage-card-heading fw-bolder mb-4">${title}</h5>
                        <p class="coverage-card-desc">${description}</p>
                        <div class="d-flex justify-content-center w-100 mt-4">
                          <button class="btn coverage-card-btn text-white rounded-2 fs-5 px-2 py-1 fw-folder">
                              Show More
                          </button>
                        </div>
                    </div>
                </div>
            `;
}

// Function to render all slides from the coverageCardsData array
function rederCoverageCards() {
  const swiperWrapper = document.getElementById("coverage-cards-container");
  if (swiperWrapper) {
    swiperWrapper.innerHTML = ""; // Clear previous content

    coverageCardsData.forEach((card) => {
      const slideHTML = converageSlide(card.title, card.description);
      swiperWrapper.innerHTML += slideHTML;
    });

    // Initialize Swiper after slides are added
    new Swiper(".swiper-container", {
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
}
// Initial render when the page loads
rederCoverageCards();
const serviceCards = [
  {
    title: "Increase in following",
    description: "@DIGIKALA",
  },
  {
    title: "Increase in following",
    description: "@DIGIKALA",
  },
  {
    title: "Increase in following",
    description: "@DIGIKALA",
  },
  {
    title: "Increase in following",
    description: "@DIGIKALA",
  },
  {
    title: "Increase in following",
    description: "@DIGIKALA",
  },
  {
    title: "Increase in following",
    description: "@DIGIKALA",
  },
  {
    title: "Increase in following",
    description: "@DIGIKALA",
  },
  {
    title: "Increase in following",
    description: "@DIGIKALA",
  },
];

// Function to create a single slide HTML element
function serviceslide(title, description) {
  return `
        <div class="swiper-slide service-card p-4 rounded-4">
          <p class="fw-bold fs-4 mb-0">200% <img src="./assets/green-arrow.png" alt=""></p>
          <p>${title}</p>
          <div class="d-flex align-items-center">
            <img src="./assets/digikala.png" alt="">
            <p class="mb-0">@${description.toUpperCase()}</p>
          </div>
        </div>
      `;
}

// Function to render all slides from the serviceCards array
function renderServiceCards() {
  const swiperWrapper = document.getElementById("service-cards-container");
  if (swiperWrapper) {
    swiperWrapper.innerHTML = ""; // Clear previous content

    serviceCards.forEach((card) => {
      const slideHTML = serviceslide(card.title, card.description);
      swiperWrapper.innerHTML += slideHTML;
    });

    // Initialize Swiper after slides are added
    if (!window.swiperInstance) {
      window.swiperInstance = new Swiper(".swiper-containers", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2000,
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
            slidesPerView: 4,
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
}

renderServiceCards();
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

renderArticlesCards();
document.addEventListener("DOMContentLoaded", function () {
  const text = "Access 300+ Social Media Services";
  const typewriterText = document.getElementById("typewriter-text");
  if (typewriterText) {
    let index = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 100;
    const pauseBetween = 2000;

    function typeWriter() {
      if (isDeleting) {
        typewriterText.innerHTML = text.substring(0, index - 1);
        index--;

        if (index === 0) {
          isDeleting = false;
          setTimeout(typeWriter, typingSpeed);
        } else {
          setTimeout(typeWriter, deletingSpeed);
        }
      } else {
        typewriterText.innerHTML = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
          isDeleting = true;
          setTimeout(typeWriter, pauseBetween);
        } else {
          setTimeout(typeWriter, typingSpeed);
        }
      }
    }

    typeWriter();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Function to animate the counter
  function animateCounter(id, start, end, duration, prefix = "", suffix = "") {
    const element = document.getElementById(id);
    let startTime = null;

    function updateCounter(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const value = Math.min(
        Math.floor((progress / duration) * (end - start) + start),
        end
      );
      element.textContent = prefix + value + suffix;
      if (progress < duration) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // Set the target section
  const target = document.querySelector(".service-numbers");
  if (target) {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting when the section is in view
            animateCounter("counter-years", 0, 6, 2000, "+", " Years");
            animateCounter("counter-users", 1, 50000, 2000, "1,");
            animateCounter("counter-services", 0, 2, 2000, "1.", "m+");
            animateCounter("counter-feedback", 0, 90, 2000, "+", "%");

            // Stop observing after the animation has started
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.5, // Adjust this value as needed
      }
    );

    // Observe the target section
    observer.observe(target);
  }
});
