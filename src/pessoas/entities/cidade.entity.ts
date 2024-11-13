import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { EstadoEntity } from "./estado.entity";
 
@Entity({ name: 'cidade_teste' }) //CONSIDERADA ESSA CLASSE UMA ENTIDADE
export class CidadeEntity {

    @PrimaryGeneratedColumn('increment')
    id: number; //PREENCHIDO AUTOMÁTICAMENTE
    
    @Column({ nullable: true, length: 255 })
    nome: string;
    
    @ManyToOne(() => EstadoEntity, (estado) => estado.cidades) 
    @JoinColumn({ name: 'fk_estado' }) //JOINCOLUMN SERVE PARA RENOMEAR OS ATRIBUTOS DE CHAVE ESTRÂNGEIRA
    fk_estado: EstadoEntity;

    @CreateDateColumn()
    criado_em: Date; //PREENCHIDO AUTOMÁTICAMENTE

}

//OS DTOS SERVEM PARA INFORMAR QUAIS OS ATRIBUTOS REALMENTE DEVEM SER CONSIDARADOS NOS INPUT E OUTPUTS DE DADOS NOS ENDPOINTS
