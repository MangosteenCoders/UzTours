import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios';

export default function SamarqandContact() {

  const BOT_TOKEN = "6144923882:AAHwtPSAS0AAmfhkG56VObE9uwYKtazcglw";
  const CHAT_ID = "-1001832600674"

  function formValidationChacking(name, number, message) {
    let isBoolean = false;

    if (!name) {
      setError(p => ({ ...p, name: [true, 'F.I.O. kiritilmadi!'] }))
      isBoolean = true

    } else if (name?.length < 6) {
      setError(p => ({ ...p, name: [true, "Bunchalik qisqa F.I.O. bo'lmaydi"] }))
      isBoolean = true
    }

    if (!number) {
      setError(p => ({ ...p, phone: [true, 'Telefon raqam kiritilmadi!'] }))
      isBoolean = true
    }

    if (!message) {
      setError(p => ({ ...p, text: [true, "Habar yozish majburiy!"] }))
      isBoolean = true

    } else if (message?.length < 12) {
      setError(p => ({ ...p, text: [true, "Habaringiz juda qisqa. Kamida 12ta belgi kerak!"] }))
      isBoolean = true
    }


    return isBoolean;
  }

  const sendForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let number = e.target[1].value
    let message = e.target[2].value

    if (formValidationChacking(name, number, message)) return
    setDisbl(true)

    let text = `<b>Ismi:</b> ${name} \n<b>Telefon raqami:</b> ${number} \n<b>Xabar:</b> ${message}`

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
      .then((res) => {
        toast.success("Habaringiz muvofaqqiyatli yuborildi!")
        e.target.reset()
        setDisbl(false)
      })
      .catch((err) => {
        toast.error("Habar yuborilmadi! Qayta urinib ko'ring")
        setDisbl(false)
      })

    let style = {}
    if (inputValue === '') {
      style = {
        border: '2px solid red'
      }
    }
    else {
      style = {
        border: '2px solid green'
      }
    }
    setStyled(style)
  }

  const [styled, setStyled] = useState({ border: '1px solid red', borderRadius: '2px' })
  const [inputValue, setValue] = useState('')
  const [disbl, setDisbl] = useState(false)
  const [error, setError] = useState({
    name: [false, ""],
    phone: [false, ""]
  })

  return (
    <section className='samarqandContactSection'>
      <div className="container">
        <h2>Kontaktlar</h2>
        <div className='row samarqandContactContent'>
          <div className='col-md-6 col-12'>
            <form onSubmit={sendForm}>
              <div className='position-relative'>
                <input className='col-12 mb-5' onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} type="text" placeholder='Ism' />
                {error.name[0] && <p style={{ color: 'red' }} className='position-absolute bottom-0 mb-3'>{error.name[1]}</p>}
              </div>

              <div className='position-relative'>
                <input className='col-12 mb-5' onChange={(e) => {
                  e.target.setCustomValidity("");
                  if (!e.target.validity.valid) {
                  e.target.setCustomValidity(
                  "Raqam noto'g'ri kiritilgan ! Misol: +998 97 707 07 77"
                  );
                }
                  setError(p => ({ ...p, phone: [false, ''] }))
                  }} style={error.phone[0] ? styled : null} type="tel" pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" placeholder='Telefon raqami' />
                  {error.phone[0] && <p style={{ color: 'red' }} className='position-absolute bottom-0 mb-3'>{error.phone[1]}</p>}
              </div>

              <div className='position-relative'>
                <textarea className='col-12 mb-5 textarea' onChange={() => setError(p => ({ ...p, text: [false, ''] }))} style={error.text[0] ? styled : null} placeholder='Xabar'></textarea>
                {error.text[0] && <p style={{ color: 'red' }} className='position-absolute bottom-0 mb-3'>{error.text[1]}</p>}
              </div>

              <button disabled={disbl} className='contactBtn'>YUBORISH</button>
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
