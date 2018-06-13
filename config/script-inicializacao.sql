--Criando o banco e populando as tabelas
CREATE DATABASE TELEFONIA;
USE TELEFONIA;
CREATE TABLE OPERADORA(
	ope_codigo  integer primary key auto_increment,
    ope_nome varchar(20),
    ope_fantasia varchar(10),
    ope_prefixo integer,
    ope_cidade varchar(20)
);
CREATE TABLE TELEFONE(
	tel_codigo integer primary key auto_increment,
    tel_descricao varchar(30),
    tel_modelo varchar(10),
    tel_cor varchar(10),
    tel_chips  integer,
    ope_codigo integer,
    foreign key(ope_codigo) references OPERADORA(ope_codigo) 
);
INSERT INTO OPERADORA(ope_nome,ope_fantasia,ope_prefixo,ope_cidade)
	VALUES('Claro LTDA','Claro',16,'Franca'),
    ('VIVO LTDA','VIVO',61,'Brasilia'),
    ('TIM LTDA','TIM',31,'Ibiraci');
INSERT INTO TELEFONE(tel_descricao,tel_modelo,tel_cor,tel_chips,ope_codigo)
	VALUES('Smartphone/LG','K10','Preto',1,1),
    ('Smartphone/Samsung','J5 Prime','Branco',2,2),
    ('Smartphone/Samgung','Galaxy S7','Dourado',1,3)
