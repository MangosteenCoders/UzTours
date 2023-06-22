import React from 'react'
import rectangle from '../../Images/cards-rectangle.svg'
import img1 from '../../Images/cards-samarqand.png'
import img2 from '../../Images/cards-buxoro.png'
import img3 from '../../Images/cards-xorazim.png'
import { Link } from 'react-router-dom'

export default function ToursCards() {
  return (
    <div className='ToursCards'>
      <div className="container">
        <div className="row">
          <h2>Turlar</h2>

          <div className="col-md-4">
            <div className="card">
              <img src={img1} alt="" />
              <div className="card-body">
                <h3>Samarqand</h3>
                <div className='d-flex'>
                  <img src={rectangle} alt="" />Al Buxoriy ziyorotgoxi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Shoxizinda ziyorotgoxi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Registon ansambli
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Go’ri Amir maqbarasi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Hazrati Hizr masjidi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Bibixonim madrassasi
                </div>

                <p className="price">
                  Narxi <span>570.000 so'm</span>
                </p>

                <Link className='moreBtn' to='/samarkand'>batafsil</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={img2} alt="" />
              <div className="card-body">
                <h3>Buxoro</h3>
                <div className='d-flex'>
                  <img src={rectangle} alt="" />Xo’ja Ismoil G’ijdivoniy ziyorotgoxi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Yetti pir
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Buxoro arki
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Bolo-Xuz masjidi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Bahouddin Naqshband maqbarasi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Bibixonim madrassasi
                </div>

                <p className="price">
                  Narxi <span>570.000 so'm</span>
                </p>
                <Link className='moreBtn' to='/bukhara'>batafsil</Link>
                {/* <button>batafsil</button> */}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src={img1} alt="" />
              <div className="card-body">
                <h3>xorazim</h3>
                <div className='d-flex'>
                  <img src={rectangle} alt="" />Ichan-qala
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Muhammad Rahimxon madrasasi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Muhammad Aminxona madrasasi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Kalta minor
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Pahlavon Mahmud darvozasi
                </div>

                <div className='d-flex'>
                  <img src={rectangle} alt="" />Seyid Allaudin maqbarasi
                </div>

                <p className="price">
                  Narxi <span>570.000 so'm</span>
                </p>

                <Link className='moreBtn' to='/khiva'>batafsil</Link>
                {/* <button>batafsil</button> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
