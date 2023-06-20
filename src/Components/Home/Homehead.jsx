import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Images/samarkand.jpg'
import img2 from '../../Images/buxoro.jpg'
import img3 from '../../Images/xiva.jpg'

export default function Homehead() {
  return (
    <header className='Homehead'>
      <Carousel className='carusel' fade>
        <Carousel.Item className='carusel-item'>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className='carusel-caption'>
            <h3>Samarqand</h3>
            <p>bo'ylab sayohat</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carusel-item'>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption className='carusel-caption'>
            <h3>Buxoro</h3>
            <p>bo'ylab sayohat</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carusel-item'>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption className='carusel-caption'>
            <h3>Xorazim</h3>
            <p>bo'ylab sayohat</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  )
}
