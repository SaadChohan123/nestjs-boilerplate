import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
export class User{
    @ObjectIdColumn()
    _id:string;

    @Column()
    email:string;

    @Column()
    password:string;
}