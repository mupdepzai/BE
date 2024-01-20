import * as moment from "moment";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { STATUS } from "../enums/product.enum";

@Entity({
    name: 'product'
})

export class ProductEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        type: 'text'
    })
    product_name: string

    @Column({
        type: 'text'
    })
    image_url: string

    @Column({
        type: 'text'
    })
    brand: string

    @Column({
        type: 'text'
    })
    model: string

    @Column({
        type: 'text'
    })
    power: string

    @Column({
        type: 'text'
    })
    adapter: string

    @Column({
        type: 'text'
    })
    time_is_battery: string
    
    @Column({
        type: 'text'
    })
    time_is_use: string

    @Column({
        type: 'text'
    })
    many_speaker: string

    @Column({
        type: 'text'
    })
    many_bass: string

    @Column({
        type: 'text'
    })
    treble: string

    @Column({
        type: 'text'
    })
    connect_wireless: string

    @Column({
        type: 'text'
    })
    connect_micro_wireless: string

    @Column({
        type: 'text'
    })
    connect_other: string

    @Column({
        type: 'text'
    })
    port_wired_micro: string

    @Column()
    length: number

    @Column()
    width: number

    @Column()
    height: number

    @Column()
    weight: number

    @Column({
        type: 'text'
    })
    material: string

    @Column({
        type: 'text'
    })
    color: string

    @Column({
        type: 'text'
    })
    frequency: string

    @Column()
    price: number // đơn giá đơn vị nghìn đồng

    @Column({
        enum: STATUS,
        type: Number,
        default: 1
    })
    status: STATUS

    @CreateDateColumn({
    type: 'timestamp'
    })
    create_at: number

    @UpdateDateColumn({
    type: 'timestamp'
    })
    updated_at: number;
}
