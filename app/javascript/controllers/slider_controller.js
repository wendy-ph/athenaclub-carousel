import { tns } from 'tiny-slider/src/tiny-slider';
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'container' ]
  // static values = {
  //   isDragStart: Boolean,
  //   prevPageX: Number,
  //   prevScrollLeft: Number
  //  }
  connect() {
    this.initSlider()
    console.log("slider controller is connected");
    // console.log(this.carouselTarget);
    // console.log(this.carouselTarget.scrollLeft);

  }

  initSlider() {
    this.slider = tns({
      container: this.containerTarget,
      items: 3,
      slibeBy: 1,
      gutter: 10,
      mouseDrag: true,
      arrowKeys: false,
      controls: false,
      nav: false
    });
  }

  next() {
    this.slider.goTo('next');
  }

  prev() {
    this.slider.goTo('prev');
  }


  // dragStart(e) {
  //   this.isDragStartValue = true;
  //   console.log(this.isDragStartValue);
  //   this.prevPageXValue = e.pageX;
  //   this.prevScrollLeft = this.carouselTarget.scrollLeft;
  // }

  // dragStop(e) {
  //   this.isDragStartValue = false;
  // }


  // dragging(e) {
  //   if(!this.isDragStartValue) return;
  //   e.preventDefault();
  //   let positionDiff = e.pageX - this.prevPageXValue;
  //   this.carouselTarget.scrollLeft = this.prevScrollLeftValue - positionDiff;
  // }

}
