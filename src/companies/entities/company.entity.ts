import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyType } from '../enums';

@Entity({ name: 'companies_company' })
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 50 })
  name: string;

  @Column({ name: 'full_name', type: 'varchar', length: 50, nullable: true })
  fullName: string;

  @Column({
    name: 'name_for_print',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  printName: string;

  @Column({
    name: 'name_for_print_2',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  printName2: string;

  @Column({ name: 'report_type', default: 0, type: 'smallint', unsigned: true })
  reportType: number;

  // default_warehouse

  @Column({
    name: 'invoice_prefix',
    type: 'varchar',
    length: 6,
    nullable: true,
  })
  invoicePrefix: string;

  @Column({
    name: 'invoice_prefix_alternative',
    type: 'varchar',
    length: 6,
    nullable: true,
  })
  invoicePrefixAlternative: string;

  @Column({
    name: 'payment_delay',
    default: 0,
    type: 'smallint',
    unsigned: true,
  })
  paymentDelay: number;

  // users_permission

  @Column({
    name: 'company_type',
    type: 'enum',
    enum: CompanyType,
  })
  companyType: CompanyType;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  address: string;

  @Column({
    type: 'smallint',
    unsigned: true,
    nullable: true,
  })
  tin: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  contacts: string;

  @Column({
    name: 'bank_name',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  bankName: string;

  @Column({
    name: 'bank_info',
    type: 'varchar',
    nullable: true,
  })
  bankInfo: string;

  @Column({
    name: 'default_ponz',
    type: 'smallint',
    unsigned: true,
    nullable: true,
  })
  defaultPonz: number;

  @Column({
    name: 'contact_person',
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  contactPerson: string;

  // warehouses_usage

  @Column({
    name: 'vat_triangulation_basis',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  vatTriangulationBasis: string;

  @Column({
    name: 'calendar_hex',
    type: 'varchar',
    length: 9,
    nullable: true,
  })
  calendarHex: string;

  // logo_url
}
