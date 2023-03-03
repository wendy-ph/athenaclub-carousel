import { tns } from 'tiny-slider/src/tiny-slider';
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'container' ]

  connect() {
    this.initSlider()
    console.log("slider controller is connected");
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
