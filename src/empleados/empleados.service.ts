import { Injectable } from '@nestjs/common';
import { CrearEmpleadoDto } from './dto/crear-empleado.dto';
import { ActualizarEmpleadoDto } from './dto/actualizar-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}

  async crear(crearEmpleadoDto: CrearEmpleadoDto) {
    const empleado = this.empleadoRepository.create(crearEmpleadoDto);
    return await this.empleadoRepository.save(empleado);
  }

  obtenerTodos() {
    return this.empleadoRepository.find();
  }

  obtenerUno(id: string) {
    return this.empleadoRepository.findOneBy({ id });
  }

  async actualizar(id: string, actualizarEmpleadoDto: ActualizarEmpleadoDto) {
    await this.empleadoRepository.update(id, actualizarEmpleadoDto);
    return this.empleadoRepository.findOneBy({ id });
  }

  eliminar(id: string) {
    return this.empleadoRepository.delete(id);
  }
}
