import React from 'react'
import img from '../../Images/samarqandInfo.png'
import icon1 from '../../Icons/card-data.svg'
import icon2 from '../../Icons/card-time.svg'
import icon3 from '../../Icons/card-price.svg'

export default function SamarqandMarshrut() {
  return (
    <div className='TourInfo'>
      <div className="container">
          <h3>Samarqand bo’ylab sayohat</h3>
        <div className="row">
          <div className="col-md-4">
            <img src={img} alt="" />
          </div>
          <div className="col-md-8 card-info-body ">
            <div className="info-body">
            <div className='texts'>
              <p> Qadimiy Samarqand shahriga sayohatga chiqmoqchimisiz? Biz sizga Registon, Gur-Emir, Shoxi-Zinda va boshqa ko'plab diqqatga sazovor joylarga tashrif buyurishingiz mumkin bo'lgan qiziqarli sayohatni taklif qilamiz.  </p>
              <p>Agar siz Samarqandda uzoqroq vaqt dam olishni istasangiz, biz sizga qiziqish va ehtiyojlaringizga moslashtirilgan individual turni taklif qilishimiz mumkin.</p>
              <p>Shuningdek, sizni shaharning barcha qiziqarli joylariga olib boradigan, tarixiy voqealar haqida gapirib beradigan va barcha savollaringizga javob beradigan professional gid taklif etamiz. </p>

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
