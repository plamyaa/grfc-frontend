export const fakeMenu = [
  {
    name: 'Администрирование',
    children: [
      {
        name: 'Пользователи',
      },
      {
        name: 'Запросы',
        children: [
          { name: 'Аудит' },
          { name: 'История активности' },
          { name: 'Очередь' },
          { name: 'Системные задания' },
        ],
      },
      {

        name: 'Периодические операции',
        children: [
          {
            name: 'Системные задания',
          },
        ],
      },
      {
        name: 'Настройки',
        children: [
          { name: 'Аудит' },
          { name: 'Группы пользователей' },
          { name: 'Номерные серии' },
          { name: 'Объекты' },
          { name: 'Параметры' },
          { name: 'Шаблоны' },
        ],
      },
    ],
  },
];
