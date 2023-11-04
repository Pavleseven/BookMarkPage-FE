'use strict';

// elements

const buttonNavigation = document.querySelector('.button-overlay');
const navigation = document.querySelector('.primary-navigation');
const overlay = document.querySelector('.overlay');
const section1Img = document.querySelector('.section1-img');
const topLine = document.querySelector('.top');
const middleLine = document.querySelector('.middle');
const bottomLine = document.querySelector('.bottom');

buttonNavigation.addEventListener('click', function (e) {
  const imgReplacement = `<img src="./images/logo-bookmark - Copy.svg" alt="">`;
  const image = `<img src="./images/logo-bookmark.svg" alt="" />`;

  if (navigation.classList.contains('active')) {
    navigation.style.visibility = 'visible';
    navigation.style.opacity = '1';
    topLine.style.fill = 'white';
    middleLine.style.fill = 'white';
    bottomLine.style.fill = 'white';
    topLine.classList.add('top-transition');
    middleLine.classList.add('middle-transition');
    bottomLine.classList.add('bottom-transition');
    overlay.classList.remove('hidden');
    navigation.classList.remove('active');
    section1Img.innerHTML = '';
    section1Img.insertAdjacentHTML('afterbegin', imgReplacement);
  } else {
    navigation.style.visibility = 'hidden';
    navigation.style.opacity = '0';
    topLine.style.fill = 'hsl(229, 31%, 21%)';
    middleLine.style.fill = 'hsl(229, 31%, 21%)';
    bottomLine.style.fill = 'hsl(229, 31%, 21%)';
    topLine.classList.remove('top-transition');
    middleLine.classList.remove('middle-transition');
    bottomLine.classList.remove('bottom-transition');
    overlay.classList.add('hidden');
    navigation.classList.add('active');
    section1Img.innerHTML = '';
    section1Img.insertAdjacentHTML('afterbegin', image);
  }
});

// Section 5 FAQ

const section5 = document.querySelector('.section-5-content');

section5.addEventListener('click', function (e) {
  const question = e.target.closest('.FAQ');
  const paragraph = e.target.closest('.FAQ').querySelector('.FAQ-p');
  const arrow = e.target.closest('.arrow');
  if (!question || !arrow || !paragraph) return;
  if (paragraph.classList.contains('hidden')) {
    question.style.height =
      Number.parseFloat(getComputedStyle(question).height) + 120 + 'px';
    paragraph.classList.remove('hidden');
    arrow.style.transform = 'scaleY(-1)';
    arrow.style.stroke = 'var(--SoftRed)';
  } else {
    question.style.height =
      Number.parseFloat(getComputedStyle(question).height) - 120 + 'px';
    paragraph.classList.add('hidden');
    arrow.style.transform = 'scaleY(1)';
    arrow.style.stroke = 'var(--SoftBlue)';
  }
});

// Section 6 error message for input

const input = document.querySelector('.input');
const errorP = document.querySelector('.error-p');
const errorImg = document.querySelector('.error-img');
const section6Btn = document.querySelector('.section6-btn');

section6Btn.addEventListener('click', function (e) {
  // input.style.border = '3px solid var(--SoftRed)';
  // input.style.borderBottom = '15px solid var(--SoftRed)';
  const inputValue = input.value;
  if (
    !inputValue.includes('@') ||
    !inputValue.includes('com') ||
    !inputValue.includes('.')
  ) {
    input.style.border = '3px solid var(--SoftRed)';
    input.style.borderBottom = '15px solid var(--SoftRed)';
    errorP.classList.remove('hidden');
    errorImg.classList.remove('hidden');
  }
});

// slide section 3
const section3Nav = document.querySelector('.section3-nagivation');
const section3 = document.querySelector('.section3-nagivation-display');

section3Nav.addEventListener('click', function (e) {
  console.log(e.target);
  let html = '';
  const slide = e.target.getAttribute('data-version-number');
  console.log(slide);
  if (slide === '1') {
    html = `<div class="slides">
          <img
            src="./images/illustration-features-tab-1.svg"
            alt=""
            class="section3-img"
          />
          <div class="slide-text">
            <p>Bookmark in one click</p>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
          </div>
        </div>`;
  }
  if (slide === '2') {
    html = `<div class="slides">
          <img
            src="./images/illustration-features-tab-2.svg"
            alt=""
            class="section3-img"
          />
          <div class="slide-text">
            <p>Intelligent search</p>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks
            </p>
            <button class="section3-button1">More info</button>
          </div>
        </div>`;
  }
  if (slide === '3') {
    html = `<div class="slides">
          <img
            src="./images/illustration-features-tab-1.svg"
            alt=""
            class="section3-img"
          />
          <div class="slide-text">
            <p>Share your bookmarks</p>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button
            </p>
            <button class="section3-button1">More info</button>
          </div>
        </div>`;
  }
  section3.innerHTML = '';
  section3.insertAdjacentHTML('afterbegin', html);
});
