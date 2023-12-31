# sf

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Git Flow

Как только начинается работа – необходимо создать ветку для изменений. Переключаемся на главную ветку:

```sh
git checkout main
```

Эта команда переключит тебя на ветку main. Далее необходимо обновить эту ветку до актуального состояния, чтобы изменения в удаленном репозитории были и у тебя локально. Для этого делаем так:

```sh
git pull origin main
```

Далее необходим создать отдельную ветку для изменения. Например, верстаешь ты первый блок или что-то анимируешь – необходимо сперва отпочковаться в отдельную ветку, в которой ты уже будешь все химичить. Для этого находясь на main ветке пишем:

```sh
git checkout -b my-new-branch
```

Ура, пишем код!

После того, как был написан код, который необходимо залить в репозиторий, сперва нужно проверить, какие файлы изменятся/добавятся/удалятся в репозитории после коммита. Для этого нужно прописать в командной строке следующее:

```sh
git status
```

На выходе получим список изменений (это изменения, которые отличаются от первоначального состояния ветки). Теперь необходимо все изменения зафиксировать. Если необходимо добавить все измененные файлы – рекомендую перейти в корень проекта и одной командой добавить все файлы:

```sh
git add .
```

Можно, конечно, добавлять изменения по файлам, копируя их путь:

```sh
git add src/assets/main.scss
```

Далее лучше всего проверить, все ли файлы добавились при помощи команды git status. Если все ок – двигаемся дальше, если нет – додобавляем изменения.

Далее необходимо создать коммит:

```sh
git commit -m "СООБЩЕНИЕ КОММИТА"
```

Настоятельно прошу писать достаточно понятное сообщение коммита (не больше 70 символов). Пишем, что было сделано или какой блок добавлен.

Далее нужно запушить это дело в удаленным репозиторий. Для этого делаем так:

```sh
git push origin my-new-branch
```

Поздравляю, твоя ветка лежит в репозитории Гитхаба

Теперь скопируй ссылку на Гитхаб, вставь в браузере (или открой прямо из терминала), создать Пул Реквест и отправь ссылку Степану, чтобы он проверил его и запушил в основную ветку.

