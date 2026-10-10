// @ts-ignore - CSS imports are handled by the bundler in this project
import "./cypress-hvac.css"
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BookingSection } from './components/BookingSection'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Symptoms } from './components/Symptoms'
import { Process } from './components/Process'
import { WhyUs } from './components/WhyUs'
import { Areas } from './components/Areas'
import { Reviews } from './components/Reviews'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer, MobileCallBar } from './components/Footer'

export const meta ={
  
    slug: "cypress-hvac",
    title: "Cypress HVAC | Heating & Air Conditioning Services",
    author: {
      name: "longman14",
      github: "longman14"
    },
    description: "Cypress HVAC is a trusted heating and air conditioning service provider in Atlanta, GA. We offer expert AC repair, heating & furnace repair, system replacement, maintenance, and more. Contact us today for reliable HVAC services.",

}
const CypressHavcPage = () => {
  return (
    <div className="cypress-hvac-page">
        <Navbar />
        <main>
            <Hero />
            <Marquee/>
            <BookingSection />
            <Services/>
            <Symptoms/>
            <Process/>
            <WhyUs/>
            <Areas/>
            <Reviews/>
            <FAQ/>
            <Contact/>


        </main>
        <Footer/>
        <MobileCallBar/>

    </div>
  )
}

export default CypressHavcPage