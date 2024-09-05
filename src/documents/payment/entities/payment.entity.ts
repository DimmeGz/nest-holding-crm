import { Column, Entity } from 'typeorm';

import { AbstractDocumentEntity } from '../../entities';

@Entity({ name: 'documents_payment' })
export class Payment extends AbstractDocumentEntity<Payment> {
  @Column({
    name: 'document_sum',
    type: 'decimal',
    unsigned: true,
    precision: 13,
    scale: 3,
    default: 0,
  })
  documentSum: number;

  @Column({
    name: 'expected_date',
    type: 'date',
    nullable: true,
  })
  expectedDate: Date;
}
