import { Entity } from 'typeorm';

import { AbstractDatableEntity } from './abstract-datable.entity';

@Entity({ name: 'documents_contract' })
export class AbstractDocument<T> extends AbstractDatableEntity<T> {}
