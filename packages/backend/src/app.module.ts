import { AuthController } from '@controllers/AuthController'
import { EtcController } from '@controllers/EtcController'
import { InterestController } from '@controllers/InterestController'
import { ResourceController } from '@controllers/ResourceController'
import { UrlController } from '@controllers/UrlController'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Interest, Resource, User, Bookmark } from '@progress/orm'
import connectionOptions from '@progress/orm/ormConfig'
import { InterestRepository } from '@repositories/InterestRepository'
import { ResourceRepository } from '@repositories/ResourceRepository'
import { UsersRepository } from '@repositories/UsersRepository'
import { AuthService } from '@services/AuthService'
import { GoogleStrategy } from '@services/GoogleStrategy'
import { InterestService } from '@services/InterestService'
import { JwtAuthGuard } from '@services/JwtAuthGuard'
import { JwtStrategy } from '@services/JwtStrategy'
import { LocalStrategy } from '@services/LocalStrategy'
import { ResourceService } from '@services/ResourceService'
import { UrlService } from '@services/UrlService'
import { UsersService } from '@services/UsersService'
import { jwtConstants } from '@utils/AuthConstants'
import 'module-alias/register'
import { MorganModule } from 'nest-morgan'
import path from 'path'
import configuration from './config/configurations'
import { TransformInterceptor } from './middlwares/TransformInterceptor'
import { BookmarkController } from '@controllers/BookmarkController'
import { BookmarkService } from '@services/BookmarkService'
import { BookmarkRepository } from '@repositories/BookmarkRepository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UsersRepository,
      Interest,
      InterestRepository,
      Resource,
      ResourceRepository,
      Bookmark,
      BookmarkRepository,
    ]),
    ConfigModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    AuthController,
    BookmarkController,
    EtcController,
    InterestController,
    ResourceController,
    UrlController,
  ],
  providers: [
    AuthService,
    BookmarkService,
    UsersService,
    LocalStrategy,
    GoogleStrategy,
    InterestService,
    JwtAuthGuard,
    JwtStrategy,
    UrlService,
    ResourceService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
  exports: [AuthService],
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
