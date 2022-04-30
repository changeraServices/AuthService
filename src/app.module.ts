import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CacheModule } from './cache/cache.module';
import { QueueModule } from './queue/queue.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';


@Module({
  imports: [DatabaseModule, CacheModule, QueueModule, AuthModule,   BullModule.forRoot({
    redis: {
      host: 'localhost',
      port: 6379,
    },
  }), ConfigModule.forRoot({load: [config]})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
