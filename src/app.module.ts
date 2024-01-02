import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './Authentication/Users/infrastructure/users.module';
import { AccountModule } from './Authentication/Accounts/infracstructure/account.module';
import { CategoriesModule } from './workshop/Categories/Infrasctructure/categories.module';
import { ProductsModule } from './workshop/Products/infrasctruture/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'testing',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging:true,
    }),
    UsersModule,
    AccountModule,
    ProductsModule,
    CategoriesModule,
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
