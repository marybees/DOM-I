const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Header

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Nav

let navLinks = document.querySelectorAll("a");

Array.from(navLinks).forEach(links => {
  links.style.color = "green"
});

let navArray = Array.from(navLinks);

let a1 = navArray[0];
a1.textContent = "Services"

let a2 = navArray[1];
a2.textContent = "Product"

let a3 = navArray[2];
a3.textContent = "Vision"

let a4 = navArray[3];
a4.textContent = "Features"

let a5 = navArray[4];
a5.textContent = "About"

let a6 = navArray[5];
a6.textContent = "Contact"

// .appendChild()

let lastNavLink = document.createElement("a");
lastNavLink.textContent = "Testimonials";
lastNavLink.href = "#";
let nav = document.querySelector("nav");
nav.appendChild(lastNavLink);

// .prepend()

let firstNavLink = document.createElement("a");
firstNavLink.textContent = "Reviews";
firstNavLink.href = "#";
nav.prepend(firstNavLink);

//CTA

let title = document.querySelector("h1");
title.innerHTML = "DOM <br> IS <br> AWESOME"

let titleButton = document.querySelector("button");
titleButton.textContent = "Get Started"

//Main Content

let sectionTitles = document.querySelectorAll("h4");

let sectionTitlesArray = Array.from(sectionTitles);

let sectionParagraphs = document.querySelectorAll("p");

let sectionParagraphsArray = Array.from(sectionParagraphs);

//Top Content

let sectionTitle1 = sectionTitlesArray[0];
sectionTitle1.textContent = "Features"

let sectionParagraph1 = sectionParagraphsArray[0];
sectionParagraph1.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let sectionTitle2 = sectionTitlesArray[1];
sectionTitle2.textContent = "About"

let sectionParagraph2 = sectionParagraphsArray[1];
sectionParagraph2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//Bottom Content

let sectionTitle3 = sectionTitlesArray[2];
sectionTitle3.textContent = "Services"

let sectionParagraph3 = sectionParagraphsArray[2];
sectionParagraph3.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let sectionTitle4 = sectionTitlesArray[3];
sectionTitle4.textContent = "Product"

let sectionParagraph4 = sectionParagraphsArray[3];
sectionParagraph4.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let sectionTitle5 = sectionTitlesArray[4];
sectionTitle5.textContent = "Vision"

let sectionParagraph5 = sectionParagraphsArray[4];
sectionParagraph5.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let sectionTitle6 = sectionTitlesArray[5];
sectionTitle6.textContent = "Contact"

let sectionParagraph6 = sectionParagraphsArray[5];
sectionParagraph6.innerHTML = "123 Way 456 Street<br>Somewhere, USA"

let sectionParagraph7 = sectionParagraphsArray[6];
sectionParagraph7.textContent = "1 (888) 888-8888"

let sectionParagraph8 = sectionParagraphsArray[7];
sectionParagraph8.textContent = "tsales@greatidea.io"

//Footer

let sectionParagraph9 = sectionParagraphsArray[8];
sectionParagraph9.textContent = "Copyright Great Idea! 2018"