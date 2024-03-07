# goit-react-hw-03

Домашнє завдання

Створіть репозиторій з назвою goit-react-hw-03. При здачі домашньої роботи
надайте два посилання: одне на вихідні файли та інше на робочу сторінку завдання
на Vercel. Проект повинен бути створений за допомогою Vite. Для створення форм
використовуйте бібліотеку Formik. Під час запуску коду завдання в консолі не
повинно бути помилок або попереджень. Кожен компонент повинен мати власний файл
у папці src/components. JS-код має бути чистим і зрозумілим, використовуйте
Prettier. Стилізація повинна бути виконана за допомогою CSS-модулів.

Книга контактів

Напиши застосунок для зберігання контактів телефонної книги. Застосунок повинен
складатися з форми, списку контактів та поля пошуку для фільтрації списку
контактів. Подивіться демо-відео роботи застосунку.
https://www.youtube.com/watch?v=ZZCYEl2Yc7U

Компоненти

У цьому завданні інтерфейс вже розділений на компоненти. Твоя задача - обдумати
стан і пропси та перенести це в код. Частини інтерфейсу, які входять в
компонент, відзначені рамкою відповідного кольору.
https://www.edu.goit.global/uk/learn/12454883/22355212/22361201/homework

Треба виділити наступні компоненти: кореневий компонент, форма додавання
контактів, список контактів, елемент списку контактів та фільтр пошуку.

Як бачиш, всі компоненти рендеряться всередині компонента App. Його розмітка
виглядатиме так, плюс пропси та інший код.

<div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>

На цей раз ми будемо давати тобі менше підказок, ніж у минулому домашньому
завданні. Це зроблено спеціально, щоб ти поступово звик до розробки компонентів,
їх пропсів і логіки додатка.

Крок 1 - Список контактів

У стані компонента App повинен бути масив контактів. На етапі розробки буде
зручно жорстко закодувати деякі дані в стані. Це уникне необхідності ручного
введення даних у інтерфейсі для тестування нового функціоналу. Наприклад,
використай цей масив контактів для початкового значення стану.

[ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'}, {id: 'id-2', name:
'Hermione Kline', number: '443-89-12'}, {id: 'id-3', name: 'Eden Clements',
number: '645-17-79'}, {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
] Створіть компоненти ContactList та Contact та використовуйте їх для
відображення списку контактів. Передайте необхідні значення через пропси.

Після цього кроку інтерфейс застосунку буде виглядати наступним чином -
заголовок сторінки та список контактів.

Крок 2 - Пошук за ім'ям

Додайте поле пошуку SearchBar, яке можна використовувати для фільтрації списку
контактів за ім'ям.

Поле пошуку – це інпут без форми, значення якого записується у стан
(контрольований елемент). Логіка фільтрації повинна бути нечутливою до регістру.

Стан фільтру слід зберігати в компоненті App і передавати потрібні значення як
пропси компоненту SearchBox. Тоді фільтрація масиву контактів буде виконуватися
в компоненті App, а її результат - масив відфільтрованих контактів - передавати
пропсом компоненту ContactList.

Після цього кроку при вводі тексту в поле пошуку, список контактів повинен
оновлюватися, щоб відобразити лише підходящі контакти.
https://www.youtube.com/watch?v=DtzimoNHUzQ

Крок 3 - Додавання контактів

На цьому етапі реалізуй додавання контакту до списку контактів через форму
ContactForm. Кожен контакт повинен бути об'єктом з властивостями name, number та
id, тобто таким самим, як в тестових даних, які зараз знаходяться у тебе в
стані.

Для генерації ідентифікаторів використовуй будь-який відповідний пакет,
наприклад nanoid. У майбутньому цим буде займатися база даних, а поки що додаємо
ідентифікатор об'єкта самостійно, наприклад, під час сабміту форми.

Форму обов'язково створи за допомогою бібліотеки Formik. Додай валідацію полів
форми бібліотекою Yup та виведи повідомлення про помилки:

поля повинні бути обов'язковими для заповнення мінімальна кількість символів - 3
максимальна кількість символів - 50 Після завершення цього кроку застосунок
повинен виглядати приблизно так.
https://www.youtube.com/watch?v=GDIcmgB0QaE&t=1s

Крок 4 - Видалення контактів

Розшир функціонал застосунку, дозволяючи користувачу видаляти раніше збережені
контакти кліком по кнопці Delete в карточці контакта.
https://www.youtube.com/watch?v=oFmrtzhgoqk

Крок 5 - Збереження контактів

Застосунок повинен зберігати масив контактів між оновленням сторінки в
локальному сховищі. Використовуй ефекти.

Під час додавання та видалення контакту контакти зберігаються у локальне
сховище. Під час завантаження застосунку контакти, якщо такі є, зчитуються з
локального сховища і записуються у стан.
https://www.youtube.com/watch?v=TgAc8ZtufZ8
