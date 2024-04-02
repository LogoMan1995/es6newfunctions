// 21. Добавьте соответствующий import оператор, который позволит текущему файлу использовать функции uppercaseString и lowercaseString, которые вы экспортировали на предыдущем уроке. Эти функции находятся в файле с именем string_functions.js, который находится в том же каталоге, что и текущий файл.



import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");