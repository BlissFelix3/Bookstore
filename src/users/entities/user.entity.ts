import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Books } from '../../books/entities/book.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;

  @OneToMany(() => Books, (book) => book.user)
  books?: Books[];
}
