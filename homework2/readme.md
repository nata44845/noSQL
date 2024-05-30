# Урок 3. Введение Redis

## Задание 1

Напишите последовательность команд для Redis:
Создайте ключ index со значением “index precalculated content”.
Проверьте, есть ли ключ index в БД.
Узнайте, сколько ещё времени будет существовать ключ index.
Отмените запланированное удаление ключа index.

```
set index "index precalculated content"
exists index
ttl index
persist index
```


## Задание 2

Напишите последовательность команд для Redis:
Создайте в Redis структуру данных с ключом ratings для хранения следующих значений рейтингов технологий: mysql — 10, postgresql — 20, mongodb — 30, redis — 40.
По этому же ключу увеличьте значение рейтинга mysql на 15.
Удалите из структуры элемент с максимальным значением.
Выведите место в рейтинге для mysql.

```
zadd ratings 10 mysql 20 postgresql 30 mongodb 40 redis
zincrby ratings 15 mysql
zrevrange ratings 0 0

```


## Задание 3

Напишите две команды для СУБД Redis:
Подпишитесь на все события, опубликованные на каналах, начинающихся с events.
Опубликуйте сообщение на канале events101 с текстом “Hello there”.

```
psubscribe events*

publish events101 "Hello there"
```

## Задание 4

Сохраните в Redis функцию, которая принимает ключ и значение и сохраняет под указанным ключом квадратный корень от значения.

```
script load "redis.call('set', 'sqr:'..KEYS[1],KEYS[1]*KEYS[1])"
"666736af8f339831dfdbbb14c1dfa614a2f5b2b4"

 evalsha "666736af8f339831dfdbbb14c1dfa614a2f5b2b4" 1 3

 get sqr:3
 "9"

evalsha "666736af8f339831dfdbbb14c1dfa614a2f5b2b4" 1 4
get sqr:4
"16"
```