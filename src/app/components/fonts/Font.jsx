import { Roboto } from 'next/font/google'
import React from 'react'

export const roboto = Roboto({
  subsets: ['latin'],
  // all the weights
  weight: ['400', '700', "300", "500", "900"],
})
const Font = () => {
  return (
    <div>Font</div>
  )
}

export default Font