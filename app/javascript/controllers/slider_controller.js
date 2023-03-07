import { tns } from 'tiny-slider/src/tiny-slider';
import { Controller } from "@hotwired/stimulus";
import { useMatchMedia } from "stimulus-use";

export default class extends Controller {
  static targets = [ 'bubble', 'container', 'rating', 'prevBtn', 'nextBtn' ]
  static values = {
    refreshBtn: Number
  }

  connect() {
    console.log("slider controller is connected");

    this.star();

    useMatchMedia(this, {
      mediaQueries: {
        small: '(min-width: 320px) and (max-width: 768px)'
      }
    });
  }

  // tiny-slider with loop: true
  smallChanged() {
    this.initSliderMobile();
    (console.log('mobile slider is connected'))
  }

  isSmall() {
    this.initSliderMobile();
    (console.log('mobile slider is connected'))
  }

  // tiny-slider with loop:false
  notSmall({ name, media, matches, event }) {
    this.initSlider();
    setInterval(() => {
      this.hideBtn()
    }, this.refreshBtnValue);
    (console.log('desktop slider is connected'))
  }

  hideBtn() {
    // hide prev btn at start of slide
    if (this.bubbleTarget.classList.value.includes('tns-slide-active')) {
      this.prevBtnTarget.classList.add('d-none')
    };

    if (!this.bubbleTarget.classList.value.includes('tns-slide-active')) {
      this.prevBtnTarget.classList.remove('d-none')
    };

    // hide next btn at end of slide
    if (document.getElementById('soft-face-wipes').classList.value.includes('tns-slide-active')) {
      this.nextBtnTarget.classList.add('d-none')
    };

    if (!document.getElementById('soft-face-wipes').classList.value.includes('tns-slide-active')) {
      this.nextBtnTarget.classList.remove('d-none')
    };
  }

  initSlider() {
    this.slider = tns({
      container: this.containerTarget,
      items: 3,
      slibeBy: 1,
      gutter: 0,
      mouseDrag: true,
      arrowKeys: false,
      controls: false,
      nav: false,
      loop: false,
      responsive: {
        300: {
          items: 1,
          startIndex: 1
        },
        770: {
          items: 2,
          startIndex: 0
        },
        995:{
          items: 3
        }
      },
      viewportMax: true
    });
  }

  initSliderMobile() {
    this.slider = tns({
      container: this.containerTarget,
      items: 3,
      slibeBy: 1,
      gutter: 0,
      mouseDrag: true,
      arrowKeys: false,
      controls: false,
      nav: false,
      loop: true,
      responsive: {
        300: {
          items: 1,
          startIndex: 1
        },
        770: {
          items: 2,
          startIndex: 0
        },
        995:{
          items: 3
        }
      },
      viewportMax: true
    });
  }


  next() {
    this.slider.goTo('next');
  }

  prev() {
    this.slider.goTo('prev');
  }

  //convert rating into stars
  star() {
    const fullStar = "<i class=\"fa-solid fa-star\"></i>"
    const emptyStar = "<i class=\"fa-regular fa-star\"></i>"
    const halfStar = "<i class=\"fa-solid fa-star-half-stroke\"></i>"

    this.ratingTargets.forEach((div) => {
      let rating = parseFloat(div.innerText);
      if (rating % 1 === 0) {
        div.innerHTML = fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
      } else {
        div.innerHTML = fullStar.repeat(rating) + halfStar + emptyStar.repeat(5 - rating);
      }
    });
  }
}
