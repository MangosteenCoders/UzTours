import React from 'react'
import aboutImg1 from '../Images/aboutImg1.png'
import aboutImg2 from '../Images/aboutImg2.png'

export default function About() {
  return (
    <section className='aboutSection'>
      <div className="container">
        <h2 className='aboutTitle'>Biz haqimizda</h2>

        <div className="aboutContent">
          <div className='aboutInfo'>
              <h2>Biz sayohatchilar uchun turli xil turlar va ekskursiyalarni taklif qiluvchi sayyohlik agentligimiz. Bizning jamoamiz mijozlarimizga eng yaxshi xizmat va unutilmas sayohat tajribalarini taqdim etishga tayyor bo'lgan tajribali va professional sayohat mutaxassislaridan iborat. <br /> <br /> Agentligimiz butun dunyo bo'ylab individual va guruhli sayohatlarni tashkil etishga ixtisoslashgan. Biz mijozlarimizning har qanday istaklariga mos keladigan keng doiradagi turlar va sayohatlarni taqdim etamiz. Shuningdek, biz reyslar, mehmonxonalar va transport vositalarini bron qilish xizmatlarini taklif etamiz.</h2>

              <img src={aboutImg1} alt="..." />
          </div>

          <div className='aboutInfo'>
              <img src={aboutImg2} alt="..." />

              <h2>Lorem ipsum dolor sit amet consectetur. Posuere in magnis eu lectus egestas facilisis ipsum nec. Lacus tincidunt mi iaculis tempor luctus quam id lorem egestas. Fermentum sed felis risus ipsum. Curabitur gravida rhoncus lacinia sed sed laoreet cursus. Mauris quisque fames congue viverra cursus in rhoncus volutpat ridiculus. A nisi phasellus libero scelerisque dictum gravida blandit id. Fusce sodales facilisis scelerisque donec id nec tellus nunc massa.</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
