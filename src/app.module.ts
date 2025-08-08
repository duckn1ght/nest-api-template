import { PrismaService } from './database/service/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './features/users/users.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
