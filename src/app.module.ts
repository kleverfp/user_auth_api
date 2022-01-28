import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import * as ormOptions from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
