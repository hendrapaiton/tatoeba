import { Controller, Get, Render } from '@nestjs/common';
import { IndexService } from '../index/index.service';

@Controller()
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  @Render('Index')
  getHello(): object {
    return this.indexService.getHello();
  }
}
