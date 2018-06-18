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

DELIMITER $$

CREATE PROCEDURE selecionarOperadoras()
BEGIN
	SELECT * 
    FROM OPERADORA; 
END $$
DELIMITER ;


DELIMITER $$

CREATE PROCEDURE selecionarTelefones()
BEGIN
	SELECT t.tel_codigo,
		   t.tel_descricao,
           t.tel_modelo,
           t.tel_cor,
           t.tel_chips,
           t.ope_codigo,
           o.ope_fantasia
	FROM TELEFONE AS t
		INNER JOIN OPERADORA AS o ON o.ope_codigo = t.ope_codigo;
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE inserirOperadora(
	 IN vope_nome VARCHAR(20), 
     IN vope_fantasia VARCHAR(10), 
     IN vope_prefixo INT, 
     IN vope_cidade VARCHAR(20))
BEGIN
	INSERT INTO OPERADORA(ope_nome,ope_fantasia,ope_prefixo,ope_cidade)
		VALUES(vope_nome,vope_fantasia,vope_prefixo,vope_cidade);
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE deletarOperadora(IN vope_codigo INT)
BEGIN
	DELETE FROM OPERADORA
    WHERE ope_codigo = vope_codigo;
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE inserirTelefone(
IN vtel_descricao VARCHAR(30),
IN vtel_modelo VARCHAR(10),
IN vtel_cor VARCHAR(10),
IN vtel_chips INT,
IN vope_codigo INT )
BEGIN
	INSERT INTO TELEFONE(tel_descricao,tel_modelo,tel_cor,tel_chips,ope_codigo)
		VALUES(vtel_descricao,vtel_modelo,vtel_cor,vtel_chips,vope_codigo);
END $$ 

DELIMITER ;