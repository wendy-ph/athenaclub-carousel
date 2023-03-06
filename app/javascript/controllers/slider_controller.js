import { tns } from 'tiny-slider/src/tiny-slider';
import { Controller } from "@hotwired/stimulus";
import { useMatchMedia } from "stimulus-use";

export default class extends Controller {
  static targets = [ 'bubble', 'container', 'rating' ]
  static values = {
    refreshBtn: Number
  }

  connect() {
    // this.initSlider();
    console.log("slider controller is connected");
    // console.log(this.ratingTargets);
    // console.log(this.ratingTarget.innerText);
    this.star();
    setInterval(() => {
      this.hideBtn()
    }, this.refreshBtnValue)

    useMatchMedia(this, {
      mediaQueries: {
        small: '(min-width: 320px) and (max-width: 768px)',
        tall: '(min-height: 1000px)',
        light: '(prefers-color-scheme: light)',
        landscape: '(orientation: landscape)',
      }
    })

  }

  smallChanged({ name, media, matches, event }) {
    this.initSliderMobile();
    console.log("smal/lChanged media query changed")
  }

  isSmall({ name, media, matches, event }) {
    this.initSliderMobile();
    console.log("isSmall media query matches")
  }

  notSmall({ name, media, matches, event }) {
    this.initSlider();
    console.log("small media query doesn't match")
  }

  hideBtn() {
    // hide prev btn at start of slide
    if (this.bubbleTarget.classList.value.includes('tns-slide-active')) {
      document.getElementById('prev-btn').classList.add('d-none')
    }

    if (!this.bubbleTarget.classList.value.includes('tns-slide-active')) {
      document.getElementById('prev-btn').classList.remove('d-none')
    }

    // hide next btn at start of slide
    if (document.getElementById('soft-face-wipes').classList.value.includes('tns-slide-active')) {
      document.getElementById('next-btn').classList.add('d-none')
    }

    if (!document.getElementById('soft-face-wipes').classList.value.includes('tns-slide-active')) {
      document.getElementById('next-btn').classList.remove('d-none')
    }

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

  star() {
    const fullStar = "<i class=\"fa-solid fa-star\"></i>"
    const emptyStar = "<i class=\"fa-regular fa-star\"></i>"
    const halfStar = "<i class=\"fa-solid fa-star-half-stroke\"></i>"

    this.ratingTargets.forEach((div) => {
      let rating = parseFloat(div.innerText);
      if (rating % 1 === 0) {
        div.innerHTML = fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
      } else {
        div.innerHTML = fullStar.repeat(rating) + halfStar.repeat(5 - Math.floor(rating));
      }
    })
  }
}
