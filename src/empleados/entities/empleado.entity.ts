import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Empleado {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        nullable: false,
    })
    nombre: string;

    @Column('text', {
        nullable: false,
    })
    puesto: string;

    @Column('decimal', {
        precision: 10,
        scale: 2,
        nullable: false,
    })
    salario: number;

    @Column('text', {
        nullable: true,
    })
    departamento: string;

    @Column('text', {
        nullable: true,
    })
    extension_telefonica: string;
}
