import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { AbstractEntity } from './abstract.entity';

export class AbstractDatableEntity<T> extends AbstractEntity {
  @CreateDateColumn({
    precision: 0,
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'createdAt',
  })
  created_at: Date;

  @UpdateDateColumn({
    precision: 0,
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    name: 'updatedAt',
  })
  updated_at: Date;

  constructor(entity: Partial<T>) {
    super();
    Object.assign(this, entity);
  }
}
