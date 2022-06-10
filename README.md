# Delivery-Google-Maps
Sistema Simples de delivery, com serviços do google maps api, typescript, tailwindcss, react e node

Para executar a aplicação é nescessario possuir:
 - Postgres
 - Node

Para executar a aplicação front-end:
  - Executamos: Yarn Add - Para instalar as bibliotecas que ultilzamos.
  - Executamos: Yarn Dev - Para executar a aplicação.


Para executar a aplicação backend:
  - Executamos: yarn add - Para Instalar as bibliotecas que ulitilizamos.
  - Executamos: yarn prisma migrate dev - Para executar as migrations.
  - Executamos: yarn dev - Para executar a aplicação.
  
Para a execução completa da aplicação nescessita de algumas informações em variaveis ambientes, como:
  - Key Google API
  - DATABASE URL
  - URL Backend
    

A Aplicação se encontra em produção com CI/CDs já configurados.

Frontend:
  - Servidor: Vercel
  - URL: https://delivery-google-maps.vercel.app/

 Backend:
  - Servidor: Railway
  - URL: https://delivery-google-maps-production.up.railway.app/


 O intuito desta aplicação é focar no design patterns e em ferramentas como o google maps API, então não focamos em regras de negocios.


 Proximas atualizações:
  - Buscar Endereços e apresentar diretamente do google para o usuario selecionar.
  - Atualização de pedidos
  - Autenticação de usuarios
      
      
