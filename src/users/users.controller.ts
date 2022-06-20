import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('list')
  getUsers(): any {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): any {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  createUser(): any {
    // const user = {id: Date().getTime(), name: name};
  }
}
