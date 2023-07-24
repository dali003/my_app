import { Controller, Get } from '@nestjs/common';
import { pool } from 'pg';


@Controller('users')
export class UsersController {
  constructor(private readonly pool: pool) {}

  @Get('create-table')
  async createTable(): Promise<string> {
    await this.pool.createTable();
    return 'Table created!';
  }
}