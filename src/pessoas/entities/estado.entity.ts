import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from "typeorm";
import { CidadeEntity } from "./cidade.entity";

@Entity({ name: 'estado_teste' })
export class EstadoEntity {

    @PrimaryGeneratedColumn('increment')
    id: number; //PREENCHIDO AUTOMÁTICAMENTE
    
    @CreateDateColumn()
    criado_em: Date; //PREENCHIDO AUTOMÁTICAMENTE

    @Column({ nullable: true, length: 255 })
    nome: string;
    
    @Column({type:"char", nullable: true, length: 2})
    uf: string

    @OneToMany(() => CidadeEntity, (cidade) => cidade.fk_estado) //COLUNA CRIADA UNICAMENTE PARA INFORMAR A RELAÇÃO ENTRE AS TABELAS
    cidades: CidadeEntity[];
}

//OS DTOS SERVEM PARA INFORMAR QUAIS OS ATRIBUTOS REALMENTE DEVEM SER CONSIDARADOS NOS INPUT E OUTPUTS DE DADOS NOS ENDPOINTS
