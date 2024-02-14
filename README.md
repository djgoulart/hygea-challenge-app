
# Hygea FullStack Test - App

O desafio consiste em desenvolver um CRUD para uma entidade já existente chamada 'USER'. Além disso, é necessário criar um aplicativo mobile utilizando React Native que consuma a API, apresentando as funcionalidades de CRUD para essa entidade de USER. Na função de LIST, defina e implemente alguns filtros.

Um ponto EXTRA será a inclusão de uma funcionalidade de busca com autocompletar na lista de usuários.

## Entregáveis do Aplicativo
#### Implementar os endpoints listados abaixo:
- Implementar uma Screen para listar os uruários (GET - user/list)
- Implementar uma Screen para visualizar os dados de um usuário(GET - user/:id)
- Implementar uma Screen para o cadastro de novos usuários (POST - user/create)
- DELETE - Implementar mecanismos para exclusão de usuários (user/delete/:id)
- Implementar uma Screen para a alteração dos dados de um usuário (PUT - user/:id/edit)

## Solução do desafio

Para a solução deste desafio foi adotada uma arquitetura simples em termos de organização, mas ao mesmo tempo robusta o suficiente para garantir a qualidade e longevidade do código implementado. 

Foram utilizados alguns conceitos de gerenciamento de State Http e uma component library para agilizar no processo de construção das telas.

## Stack Utilizada
- Typescript
- Expo
- React Native
- Native Base UI
- TanStack Query + Axios
- 

## Estrutura de Pastas

## Requisitos de sistema

* NodeJS 18+
* Ambiente de desenvolvimento React Native configurado. [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

## Ambiente de produção

O aplicativo (Android) está disponível para download através do link: [https://expo.dev//accounts/djgoulart/projects/hygea-challenge/builds/f7dec94a-77e7-4198-8532-4965fb44f7df](https://expo.dev//accounts/djgoulart/projects/hygea-challenge/builds/f7dec94a-77e7-4198-8532-4965fb44f7df)

## Rodando o localmente
- instale as dependêndias do projeto ```npm install```
- para evitar problemas com pacotes nativos: ```npx expo install```
- configure o endereço da api no seu ambiente local editando o arquivo axios.ts em: ``/utils/axios.ts``
```
if (__DEV__) {
  API_URL = 'http://10.0.2.2:3333/'
}
```
- utilize o comando ```npm start``` para inicializar a aplicação no emulador. 

## Sobre a funcionalidade adicional de busca com autocomplete
A funcionalidade foi parcialmente implementada, e está funcionando como um filtro de busca de usuários, utilizando nome ou email como valor de pesquisa.

## Outras observações
- Não foram criados testes automatizados para o aplicativo. Devido ao tempo disponível para o desenvolvimento, a prioridade dos testes foi mantida na parte do backend.

- Features secundárias, mas que agregam valor na utilização do usuário como micro animações e feedback visual

- Embora os campos dos formulário possuam validação tanto no aplicativo quanto no backend, o feedback visual dessas validações foi removido do escopo por causa do tempo disponível para a realização do desafio.
