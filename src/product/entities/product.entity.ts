import * as moment from "moment";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'product'
})

export class ProductEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        type: 'text'
    })
    full_name: string

    @Column({
        type: 'text'
    })
    image_url: string

    @CreateDateColumn({
    type: 'timestamp'
    })
    create_at: number

    @UpdateDateColumn({
    type: 'timestamp'
    })
    updated_at: number;
}
