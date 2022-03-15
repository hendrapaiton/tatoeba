import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
  getHello(): object {
    return { pesan: 'Halu Dunia!' };
  }
}
