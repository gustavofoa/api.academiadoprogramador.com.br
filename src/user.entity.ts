import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("aluno")
export class User {

    @PrimaryGeneratedColumn()
    id: Number
    @Column({ length: 255 })
    nome: String
    @Column({ length: 255 })
    email: String

    constructor (){
    }

}