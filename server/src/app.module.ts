import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
