import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractDocumentRecipientEntity } from '../../entities';
import { Currency, Incoterms } from '../../../libs/entities';
import { Order } from '../../orders/entities';

@Entity({ name: 'documents_order' })
export class OrderConfirmation extends AbstractDocumentRecipientEntity<OrderConfirmation> {
  @Column({
    name: 'payment_delay',
    type: 'smallint',
    default: 0,
  })
  paymentDelay: number;

  @ManyToOne(() => Currency, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'currency_id' })
  currency: Currency;

  @ManyToOne(() => Order, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({
    name: 'number',
    type: 'varchar',
    length: 15,
    unique: true,
  })
  orderNumber: string;

  @Column({
    name: 'expected_date',
    type: 'date',
    nullable: true,
  })
  expectedDate: Date;

  @ManyToOne(() => Incoterms, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'incoterms_id' })
  incoterms: Incoterms;

  @Column({
    name: 'transport_place',
    type: 'varchar',
    length: 20,
  })
  transportPlace: string;
}
