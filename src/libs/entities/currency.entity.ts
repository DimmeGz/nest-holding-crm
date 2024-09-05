import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'companies_currency' })
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 3 })
  name: string;
}
