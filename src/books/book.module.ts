import { Module } from '@nestjs/common';
import { BooksService } from './services/book.service';
import { BooksController } from './controllers/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books as Book } from './entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  exports: [TypeOrmModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
