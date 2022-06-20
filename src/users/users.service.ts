import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Mary', email: 'mary@gmail.com' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
