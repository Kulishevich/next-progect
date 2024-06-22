import React, { FC } from 'react'
import { CarItemProps } from '@/types/CarType'
import Image from 'next/image'
import Link from 'next/link'

const CarItem: FC<CarItemProps> = ({car, id}) => {
  return (
    <div>
        <Image src={car.image} alt='car' width={500} height={300} />
        <h1>{car.name}</h1>
        <small>{car.price}</small>
        <Link href={`/car/${id}`}>Подробней...</Link>
    </div>
  )
}

export default CarItem
