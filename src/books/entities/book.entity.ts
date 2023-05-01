import { Users } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @Column()
  author: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;

  @ManyToOne(() => Users, (user) => user.books)
  user?: Users;
}
