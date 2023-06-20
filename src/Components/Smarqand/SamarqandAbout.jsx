import React from 'react'
import SamarqandAboutImg from '../../Images/samarqandAbout.png'

export default function SamarqandAbout() {
  return (
    <section className='samarqandAboutSection'>
      <div className="container">
        <h2>Biz haqimizda</h2>
        <div className='row samarqandAboutContent'>
          <div className='col-md-6 col-12'>
            <p>Biz sayohatchilar uchun turli xil turlar va ekskursiyalarni taklif qiluvchi sayyohlik agentligimiz. Bizning jamoamiz mijozlarimizga eng yaxshi xizmat va unutilmas sayohat tajribalarini taqdim etishga tayyor bo'lgan tajribali va professional sayohat mutaxassislaridan iborat.Agentligimiz butun dunyo bo'ylab individual va guruhli sayohatlarni tashkil etishga ixtisoslashgan. Biz mijozlarimizning har qanday istaklariga mos keladigan keng doiradagi turlar va sayohatlarni taqdim etamiz. Shuningdek, biz reyslar, mehmonxonalar va transport vositalarini bron qilish xizmatlarini taklif etamiz.</p>
            <a href="#">batafsil</a>
          </div>
          <div className='col-md-6 col-12'>
            <img src={SamarqandAboutImg} alt="..." />
          </div>
        </div>
      </div>
    </section>
  )
}
