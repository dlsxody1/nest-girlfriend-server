import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}

  private port = this.configService.get<number>('DB_PORT');
  private username = this.configService.get<string>('DB_USERNAME');
  private password = this.configService.get<string>('DB_PASSWORD');
  private database = this.configService.get<string>('DB_DATABASE');
}
