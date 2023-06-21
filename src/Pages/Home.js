import React from 'react'
import Homehead from '../Components/Home/Homehead'
import ToursCards from '../Components/Home/ToursCards'
import TransportInfo from '../Components/Home/TransportInfo'
import SamarqandInfo from '../Components/Smarqand/SamarqandInfo'
// import SamarqandPhotos from '../Components/Smarqand/SamarqandPhotos'
import SamarqandAbout from '../Components/Smarqand/SamarqandAbout'

export default function Home() {
  return (
    <section className='Home'>
      <Homehead/>
      <ToursCards/>
      <TransportInfo/>
      <SamarqandInfo/>
      {/* <SamarqandPhotos /> */}
      <SamarqandAbout />
    </section>
  )
}
