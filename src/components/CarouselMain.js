import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../img/img1SG.jpg'
import image2 from '../img/img2SG.jpg'
import image3 from '../img/img3SG.jpg'

import "./CarouselMain.css";


const items = [
  {
    src: image1,
    altText: 'Image 1',
    //caption: 'Slide 1'
  }, {
    src: image2,
    altText: 'Image 2',
    //caption: 'Slide 2'
  }, {
    src: image3,
    altText: 'Image 3',
    //caption: 'Slide 3'
  }
];

class CarouselMain extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className='carousel-main-container'>
            <img src={item.src} alt={item.altText} />
          </div>
          {/*<CarouselCaption captionText={item.caption} captionHeader={item.caption} />*/}
        </CarouselItem>
      );
    });

    return (
      <div className='carousel-main-container'>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default CarouselMain;