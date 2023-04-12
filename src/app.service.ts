import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): void {
    return console.log(process.env.DB_PORT);
  }

  saveUserData(): void {
    return;
  }
}
