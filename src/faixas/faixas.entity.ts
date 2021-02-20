import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("faixa")
export class Faixa {

    @PrimaryGeneratedColumn()
    ordem: Number
    @Column({ length: 100 })
    nome: String
    @Column({ length: 20 })
    cor: String

    constructor (){
    }

}