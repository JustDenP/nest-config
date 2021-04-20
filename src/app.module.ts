import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';
import { TypeOrmConfig } from './config/config.interface';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        // This not work
        const config = configService.get<TypeOrmConfig>('typeorm');
        // Works only with direct env call
        const works = configService.get<string>('DB_HOST');

        console.log(configService, config, works);

        return {
          // For some reason, there will be ts error, if we put type: config.type
          type: 'postgres',
          host: config.host,
          port: +config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          synchronize: config.synchronize,
          logging: config.logging,
          entities: config.entities,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
