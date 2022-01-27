import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Service } from './.service';


@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [Service],
})
export class AppModule {}
