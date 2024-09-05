import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly usersRepository: Repository<Company>,
  ) {}

  getCompanies() {
    return this.usersRepository.find();
  }
}
