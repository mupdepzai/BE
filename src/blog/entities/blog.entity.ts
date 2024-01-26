import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'Blog',
})
export class BlogEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

 

  @CreateDateColumn({
    type: 'timestamp',
  })
  create_at: number;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_at: number;
}
