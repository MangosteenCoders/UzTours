import React from 'react'
import TransImg from '../Images/transImg.png'

export default function Transport() {
  return (
    <section className='transSection'>
      <div className="container">
        <h2>Trasnport</h2>
        <div className='transContent'>
          <div className='transInfo'>
            <img src={TransImg} alt="..." />
            <p>Lorem ipsum dolor sit amet consectetur. Magna congue orci lectus arcu amet fringilla. Ultricies amet et elit mauris id semper ullamcorper mauris. Ligula sollicitudin urna nec rhoncus sit egestas vestibulum sed. Velit aliquam sit consectetur turpis vulputate. Elementum vel cum placerat nunc consequat dignissim. Commodo lorem varius cras duis rhoncus quisque mi felis.</p>
          </div>

          <div className='transInfo'>
            <h2>stariya hyundai</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Magna congue orci lectus arcu amet fringilla. Ultricies amet et elit mauris id semper ullamcorper mauris. Ligula sollicitudin urna nec rhoncus sit egestas vestibulum sed. Velit aliquam sit consectetur turpis vulputate. Elementum vel cum placerat nunc consequat dignissim. Commodo lorem varius cras duis rhoncus quisque mi felis.</p>
            <img src={TransImg} alt="..." />
          </div>
        </div>
      </div>
    </section>
  )
}
