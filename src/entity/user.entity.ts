import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  nickname: string;

  @CreateDateColumn({ type: 'timestamp' })
  expires: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
