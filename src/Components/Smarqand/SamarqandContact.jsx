import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

export default function SamarqandContact() {
  const BOT_TOKEN = "5871300926:AAElDbiyIuEm4TFFNo6mzqsgEzJ3kJThimQ";
  const CHAT_ID = "-1001941898048"

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
    return isBoolean;
  }

  const sendForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let number = e.target[1].value

    if (formValidationChacking(name, number)) return
    setDisbl(true)

    let text = `<b>Ismi:</b> ${name} \n<b>Telefon raqami:</b> ${number} \n`

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
        toast.success("Habar yuborildi 🙂")
        e.target.reset()
        setDisbl(false)
      })
      .catch((err) => {
        toast.error("Habar yuborilmadi! Qaytadan urinib ko'ring 😞")
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

  const [styled, setStyled] = useState({ border: '1px solid red', borderRadius: '32px' })
  const [inputValue, setValue] = useState('')
  const [disbl, setDisbl] = useState(false)
  const [error, setError] = useState({
    name: [false, ""],
    phone: [false, ""],
  })

  return (
    <section className='samarqandContactSection'>
      <div className="container">
        <h2 className='contactTitle'>Kontaktlar</h2>
        <div className='samarqandContactContent'>
          <div>
            <form onSubmit={sendForm}>
              <div onChange={() => setError(p => ({ ...p, name: [false, ''] }))} >
                <input type="text" placeholder='Ism' style={error.name[0] ? styled : null}/>
              </div>
              {error.name[0] && <p style={{ color: 'red' }}>{error.name[1]}</p>}

              <div onChange={() => setError(p => ({ ...p, name: [false, ''] }))} >
                <input style={error.name[0] ? styled : null} placeholder='Telefon raqami' autocomplete="off" maxlength="13" minlength="4" type="tel" data-intl-tel-input-id="1"
                  onChange={(e) => {
                    e.target.setCustomValidity("");
                    if (!e.target.validity.valid) {
                      e.target.setCustomValidity(
                        "Raqamni noto'g'ri kiritdingiz! Misol: +998977770777"
                      );
                    }
                    setError(p => ({ ...p, phone: [false, ''] }))
                  }} pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                />
              </div>
              {error.phone[0] && <p style={{ color: 'red' }}>{error.phone[1]}</p>}

              <div>
                <textarea placeholder='Xabar'></textarea>
              </div>

              <button className='contactBtn'>YUBORISH</button>
            </form>
          </div>
          <div className='samarqandContactInfo'>
            <div>
              <h2>Manzil</h2>
              <p>Toshkent sh., Olmazor ko’chasi, 327А.</p>
            </div>
            <div>
              <h2>Telefon</h2>
              <a href="tel:+998938092710">+998 (93) 809-27-10</a> <br />
              <a href="tel:+998331772710">+998 (33) 177-27-10</a>
            </div>
            <div>
              <h2>Pochta</h2>
              <a disabled={disbl} href="uztur@gmail.com">uztur@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
