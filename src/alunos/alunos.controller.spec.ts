import { Test, TestingModule } from '@nestjs/testing';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';

describe('AlunoController', () => {
  let alunoController: AlunosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AlunosController],
      providers: [AlunosService],
    }).compile();

    alunoController = app.get<AlunosController>(AlunosController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(userController.getMe()).toBe('Hello World!');
  //   });
  // });
});
