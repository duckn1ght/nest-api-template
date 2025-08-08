import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class SeederService {
  constructor(private readonly prisma: PrismaService) {}

  /** Метод для сидера. */
  async seed() {}
}
