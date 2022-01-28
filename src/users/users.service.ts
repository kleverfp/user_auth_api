import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-users.dto';
import { UserRole } from './user-roles.enum';
import { UserRepository } from './users.repository';
import { User  } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository
    ){}

    async createAdminUser(createUserDto:CreateUserDto):Promise<User>{
        if(createUserDto.password != createUserDto.passwordConfirmation)
            throw new UnprocessableEntityException('ṕasswords do not match');
        else    
            return this.userRepository.createUser(createUserDto,UserRole.ADMIN);
    }
}
