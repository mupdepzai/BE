import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    create_at: string

    @Column()
    update_at: string
}
