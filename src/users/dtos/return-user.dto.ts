import { User } from '../../db/models/user.entity';

export class ReturnUserDto {
  user: User;
  message: string;
}