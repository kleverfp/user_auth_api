import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-users.dto';
import { ReturnUserDto } from './dtos/return-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}

    @Post()
    async createAdminUser( @Body() createUserDto:CreateUserDto):Promise<ReturnUserDto>{
        const user = await this.usersService.createAdminUser(createUserDto);
        return {
            user,
            message:'user created!'
        };
    }
}
