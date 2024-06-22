export type CarItem = {
    id: string
    name : string,
    price: number,
    image: string
}

export interface CarItemProps {
    car: CarItem,
    id: string
}