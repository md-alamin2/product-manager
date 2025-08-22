import React from 'react'
import { LoadingSpinner } from '../components/ui/loading'

export default function loading() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <LoadingSpinner size='xl'></LoadingSpinner>
    </div>
  )
}
