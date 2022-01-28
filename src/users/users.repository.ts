import { EntityRepository, Repository } from 'typeorm';
import { User } from '../db/models/user.entity';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import {ConflictException,InternalServerErrorException} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-users.dto';
import { UserRole } from './user-roles.enum';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(createUserDto:CreateUserDto, role:UserRole):Promise<User>{
        const {email,name,password} = createUserDto;
        const user = this.create();
        user.email = email;
        user.name = name;
        user.role = role;
        user.status = true;
        user.confirmationToken = crypto.randomBytes(32).toString('hex');
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password,user.salt);

        try{
            await user.save();
            delete user.password;
            delete user.salt;
            return user;
        }catch(error){
            if(error.code.toString() ==='23505')
                throw new ConflictException('Endereço de email já cadastrado');
            else
                throw new InternalServerErrorException('Erro o salvar o usuário ');
        }

    }

    private async hashPassword(password:string,salt:string):Promise<string>{
        return bcrypt.hash(password,salt);
    }
}