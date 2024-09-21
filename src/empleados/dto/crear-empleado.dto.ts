import { IsDecimal, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CrearEmpleadoDto {

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    puesto: string;

    @IsDecimal()
    @IsNotEmpty()
    salario: number;

    @IsString()
    @IsOptional()
    departamento?: string;

    @IsString()
    @IsOptional()
    extension_telefonica?: string;
}
