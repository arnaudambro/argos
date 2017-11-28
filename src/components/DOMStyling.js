/*----------- chapters left-right arranging ----------*/
const chapterTitles = [...document.querySelectorAll('.chap-title')];

chapterTitles.forEach(chapterTitle => {
  if (chapterTitles.indexOf(chapterTitle) % 2 === 1) {
    chapterTitle.style.alignItems = 'flex-end';
    chapterTitle.style.textAlign = 'right';
  } else {
    chapterTitle.style.alignItems = 'flex-start';
  }

  if (chapterTitles.indexOf(chapterTitle) > 3) {
    chapterTitle.firstElementChild.style.color = 'rgba(228,44,47,1.00)';
  }
});


/*-------------------- chapter6 clearfix -------------*/

const chap6DivOverflowed = document.querySelector('#chap-6-overflowed');

function calculatechap6DivOverflowedMarginBottom () {
  const chap6Persons = document.querySelector('#chap-6-overflower');
  const chap6DivOverflowedHeight = parseFloat(window.getComputedStyle(chap6DivOverflowed).getPropertyValue('height').replace('px',''));
  const chap6PersonsHeight = parseFloat(window.getComputedStyle(chap6Persons).getPropertyValue('height').replace('px',''));
  const chap6PersonsTop = parseFloat(window.getComputedStyle(chap6Persons).getPropertyValue('top').replace('px',''));

  chap6DivOverflowed.style.marginBottom = `${chap6PersonsTop + chap6PersonsHeight - chap6DivOverflowedHeight + 50}px`;
};

calculatechap6DivOverflowedMarginBottom ();
window.addEventListener('resize', calculatechap6DivOverflowedMarginBottom);

/*----------------- chapter1 get carousel width -----------------*/
/*----------------- UPDATE : no need finally -----------------*/

const carouselThumbnailDiv = document.querySelector('.chap-1-carousel-thumbnails');
const carouselThumbnails = [...document.querySelectorAll('.carousel-thumbnail-pic')];
const carouselLinks = [...document.querySelectorAll('.carousel-thumbnail-link')];

let carouselThumbnailsWidth = 0;

carouselThumbnails.forEach(thumbnail => {
  const thumbnailWidth = parseFloat(window.getComputedStyle(thumbnail).getPropertyValue('width').replace('px',''));
  carouselThumbnailsWidth += thumbnailWidth;
})

carouselLinks.forEach(link => {
  const linkWidth = parseFloat(window.getComputedStyle(link).getPropertyValue('width').replace('px',''));
  carouselThumbnailsWidth += linkWidth;
})

carouselThumbnailsWidth += parseFloat(window.getComputedStyle(carouselThumbnailDiv).getPropertyValue('padding-right').replace('px',''));
carouselThumbnailsWidth += parseFloat(window.getComputedStyle(carouselThumbnailDiv).getPropertyValue('padding-left').replace('px',''));

// carouselThumbnailDiv.style.width = `${carouselThumbnailsWidth}px`

/*----------------- chapter1 clearfix -----------------*/

function chap1Clearfix (){
const carouselPicDisplay = document.querySelector('.chap-1-carousel-pic-display');
const carouselDisplayDesc = document.querySelector('.chap-1-carousel-desc-display');

const displayDescTop = carouselDisplayDesc.getBoundingClientRect().top - carouselPicDisplay.getBoundingClientRect().top;
const displayDescHeight =  carouselDisplayDesc.getBoundingClientRect().height;
const displayHeight = carouselPicDisplay.getBoundingClientRect().height;

const carouselDisplayDescOverflow = displayDescTop + displayDescHeight - displayHeight;
const carouselDescDisplay = document.querySelector('.chap-1-carousel-desc-display').firstElementChild;

carouselPicDisplay.parentElement.style.marginBottom = `${carouselDisplayDescOverflow * 2}px`;
}
chap1Clearfix()

/*----------------- chapter1 link-line position -----------------*/

function repositionLink () {
const carouselFisrtThumbnail = document.querySelector("[data-thumbnail='1']");
const carouselThumbnailPadding = document.querySelector('.carousel-padding');
const linkLineThickness = 1;
const linkLineTopPosition = (carouselFisrtThumbnail.getBoundingClientRect().height + linkLineThickness) / 2;

carouselThumbnailPadding.style.height = `${linkLineTopPosition}px`
carouselThumbnailPadding.style.borderTopWidth = `${linkLineThickness}px`
}

repositionLink ();
export { chapterTitles,  chap6DivOverflowed, carouselThumbnailsWidth }

/*----------------- chapter1 padding left and right -----------------*/

function recalculatePaddingCarousel () {
const carouselFirstThumbnail = document.querySelector('#first-thumbnail');
const carouselLastThumbnail = document.querySelector('#last-thumbnail');
const thumbnailWidth = Math.round(parseFloat(window.getComputedStyle(carouselFirstThumbnail).getPropertyValue('width').replace('px', '')) * 100 / window.innerWidth);
const carouselMargin = (100 - thumbnailWidth) / 2;
carouselFirstThumbnail.style.marginLeft = `${carouselMargin}vw`;
carouselLastThumbnail.style.marginRight = `${carouselMargin}vw`;
}

recalculatePaddingCarousel ();
window.addEventListener('resize', recalculatePaddingCarousel);
window.addEventListener('resize', repositionLink);
window.addEventListener('resize', chap1Clearfix);
