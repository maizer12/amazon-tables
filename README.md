Архитектура:

common: UI-библиотека, созданная для стилизации проекта.
components: Более сложные UI-компоненты без серьезной логики.
layout: Компонент высшего порядка для обертывания остальных компонентов.
module: Основные компоненты, управляющие всем приложением, обладающие бизнес-логикой и собственным хранилищем (стор).
server: Фейковые данные для сервера.
hooks: Часто используемые хуки.
store: Менеджер состояния + слайсы с глобальными данными.
\_config: Замена .env.
Для стилизации используются SCSS и CSS модули. Общие стили вынесены в папку assets.

Функционал:

Пагинация: Работает на стороне фронтенда, поскольку сервер не возвращает количество элементов.
Сортировка: Работает на стороне сервера, каждый модуль может принимать свои данные для сортировки.
Переключение (Тем и Языка): Реализовано через глобальный слайс с возможностью сохранения в локальном хранилище.
Поиск: Для оптимизации используется debounce. Есть кнопка очистки, появляющаяся при наличии данных в инпуте.
Связанность таблиц: Каждый участник связан с каждой таблицей через специальные идентификаторы, обеспечивающие взаимосвязь.

Технологии:

React
TypeScript
Redux
Vita
Classnames
Axios
SCSS
Debounce
Весь REST API функционирует на сервисе mockapi.

---

UE:

Architecture:

common: A UI library designed to stylize a project.
components: More complex UI components without much logic.
layout: A higher-order component to wrap the other components.
module: The main components that control the entire application, with business logic and their own storage (stor).
server: Fake data for the server.
hooks: Commonly used hooks.
store: State manager + slides with global data.
\{\_config: A replacement for .env.
SCSS and CSS modules are used for styling. Common styles are placed in the assets folder.

Functionality:

Pagination: Works on the frontend side, since the server does not return the number of items.
Sorting: Works on the server side, each module can accept its own sorting data.
Switching (Themes and Language): Implemented via a global slice with the ability to save to local storage.
Search: Debounce is used for optimization. There is a cleanup button that appears when there is data in the input.
Table connectivity: Each member is linked to each table through special identifiers that provide interconnectivity.

Technologies:

React
TypeScript
Redux
Vita
Classnames
Axios
SCSS
Debounce
The entire REST API functions on the mockapi service.
