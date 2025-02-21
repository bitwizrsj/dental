import React from 'react'
import Hero from './Hero'
import DentalServices from './DentalService'
import DentalClinic from './DentalClinic'
import Testimonials from './Testimonials'
import ContactUs from './ContactUs'
import Footer from '../../components/common/Footer'

export default function Home() {
    return (
        <>
            <Hero />
            <DentalServices />
            <DentalClinic />
            <Testimonials />
            <ContactUs />
        </>

    )
}
