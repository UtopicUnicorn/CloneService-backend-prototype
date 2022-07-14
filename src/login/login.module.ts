import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { LoginEntity } from './entities/login.entity';

@Module({
  providers: [LoginService],
  controllers: [LoginController],
  imports: [
    MikroOrmModule.forFeature({
      entities: [LoginEntity],
    }),
  ],
})
export class LoginModule {}
