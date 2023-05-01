import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateBookDto } from '../dtos/create-book.dto';
import { UpdateBookDto } from '../dtos/update-book.dto';
import { Books } from '../entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private booksRepository: Repository<Books>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Books> {
    const book = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(book);
  }

  async findAll(): Promise<Books[]> {
    return this.booksRepository.find();
  }

  async findOne(id: number): Promise<Books> {
    return this.booksRepository.findOne({ where: { id: id } });
  }

  async update(
    id: number,
    updateBookDto: UpdateBookDto,
  ): Promise<UpdateResult> {
    return this.booksRepository.update(id, updateBookDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.booksRepository.delete(id);
  }
}
