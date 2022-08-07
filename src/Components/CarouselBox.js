import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../assets/img5.jpg";
import img2 from "../assets/img2.jpg";
import img3  from "../assets/img3.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
            <Carousel.Item>
                <img 
                    className='d-block w-100 caruselHome'
                    src={img1}
                    alt="Forest"
                />
                <Carousel.Caption>
                    <h3>Forest image</h3>
                    <p>lorem asd dasasdas sadsad dafs a sds,  csdwedss ?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100 caruselHome'
                    src={img2}
                    alt="Forest"
                />
                <Carousel.Caption>
                    <h3>Dark Forest image</h3>
                    <p>lorem asd dasasdas sadsad dafs a sds,  csdwedss ?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100 caruselHome'
                    src={img3}
                    alt="Forest"
                />
                <Carousel.Caption>
                    <h3>City Forest image</h3>
                    <p>lorem asd dasasdas sadsad dafs a sds,  csdwedss ?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
