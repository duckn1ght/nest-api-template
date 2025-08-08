import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { PrismaService } from './prisma.service';

@Module({
  providers: [SeederService, PrismaService],
})
export class SeederModule {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    await this.seederService.seed();
  }
}
