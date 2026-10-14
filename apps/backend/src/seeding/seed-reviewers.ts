import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeedingService } from './seeding.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const seedingService = app.get(SeedingService);
    const result = await seedingService.seedReviewers();
    // eslint-disable-next-line no-console
    console.log('Seeding reviewers completed:', JSON.stringify(result, null, 2));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Seeding reviewers failed:', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

void bootstrap();
