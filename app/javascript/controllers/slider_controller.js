import { tns } from 'tiny-slider/src/tiny-slider';
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'bubble', 'container', 'rating' ]

  connect() {
    this.initSlider()
    console.log("slider controller is connected");
    // console.log(this.ratingTargets);
    // console.log(this.ratingTarget.innerText);
    this.star();
    this.hideBtn();

  }

  hideBtn() {
    if (this.bubbleTarget.getBoundingClientRect().x >= 0) {
      document.getElementById('prev-btn').classList.add('d-none')
    };
    if (this.bubbleTarget.getBoundingClientRect().x < 0) {
      document.getElementById('prev-btn').classList.remove('d-none')
    };

    if (document.getElementById('soft-face-wipes').getBoundingClientRect().x <= 1000) {
      document.getElementById('next-btn').classList.add('d-none')
    };

    if (document.getElementById('soft-face-wipes').getBoundingClientRect().x > 1000) {
      document.getElementById('next-btn').classList.remove('d-none')
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
          startIndex: 1,
          loop: true
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
