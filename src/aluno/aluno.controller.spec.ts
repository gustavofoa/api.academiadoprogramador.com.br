import { Test, TestingModule } from '@nestjs/testing';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';

describe('AlunoController', () => {
  let alunoController: AlunoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AlunoController],
      providers: [AlunoService],
    }).compile();

    alunoController = app.get<AlunoController>(AlunoController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(userController.getMe()).toBe('Hello World!');
  //   });
  // });
});
