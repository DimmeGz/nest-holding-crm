import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/entities';

@Entity({ name: 'companies_account' })
export class Account extends AbstractEntity {
  // company
  // currency

  @Column({
    default: 0,
    type: 'decimal',
    unsigned: true,
    precision: 13,
    scale: 2,
  })
  balance: number;

  @Column({
    default: 0,
    type: 'decimal',
    unsigned: true,
    precision: 13,
    scale: 2,
  })
  wait: number;

  @Column({
    default: 0,
    type: 'decimal',
    unsigned: true,
    precision: 13,
    scale: 2,
  })
  debt: number;
}
