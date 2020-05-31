import { AuthController } from '@controllers/AuthController';
import { EtcController } from '@controllers/EtcController';
import { InterestController } from '@controllers/InterestController';
import { ResourceController } from '@controllers/ResourceController';
import { UrlController } from '@controllers/UrlController';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Interest, Resource, User } from '@progress/orm';
import connectionOptions from '@progress/orm/ormConfig';
import { InterestRepository } from '@repositories/InterestRepository';
import { ResourceRepository } from '@repositories/ResourceRepository';
import { UsersRepository } from '@repositories/UsersRepository';
import { AuthService } from '@services/AuthService';
import { GoogleStrategy } from '@services/GoogleStrategy';
import { InterestService } from '@services/InterestService';
import { JwtStrategy } from '@services/JwtStrategy';
import { LocalStrategy } from '@services/LocalStrategy';
import { ResourceService } from '@services/ResourceService';
import { UrlService } from '@services/UrlService';
import { UsersService } from '@services/UsersService';
import { jwtConstants } from '@utils/AuthContstants';
import 'module-alias/register';
import { MorganModule } from 'nest-morgan';
import path from 'path';
import configuration from './config/configurations';



@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UsersRepository,
      Interest,
      InterestRepository,
      Resource,
      ResourceRepository,
    ]),
    ConfigModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    ResourceController,
    AuthController,
    EtcController,
    InterestController,
    UrlController,
  ],
  providers: [
    AuthService,
    UsersService,
    LocalStrategy,
    GoogleStrategy,
    InterestService,
    JwtStrategy,
    UrlService,
    ResourceService,
  ],
})
export class AllModule {}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...(connectionOptions as TypeOrmModuleOptions),
      entities: [path.resolve('node_modules/@progress/orm/dist/entities/*.js')],
      subscribers: [path.resolve('node_modules/@progress/orm/dist/subscribers/*.js')],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MorganModule.forRoot(),
    AllModule,
  ],
})
export class AppModule {}
