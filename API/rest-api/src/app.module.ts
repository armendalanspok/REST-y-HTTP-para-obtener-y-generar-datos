import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioModule } from './inventario/inventario.module';
import { Inventario} from './inventario/entities/inventario.entity';
@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'reto',
        entities: [Inventario],
        synchronize: true, 
      }),
      InventarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
