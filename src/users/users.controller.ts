import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Users | undefined> {
    return this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() data: any): Promise<Users> {
    return this.usersService.create(data);
  }
}
