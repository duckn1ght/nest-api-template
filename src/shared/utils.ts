/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpException, HttpStatus } from '@nestjs/common';

/** Класс с различными методами для уменьшения кода. */
export class Utils {
  /**
   * Метод для обработки HTTP ошибок.
   * @param error Перехваченная ошибка.
   */
  static errorHandler(error: Error) {
    console.error(error);
    throw new HttpException(
      error.message,
      error instanceof HttpException
        ? error.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  /**
   * Метод для проверки существования объекта и вызова исключения в случае отсутствия.
   * @param obj Проверяемый объект.
   * @param msg Сообщение для исключения.
   */
  static checkEntity(obj: object, msg: string) {
    if (!obj) throw new HttpException(msg, HttpStatus.NOT_FOUND);
  }

  /**
   * Получает список ключей (свойств) экземпляра класса.
   * @param classType Конструктор класса.
   * @returns Массив ключей экземпляра класса.
   */
  static getClassKeys<T extends object>(classType: new () => T): (keyof T)[] {
    const instance = new classType();
    return Object.getOwnPropertyNames(instance) as (keyof T)[];
  }

  /**
   * Преобразует строку даты в формате 'дд.мм.гггг' в объект Date.
   * @param dateString Строка даты в формате 'дд.мм.гггг'.
   * @returns Объект Date, соответствующий переданной строке.
   */
  static stringDateToDate(dateString: string): Date {
    const [day, month, year] = dateString.split('.').map(Number);
    return new Date(year, month - 1, day);
  }

  /**
   * Преобразует объект Date в строку формата 'дд.мм.гггг'.
   * @param date Объект Date для преобразования.
   * @returns Строка даты в формате 'дд.мм.гггг'.
   */
  static dateToString(date: Date) {
    const dateString = new Date(date);
    return `${String(dateString.getDate()).padStart(2, '0')}.${String(dateString.getMonth() + 1).padStart(2, '0')}.${dateString.getFullYear()}`;
  }
}

/** Декоратор для оборачивания функции в блок try-catch. */
export function CatchErrors() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        console.error(error);
        throw new HttpException(
          error.message,
          error instanceof HttpException
            ? error.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    };

    return descriptor;
  };
}
