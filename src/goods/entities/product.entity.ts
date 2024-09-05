import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../common/entities';
import { CountryOfOrigin } from '../../libs/entities';

@Entity({ name: 'warehouse_product' })
export class Product extends AbstractEntity {
  @Column({
    type: 'varchar',
    length: 40,
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 70,
    nullable: true,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 70,
    nullable: true,
  })
  description2: string;

  @Column({
    name: 'cn_code',
    type: 'bigint',
    unsigned: true,
    nullable: true,
  })
  cnCode: string;

  @ManyToOne(() => CountryOfOrigin, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'default_country_of_origin_id' })
  countryOfOrigin: CountryOfOrigin;

  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  cas: string;

  //   custom_fields
}
