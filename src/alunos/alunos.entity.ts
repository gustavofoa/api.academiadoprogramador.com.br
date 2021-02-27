import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Faixa} from "../faixas/faixas.entity";


@Entity("aluno")
export class Aluno {

    @PrimaryGeneratedColumn()
    id: Number
    @Column({ length: 255 })
    nome: string
    @Column({ length: 255 })
    senha: string
    @Column({ length: 255 })
    email: string
    @ManyToOne(type => Faixa )
    @JoinColumn({ name: "faixa_atual" })
    faixa: Faixa

    constructor (){
    }

}