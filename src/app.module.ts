import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FridgeitemsModule } from './fridgeitems/fridgeitems.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING,
      database: process.env.MONGODB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    FridgeitemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
