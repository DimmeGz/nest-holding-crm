import { Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity({ name: 'documents_contract' })
export class AbstractDocument<T> extends AbstractEntity<T> {}
