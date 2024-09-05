import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from '../../companies/entities';

@Entity({ name: 'companies_currency' })
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 3 })
  name: string;

  @OneToMany(() => Account, (account) => account.currency)
  accounts: Account[];
}
