# Holydayzer
 
Holydayzer é um servidor *back-end* implementado em *node.js* de calendário de feriados!

## Utilização

Para instalar as dependências, no diretório da aplicação, rode o comando:

```
npm install
```

## Funcionamento

Para ativar o servidor basta, no diretório da aplicação, fazer no terminal:

```
node index.js
```
ou

```
npm index.js
```
Assim o servidor estará funcionando na **porta 5000**.

## Requisições

Ao todo o servidor responde a duas requisições:

* `/holidays`, em que retorna uma lista de feriados nacionais do Brasil;
* `/is-today-holiday`, em que retorna se hoje é feriado ou não, indicando qual é o respectivo feriado.