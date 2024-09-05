import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/entities';

@Entity()
export class AbstractServiceLineEntity extends AbstractEntity {
  @Column({
    type: 'decimal',
    unsigned: true,
    precision: 12,
    scale: 3,
  })
  price: number;
}
