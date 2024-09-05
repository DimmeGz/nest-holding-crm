import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractDocumentEntity } from '../../entities';
import { CommissionInvoice } from '../../commission-invoice/entities';

@Entity({ name: 'documents_commissionpayment' })
export class CommissionPayment extends AbstractDocumentEntity<CommissionPayment> {
  @ManyToOne(() => CommissionInvoice, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'commission_invoice_id' })
  commissionInvoice: CommissionInvoice;

  @Column({
    name: 'expected_date',
    type: 'date',
    nullable: true,
  })
  expectedDate: Date;

  @Column({
    type: 'decimal',
    unsigned: true,
    precision: 8,
    scale: 2,
  })
  amount: number;
}
