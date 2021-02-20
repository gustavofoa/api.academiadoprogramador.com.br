import { Test, TestingModule } from '@nestjs/testing';
import { FaixasController } from './faixas.controller';
import { FaixasService } from './faixas.service';

describe('FaixaController', () => {
  let faixaController: FaixasController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FaixasController],
      providers: [FaixasService],
    }).compile();

    faixaController = app.get<FaixasController>(FaixasController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(userController.getMe()).toBe('Hello World!');
  //   });
  // });
});
