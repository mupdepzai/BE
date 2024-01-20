import { STATUS } from "../enums/product.enum"

export class ProductResponse {
    id: number
    product_name: string
    image_url: string
    adapter: string
    brand: string
    color: string
    connect_micro_wireless: string
    connect_other: string
    connect_wireless: string
    frequency: string
    height: number
    length: number
    many_bass: string
    many_speaker: string
    material: string
    model: string
    port_wired_micro: string
    power: string
    time_is_battery: string
    time_is_use: string
    treble: string
    weight: number
    width: number
    price: number
    status: STATUS
    create_at: string
    updated_at: string
}