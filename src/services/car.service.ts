import { CarItem } from "@/types/CarType"
import axios from "axios"

const API_URL = 'http://localhost:4200/cars'

export const getCars = async() => {
    const { data } = await axios.get<CarItem[]>(API_URL)
    return data
}

export const getCarItem = async(id: number) => {
    const { data } = await axios.get<CarItem>(`${API_URL}/${id}`)
    return data
}