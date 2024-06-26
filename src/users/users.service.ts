import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { MongoRepository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
    ) { }

    async createUser(createUserDto: CreateUserDto) {
        const { email, password } = createUserDto;
        const user = await this.userRepository.create({ email, password });
        return this.userRepository.save(user);
    }

    async findUserByEmail(email: string) {
        const user = await this.userRepository.findOneBy({ email });
        return user;
    }

    async findUserById(id: string) {
        const user = await this.userRepository.findOneBy({ _id: ObjectId.createFromHexString(id) });
        return user;
    }
}
