import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('case_studies')
export class CaseStudy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  client: string;

  @Column()
  industry: string;

  @Column('text')
  summary: string;

  @Column('text')
  challenge: string;

  @Column('text')
  solution: string;

  @Column('simple-array')
  results: string[];

  @Column('simple-array')
  tags: string[];

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}