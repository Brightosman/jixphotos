import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import React from 'react'

const contact = () => {
  return (
    <div>
        <Hero heading="Contact Me" message="Submit the form below contact me directly for quotes"/>
        <Contact />
    </div>
  )
}

export default contact