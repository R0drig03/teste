import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";
 
@Entity({ name: 'estado_teste' }) //CONSIDERADA ESSA CLASSE UMA ENTIDADE
export class EstadoEntity {

    @PrimaryGeneratedColumn('increment')
    id: number; //PREENCHIDO AUTOMÁTICAMENTE
    
    @CreateDateColumn()
    criado_em: Date; //PREENCHIDO AUTOMÁTICAMENTE

    @Column({ nullable: true, length: 255 })
    nome: string;
    
    @Column({type:"char", nullable: true, length: 2})
    uf: string
}

//OS DTOS SERVEM PARA INFORMAR QUAIS OS ATRIBUTOS REALMENTE DEVEM SER CONSIDARADOS NOS INPUT E OUTPUTS DE DADOS NOS ENDPOINTS
