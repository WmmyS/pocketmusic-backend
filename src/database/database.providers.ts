import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'ec2-54-165-184-219.compute-1.amazonaws.com',
        port: 5432,
        username: 'pshvmiccbqsajb',
        password:
          '9b73bd831ee029e0e9c7983667ddfd81e585b9f35e28411770f2358dd8e37614',
        database: 'd3u40apv76k4',
        ssl: {
          rejectUnauthorized: false,
        },
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // This for development
      });

      return dataSource.initialize();
    },
  },
];
