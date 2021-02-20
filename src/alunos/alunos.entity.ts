import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Faixa} from "../faixas/faixas.entity";


@Entity("aluno")
export class Aluno {

    @PrimaryGeneratedColumn()
    id: Number
    @Column({ length: 255 })
    nome: String
    @Column({ length: 255 })
    email: String
    @ManyToOne(type => Faixa)
    faixa: Faixa

    constructor (){
    }

}