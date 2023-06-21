import React from 'react'
import img from '../../Images/buxoroInfo.png'
import icon1 from '../../Icons/card-data.svg'
import icon2 from '../../Icons/card-time.svg'
import icon3 from '../../Icons/card-price.svg'

export default function MarshrutInfo() {
  return (
    <div className='TourInfo'>
      <div className="container">
          <h3>Buxoro bo’ylab sayohat</h3>
        <div className="row">
          <div className="col-md-4">
            <img src={img} alt="" />
          </div>
          <div className="col-md-8 card-info-body ">
            <div className="info-body">
            <div className='texts'>
              <p> Qadimiy Buxoro shahriga sayohatga chiqmoqchimisiz? Muqaddas Buxoro O‘zbekistonning sayyohlik durdonalaridan biridir.  Tarixiy shahar markazi YUNESKOning Butunjahon merosi ro‘yxatiga kiritilgan. Shaharning yoshi  2500 yildan  oshgan.</p>
              <p>Bu yerdagi yozni issiq va qurg‘oq deb taʼriflash mumkin, shuning uchun yilning bu faslida Buxoroga sayohat qilganda o‘zingiz bilan soyabon va quyosh nuridan saqlovchi krem olishni unutmang. Buxoroda qish juda yumshoq, ammo iliq narsalarni ham eʼtibordan chetda qoldirmang.</p>
              <p>Buxoro ko‘chalarida ko‘plab turli xil esdalik do‘konlarini va ustaxonalarini topishingiz mumkin. Baʼzida barcha suvenirlar bir xil bo‘lib tuyuladi, ammo bu shunday emas! Har bir sotuvchida sizni ajablantiradigan narsa bo‘ladi! Buxoro – O‘zbekistonning to‘quv poytaxti!  </p>

            </div>
            <div className='info-cards'>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <img src={icon1} alt="" />
                    <p>Ketish sanalari</p>
                  </div>
                  <span>11 iyun 2023 yil</span>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <img src={icon2} alt="" />
                    <p>Davomiyligi</p>
                  </div>
                  <span>1-2 kun</span>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <img src={icon3} alt="" />
                    <p>Narxi</p>
                  </div>
                  <span>570.000 so’m</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
