import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ferreira',
  password: 'Kfp_2008',
  database: 'authuserdb',
  entities: [path.resolve(__dirname,'..','db','models','*')],
  migrations: [path.resolve(__dirname,'..','db','migrations','*')],
  synchronize: true,
};

module.exports = typeOrmConfig;