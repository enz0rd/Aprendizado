CREATE table VENDAS (
    VENDAS_ID integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    PRODUTO_ID integer FOREIGN KEY (PRODUTO_ID) REFERENCES,
    Nome_Produto varchar(255) NOT null,
    valor_venda float FOREIGN KEY (valor_venda) REFERENCES,
)

CREATE table PRODUTO_ID (
    PRODUTO_ID integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    Nome_Produto varchar(255) NOT null,
    valor_produto float NOT NULL,
    qtd_prod integer NOT NULL,
     )

CREATE table valor_venda (
    valor_venda float PRIMARY KEY AUTOINCREMENT NOT NULL,
    valor_produto float FOREIGN KEY (valor_produto) REFERENCES PRODUTO_ID (PRODUTO_ID),
    qtd integer NOT NULL,
)
