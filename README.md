<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Шаблон для проектов на NestJS</p>
    <p align="center">

## Описание

**Шаблон для создания API сервера в проектах**

Особенности шаблона:

- PrismaORM с PostgreSQL
- Redis для кеширования

Структура папкок:

- `src` - весь исходный код проекта:
  - `database` - все файлы связанные с базой данных и PrismaORM: главный prisma файл, модели, сервис, миграции и т.д.
  - `features` - все модули с фичами проекта.
  - `shared` - универсальные файлы, которые могут использоваться в нескольких модулях фичей. Например: утилиты, общие константы и типы.
- `public` - публичные файлы проекта (изображения, файлы, документы).
- `test` - тесты проекта.
- `prisma-client` - клиент для работы PrismaORM.

## Начало работы с проектом

```bash
# Обновление пакетов
$ yarn install

# Начальная миграция и создание клиента для PrismaORM
$ yarn prisma migrate:dev
```

## Запуск проекта

```bash
# Запуск в режиме разработки без hot restart
$ yarn run start

# Запуск в режиме разработки с hot restart
$ yarn run start:dev

# Запуск в режиме продашкена
$ yarn run start:prod
```

<!-- ## Запуск тестов

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
``` -->
