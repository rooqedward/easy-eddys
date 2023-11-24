"use strict";
//////////////////////////////////////////////////
//Make Mobile Navigation work
// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });
// ("nav-open");

////////////////////////////////////////////////////

const header = document.querySelector(".page-header");
header.innerHTML = `<!-- SERVICES MOBILE SUB MENU-->
<div class="services-menu">
  <svg
    role="button"
    class="services-menu-back-arrow"
    xmlns="http://www.w3.org/2000/svg"
    width="192"
    height="192"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="216"
      y1="128"
      x2="40"
      y2="128"
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
    <polyline
      points="112 56 40 128 112 200"
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></polyline>
  </svg>
  <ul class="services-menu-list">
    <li><h2 class="services-menu-title">Services</h2></li>
    <li>
      <a href="https://easyeddystrees.com/removal.html" class="nav-link"
        >Tree Removal</a
      >
    </li>
    <li>
      <a href="https://easyeddystrees.com/index.html#trimming" class="nav-link"
        >Tree Trimming</a
      >
    </li>
    <li>
      <a href="https://easyeddystrees.com/index.html" class="nav-link"
        >Stump Grinding</a
      >
    </li>
    <li>
      <a href="https://easyeddystrees.com/index.html" class="nav-link"
        >Emergency Work</a
      >
    </li>
    <li>
      <a href="https://easyeddystrees.com/index.html" class="nav-link"
        >Crane Removal</a
      >
    </li>
  </ul>
</div>
<!-- END OF SERVICES MOBILE SUB MENU-->

<!--SERVICE AREAS SUB MENU-->
<div class="service-areas-menu">
  <svg
    role="button"
    class="service-areas-menu-back-arrow"
    xmlns="http://www.w3.org/2000/svg"
    width="192"
    height="192"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="216"
      y1="128"
      x2="40"
      y2="128"
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
    <polyline
      points="112 56 40 128 112 200"
      fill="none"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></polyline>
  </svg>
  <ul class="service-areas-menu-list">
    <li><span
      class="service-areas-menu-title"
      title="Service Areas"
      >Service Areas</span
    ></li>
      <li>
        <a
          href="https://easyeddystrees.com/rockford.html"
          class="nav-link"
          >Rockford</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/freeport.html"
          class="nav-link"
          >Freeport</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/south-beloit.html"
          class="nav-link"
          >South Beloit</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/byron.html"
          class="nav-link nav-link"
          >Byron</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/cherry-valley.html"
          class="nav-link"
          >Cherry Valley</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/davis.html"
          class="nav-link"
          >Davis</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/durand.html"
          class="nav-link"
          >Durand</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/lake-summerset.html"
          class="nav-link"
          >Lake Summerset</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/loves-park.html"
          class="nav-link"
          >Loves Park</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/machesney-park.html"
          class="nav-link"
          >Machesney Park</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/pecatonica.html"
          class="nav-link"
          >Pecatonica</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/rockton.html"
          class="nav-link"
          >Rockton</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/roscoe.html"
          class="nav-link"
          >Roscoe</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/shirland.html"
          class="nav-link"
          >Shirland</a
        >
      </li>
      <li>
        <a
          href="https://easyeddystrees.com/winnebago.html"
          class="nav-link"
          >Winnebago</a
        >
      </li>
    
  </ul>
</div>
<!--END OF SERVICE AREAS SUB MENU-->
<a href="https://easyeddystrees.com/index.html" class="menu-logo">
  <img
    src="images/header.footer/logo.svg"
    alt="Tree Service Rockford IL"
    height="104.6"
    width="180.2"
  />
</a>

<nav class="menu">
  <ul class="menu-list">
    <li>
      <a href="https://easyeddystrees.com/index.html" class="nav-link"
        >Home</a
      >
    </li>
    <li class="dropdown">
      <span class="nav-link big-screen" title="Services">Services<svg class="menu-down-chevron" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></span>
      <span class="nav-link services-btn small-screen" title="Services">Services<svg class="menu-down-chevron" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></span>
      <ul class="services-list">
        <li>
          <a
            href="https://easyeddystrees.com/removal.html"
            class="nav-link dropdown-link"
            >Tree Removal</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/index.html#trimming"
            class="nav-link dropdown-link"
            >Tree Trimming</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/removal.html#stump-grinding"
            class="nav-link dropdown-link"
            >Stump Grinding</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/removal.html#emergency-jobs"
            class="nav-link dropdown-link"
            >Emergency Jobs</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/index.html"
            class="nav-link dropdown-link"
            >Crane Removal</a
          >
        </li>
      </ul>
    </li>
    <li>
      <a href="https://easyeddystrees.com/history.html" class="nav-link"
        >Our History</a
      >
    </li>
    <li>
      <a
        href="https://easyeddystrees.com/about.html"
        class="nav-link"
        title="About Us"
        >About Us</a
      >
    </li>
    <li class="dropdown">
      <span
        
        class="big-screen nav-link"
        title="Service Areas"
        >Service Areas<svg class="menu-down-chevron" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></span
      >
      <span
        
        class="small-screen nav-link service-areas-btn"
        title="Service Areas"
        >Service Areas<svg class="menu-down-chevron" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></span
      >
      <ul class="service-areas-list">
        <li>
          <a
            href="https://easyeddystrees.com/rockford.html"
            class="nav-link dropdown-link"
            >Rockford</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/freeport.html"
            class="nav-link dropdown-link"
            >Freeport</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/south-beloit.html"
            class="nav-link dropdown-link"
            >South Beloit</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/byron.html"
            class="nav-link nav-link dropdown-link"
            >Byron</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/cherry-valley.html"
            class="nav-link dropdown-link"
            >Cherry Valley</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/davis.html"
            class="nav-link dropdown-link"
            >Davis</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/durand.html"
            class="nav-link dropdown-link"
            >Durand</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/lake-summerset.html"
            class="nav-link dropdown-link"
            >Lake Summerset</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/loves-park.html"
            class="nav-link dropdown-link"
            >Loves Park</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/machesney-park.html"
            class="nav-link dropdown-link"
            >Machesney Park</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/pecatonica.html"
            class="nav-link dropdown-link"
            >Pecatonica</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/rockton.html"
            class="nav-link dropdown-link"
            >Rockton</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/roscoe.html"
            class="nav-link dropdown-link"
            >Roscoe</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/shirland.html"
            class="nav-link dropdown-link"
            >Shirland</a
          >
        </li>
        <li>
          <a
            href="https://easyeddystrees.com/winnebago.html"
            class="nav-link dropdown-link"
            >Winnebago</a
          >
        </li>
      </ul>
    </li>
  </ul>
</nav>

<button class="menu-btn" title="menu button">
  <svg
    class="icon-mobile-nav"
    name="menu-outline"
    xmlns="http://www.w3.org/2000/svg"
    width="192"
    height="192"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
    <line
      x1="40"
      y1="64"
      x2="216"
      y2="64"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
    <line
      x1="40"
      y1="192"
      x2="216"
      y2="192"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
  </svg>
  <svg
    class="icon-mobile-nav"
    name="close-outline"
    xmlns="http://www.w3.org/2000/svg"
    width="192"
    height="192"
    fill="#000000"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="200"
      y1="56"
      x2="56"
      y2="200"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
    <line
      x1="200"
      y1="200"
      x2="56"
      y2="56"
      stroke="#000000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    ></line>
  </svg>
</button>

<div class="top-corner">
  <div class="hours-box">
    <div class="hours-outer-box">
      <svg
        class="clock-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          stroke="#097309"
          stroke-miterlimit="10"
          stroke-width="16"
        ></circle>
        <polyline
          points="128 72 128 128 184 128"
          fill="none"
          stroke="#097309"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
      </svg>
      <p class="phone-hours top-corner-text hours-text-1">
        Open 7am-9pm daily
      </p>
      <p class="phone-hours top-corner-text hours-text-2">
        7am-9pm daily
      </p>
    </div>
  </div>
  <div class="call-outer-box">
    <svg
      class="phone-icon"
      alt="phone-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z"
        fill="none"
        stroke="#097309"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></path>
    </svg>
    <a href="tel:815-900-9012" class="phone top-corner-text"
      >815-900-9012</a
    >
  </div>
</div>`;
const footer = document.querySelector(".page-footer");
footer.innerHTML = `<div class="footer-left-box">
<a class="footer-logo-box" href="https://easyeddystrees.com/index.html">
  <img
    src="images/header.footer/logo.svg"
    alt="Rockford Tree Service | Trimming | Removal"
    class="footer-logo"
    height="104.6"
    width="180.2"
  />
</a>
<nav class="bottom-links-box">
  <a class="page-footer-nav links" href="tel:815-900-9012" >815-900-9012</a>
  <a class="page-footer-nav links" href="mailto:easyeddy@outlookcom"
    >easyeddys@outlook.com</a
  >
</nav>
</div>
<nav class="footer-menu-box">
  <div class="footer-sitemap-first-column">
  <a 
   class="page-footer-nav" href="https://easyeddystrees.com/index.html">Home</a>
   
   
  <a class="page-footer-nav" href="https://easyeddystrees.com/history.html">History</a>
  <a class="page-footer-nav" href="https://easyeddystrees.com/about.html" title="About Us">About Us</a>
</div>
<div class="footer-sub-nav-list">
  <p class="page-footer-nav">Services</p>
 <a href="https://easyeddystrees.com/removal.html" class="page-footer-sub-nav">Tree Removal</a>
 <a href="https://easyeddystrees.com/index.html#trimming" class="page-footer-sub-nav">Tree Trimming</a>
 <a href="https://easyeddystrees.com/removal.html#stump-grinding" class="page-footer-sub-nav">Stump Grinding</a>
 <a href="https://easyeddystrees.com/removal.html#emergency-jobs" class="page-footer-sub-nav">Emergency Jobs</a>
 <a href="https://youtu.be/iqbOANdd7tc" target="_blank" class="page-footer-sub-nav">Crane Removal</a>
</div>
  <div class="footer-sub-nav-list">
  <p class="page-footer-nav" title="Service Areas">Service Areas</p>
    <a href="https://easyeddystrees.com/rockford.html" class="page-footer-sub-nav">Rockford</a>
    <a  href="https://easyeddystrees.com/machesney-park.html" class="page-footer-sub-nav">Machesney Park</a>
    <a href="https://easyeddystrees.com/loves-park.html"  class="page-footer-sub-nav">Loves Park</a>
    <a href="https://easyeddystrees.com/cherry-valley.html"  class="page-footer-sub-nav">Cherry Valley</a>
    <a href="https://easyeddystrees.com/pecatonica.html"  class="page-footer-sub-nav">Pecatonica</a>
    <a href="https://easyeddystrees.com/freeport.html"  class="page-footer-sub-nav">Freeport</a>
    <a href="https://easyeddystrees.com/winnebago.html"  class="page-footer-sub-nav">Winnebago</a>
    <a href="https://easyeddystrees.com/lake-summerset.html"  class="page-footer-sub-nav">Lake Summerset</a>
    <a href="https://easyeddystrees.com/davis.html"  class="page-footer-sub-nav">Davis</a>
    <a href="https://easyeddystrees.com/south-beloit.html"  class="page-footer-sub-nav">South Beloit</a>
    <a href="https://easyeddystrees.com/byron.html"  class="page-footer-sub-nav">Byron</a>
    <a href="https://easyeddystrees.com/durand.html"  class="page-footer-sub-nav">Durand</a>
    <a href="https://easyeddystrees.com/shirland.html"  class="page-footer-sub-nav">Shirland</a>
    <a href="https://easyeddystrees.com/roscoe.html"  class="page-footer-sub-nav">Roscoe</a>
    <a href="https://easyeddystrees.com/rockton.html"  class="page-footer-sub-nav">Rockton</a>
</div>
</nav>`;

//MOBILE NAV MENU
const menuBtnEl = document.querySelector(".menu-btn");
const headerEl = document.querySelector(".page-header");

const servicesBtnEl = document.querySelector(".services-btn");
const servicesMenu = document.querySelector(".services-menu");
const backArrow = document.querySelector(".services-menu-back-arrow");
const areasBackArrow = document.querySelector(".service-areas-menu-back-arrow");
const serviceAreasBtnEl = document.querySelector(".service-areas-btn");
const serviceAreasMenu = document.querySelector(".service-areas-menu");

const closeServiceAreasMenu = function () {
  if (serviceAreasMenu.classList.contains("service-areas-menu-visible"))
    serviceAreasMenu.classList.remove("service-areas-menu-visible");
};

// MENU BUTTON FUNCTIONALITY
menuBtnEl.addEventListener("click", function () {
  if (!headerEl.classList.contains("nav-open")) {
    headerEl.classList.add("nav-open");
  } else if (
    servicesMenu.classList.contains("services-menu-visible") ||
    headerEl.classList.contains("nav-open") ||
    serviceAreasMenu.classList.contains("service-areas-menu-visible")
  ) {
    headerEl.classList.remove("nav-open");
    closeServicesMenu();
    closeServiceAreasMenu();
  }
});

//SERVICES MENU CLICK FUNCTIONALITY
servicesBtnEl.addEventListener("click", function () {
  servicesMenu.classList.add("services-menu-visible");
});
//CLOSE SERVICES MENU
const closeServicesMenu = function () {
  if (servicesMenu.classList.contains("services-menu-visible"))
    servicesMenu.classList.remove("services-menu-visible");
};

//SERVICES MENU BACK ARROW FUNCTIONALITY
backArrow.addEventListener("click", function () {
  closeServicesMenu();
});

//SERVICE AREAS FUNCTIONALITY
serviceAreasBtnEl.addEventListener("click", function () {
  serviceAreasMenu.classList.add("service-areas-menu-visible");
});

areasBackArrow.addEventListener("click", function () {
  serviceAreasMenu.classList.add("service-areas-menu-visible");
  closeServiceAreasMenu();
});

//VIEW NEXT IMAGE
// const rClick = function () {
//   for (let i = 0; i < mainImagesList.length; i++) {
//     if (mainImage.src.includes(mainImagesList[i])) {
//       if (i === mainImagesList.length - 1) {
//         mainImage.src = mainImagesList[0];
//       } else {
//         mainImage.src = mainImagesList[i + 1];
//       }
//       break;
//     }
//   }
// };

//EXPLAINING THE findIndex Method- FROM SETH
// function findIndex(fn) {
//   const arr = [];

//   for (let i = 0; i < arr.length; ++i) {
//     if (fn(arr[i])) return i;
//   }

//   return -1;
// }

//CAROUSEL VARIABLES
const flagshipImage = document.querySelector(".carousel-image").src;
const nextImage = document.querySelector(".caret-right");
const previousImage = document.querySelector(".caret-left");
const mainImage = document.getElementById("img-1");
const mainImagesList = [
  flagshipImage,
  "/images/home/main-1.jpg",
  "/images/home/main-2.jpg",
  "/images/home/main-3.jpg",
];

//////////////////////  Seth's solution for a page with a flagship image repeated in the mainImagesList
// if (!mainImagesList.some((image) => flagshipImage.includes(image))) {
//   mainImagesList.unshift(flagshipImage);
// }

previousImage.addEventListener("click", () => {
  for (let i = 0; i < mainImagesList.length; i++) {
    if (mainImage.src.includes(mainImagesList[i])) {
      mainImage.src = mainImagesList.at(i - 1);
      break;
    }
  }
});

nextImage.addEventListener("click", () => {
  const i = mainImagesList.findIndex((imageName) => {
    return mainImage.src.includes(imageName);
  });
  mainImage.src = mainImagesList[i === mainImagesList.length - 1 ? 0 : i + 1];
});
