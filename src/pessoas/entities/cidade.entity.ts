import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { EstadoEntity } from "./estado.entity";
 
@Entity({ name: 'cidade_teste' }) //CONSIDERADA ESSA CLASSE UMA ENTIDADE
export class CidadeEntity {

    @PrimaryGeneratedColumn('increment')
    id: number; //PREENCHIDO AUTOMÁTICAMENTE
    
    @Column({ nullable: true, length: 255 })
    nome: string;
    
    @ManyToOne(() => EstadoEntity, estado => estado.id) // Definindo a relação
    fk_estado: EstadoEntity; // Adicionando a propriedade para a relação

    @CreateDateColumn()
    criado_em: Date; //PREENCHIDO AUTOMÁTICAMENTE

}

//OS DTOS SERVEM PARA INFORMAR QUAIS OS ATRIBUTOS REALMENTE DEVEM SER CONSIDARADOS NOS INPUT E OUTPUTS DE DADOS NOS ENDPOINTS
