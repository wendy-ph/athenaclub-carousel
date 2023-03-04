import { tns } from 'tiny-slider/src/tiny-slider';
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'container', 'rating' ]

  connect() {
    this.initSlider()
    console.log("slider controller is connected");
    // console.log(this.ratingTargets);
    // console.log(this.ratingTarget.innerText);
    this.star();
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

  initSlider() {
    this.slider = tns({
      container: this.containerTarget,
      items: 3,
      slibeBy: 1,
      gutter: 0,
      fixedWidth: 422,
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

  next() {
    this.slider.goTo('next');
  }

  prev() {
    this.slider.goTo('prev');
  }
}