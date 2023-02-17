import Portfolio from '@/components/Portfolio'
import React from 'react'
import Hero from '../components/Hero'

const work = () => {
  return (
    <div>
        <Hero heading='My Work' message='These are some of my recent work ' />
        <Portfolio />
    </div>
  )
}

export default work