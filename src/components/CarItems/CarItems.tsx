// 'use client'
import { getCars } from '@/services/car.service'
import React, { FC, useEffect } from 'react'
import CarItem from '../CarItem/CarItem'

const CarItems: FC = async() => {
   const cars = await getCars()
  return (
    <div>
        {cars.map(elem => (
            <CarItem car={elem} id={elem.id}/>
        ))}
    </div>
  )
}

export default CarItems