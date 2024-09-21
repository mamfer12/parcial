import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CrearEmpleadoDto } from './dto/crear-empleado.dto';
import { ActualizarEmpleadoDto } from './dto/actualizar-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  crear(@Body() crearEmpleadoDto: CrearEmpleadoDto) {
    return this.empleadosService.crear(crearEmpleadoDto);
  }

  @Get()
  obtenerTodos() {
    return this.empleadosService.obtenerTodos();
  }

  @Get(':id')
  obtenerUno(@Param('id') id: string) {
    return this.empleadosService.obtenerUno(id);
  }

  @Patch(':id')
  actualizar(@Param('id') id: string, @Body() actualizarEmpleadoDto: ActualizarEmpleadoDto) {
    return this.empleadosService.actualizar(id, actualizarEmpleadoDto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.empleadosService.eliminar(id);
  }
}
