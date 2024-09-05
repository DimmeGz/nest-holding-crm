import { Column, Entity } from 'typeorm';
import { AbstractDocument } from '../../common/entities';

@Entity({ name: 'documents_contract' })
export class Contract extends AbstractDocument<Contract> {
  @Column({ name: 'comment', type: 'varchar', length: 200, nullable: true })
  comment: string;
}
