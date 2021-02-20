
create table tiporesposta(
    id int primary key auto_increment,
    nome varchar(100)
);

create table faixa(
    ordem int primary key,
    nome varchar(100) not null unique key,
    cor varchar(20) not null unique key
);

insert into faixa(ordem, nome, cor) VALUES (1, 'Faixa Branca', '#FFF');
insert into faixa(ordem, nome, cor) VALUES (2, 'Faixa Azul', '#00F');
insert into faixa(ordem, nome, cor) VALUES (3, 'Faixa Verde', '#0F0');
insert into faixa(ordem, nome, cor) VALUES (4, 'Faixa Marrom', '#8B4513');
insert into faixa(ordem, nome, cor) VALUES (5, 'Faixa Preta', '#000');

create table aluno(
    id int primary key auto_increment,
    email varchar(255) not null unique key,
    nome varchar(255) not null,
    faixa_atual int not null,
    foreign key (faixa_atual) references faixa(ordem)
);

create table etapa (
    id int primary key auto_increment,
    ordem int not null,
    faixa int not null,
    titulo varchar(255) not null,
    instrucoes varchar(1000),
    foreign key (faixa) references faixa(ordem)
);

create table questao(
    id int primary key auto_increment,
    ordem int not null,
    titulo varchar(255) not null,
    tipo int not null,
    etapa int not null,
    foreign key (tipo) references tiporesposta(id),
    foreign key (etapa) references etapa(id)
);

create table resposta(
    aluno int not null,
    questao int not null,
    resposta varchar(1000),
    foreign key (aluno) references aluno(id),
    foreign key (questao) references questao(id),
    primary key (aluno, questao)
);


