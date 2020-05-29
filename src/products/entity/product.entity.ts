import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity('product')
  export class ProductEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column({ type: 'varchar', nullable: false }) name: string;
    @Column({ type: 'varchar', nullable: true }) productCode: string;
    @Column({ type: 'varchar', nullable: true }) shoppingId: string;
    @Column({ type: 'numeric', nullable: true }) quantity: number;
    @Column({ type: 'varchar', nullable: true }) period: string;
    @Column({ type: 'varchar', nullable: true }) location: string;
    @Column({ type: 'varchar', nullable: true }) price: string;
    @Column({ type: 'varchar', nullable: true }) techSpects: string;
    @Column({ type: 'varchar', nullable: true }) description: string;
    @Column({ type: 'varchar', nullable: true }) profileImage: string;
    @Column({ type: 'varchar', nullable: true }) dimensions: string;
    @CreateDateColumn() createdOn?: Date;
    @CreateDateColumn() updatedOn?: Date;
  }
  