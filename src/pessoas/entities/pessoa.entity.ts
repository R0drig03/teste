import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class PessoaEntity{
    @PrimaryGeneratedColumn('increment')
    id: number; //PREENCHIDO AUTOMÁTICAMENTE  
    
    @Column({type: 'varchar', length: 255, nullable: false})
    nome: string

    @Column({type: 'varchar', length: 255})
    cpf: string

    
    //data_nascimento
//
    //sexo


};