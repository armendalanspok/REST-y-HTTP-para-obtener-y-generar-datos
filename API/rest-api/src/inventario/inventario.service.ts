import { Injectable } from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventario} from './entities/inventario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private inventarioRepository: Repository<Inventario>,
  ) {}

  async create(createInventarioDto: CreateInventarioDto) {
    return await this.inventarioRepository.save(createInventarioDto)
  }

  async findAll() {
    return await this.inventarioRepository.find()
  }

  async findOne(id: number) {
    return await this.inventarioRepository.findOne({where: {id}})
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto) {
    const obj= await this.inventarioRepository.findOne({where: {id}})
    const newobj = Object.assign(obj, updateInventarioDto);

    return await this.inventarioRepository.save(newobj)
  }

  async remove(id: number) {
    return await this.inventarioRepository.delete(id)
  }
}
