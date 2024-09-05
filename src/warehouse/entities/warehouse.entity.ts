import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/entities';

@Entity()
export class Warehouse extends AbstractEntity {
  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @Column({
    name: 'name_for_print',
    type: 'varchar',
    length: 70,
    nullable: true,
  })
  nameForPrint: string;
}
