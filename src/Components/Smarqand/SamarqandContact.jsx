import React from 'react'
// import toast from 'react-hot-toast'
// import axios from 'axios';

export default function SamarqandContact() {

  return (
    <section className='samarqandContactSection'>
      <div className="container">
        <h2>Kontaktlar</h2>
        <div className='row samarqandContactContent'>
          <div className='col-md-6 col-12'>
            <form>
              <div>
                <input className='col-12 mb-5' type="text" placeholder='Ism' />
              </div>

              <div>
                <input className='col-12 mb-5' />
              </div>

              <div>
                <textarea className='col-12 mb-5 textarea' placeholder='Xabar'></textarea>
              </div>

              <button className='contactBtn'>YUBORISH</button>
            </form>

          </div>
          <div className='samarqandContactInfo col-md-6 col-12'>
            <div>
              <h2>Manzil</h2>
              <p>Toshkent sh., Olmazor ko’chasi, 327А.</p>
            </div>
            <div>
              <h2>Telefon</h2>
              <a href="tel:+998938092710">+998 (93) 809-27-10</a>
              <a href="tel:+998331772710">+998 (33) 177-27-10</a>
            </div>
            <div>
              <h2>Pochta</h2>
              <a href="uztur@gmail.com">uztur@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
