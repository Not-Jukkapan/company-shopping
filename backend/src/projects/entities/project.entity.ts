import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  client: string;

  @Column()
  year: string;

  @Column('text')
  description: string;

  @Column('text')
  longDescription: string;

  @Column('text')
  challenge: string;

  @Column('text')
  solution: string;

  @Column('text')
  results: string;

  @Column('simple-array')
  technologies: string[];

  @Column('simple-array')
  images: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}