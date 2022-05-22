import * as path from 'path';
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// const env = process.env.NODE_ENV || 'dev';
const dotenv_path = path.resolve(process.cwd(), `.env`);
const result = dotenv.config({ path: dotenv_path });
if (result.error) {
  /* do nothing */
}
export const OrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  // entities: ['dist/src/modules/**/*.entity.{ts,js}'],
  // migrations: ['dist/src/migrations/*.{ts,js}'],
  entities: ['dist/src/modules/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/src/migrations/*.{ts,js}'],
  synchronize: true,
  migrationsRun: true,
  cli: {
    entitiesDir: 'src/modules/**/*.entity.{ts,js}',
    migrationsDir: 'src/migrations',
  },
  logging: true,
};

export default OrmConfig;
