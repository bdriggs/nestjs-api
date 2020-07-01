import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [ItemsModule, AuthzModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
