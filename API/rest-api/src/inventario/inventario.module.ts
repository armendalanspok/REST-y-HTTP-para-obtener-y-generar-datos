import { Module } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventario} from './entities/inventario.entity';
import { InventarioController } from './inventario.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Inventario])], 
  controllers: [InventarioController],
  providers: [InventarioService],
})
export class InventarioModule {}
