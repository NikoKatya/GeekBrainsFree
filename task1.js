
/****************************************************************
*                         Задание 1 		                    *
*                         Палиндром                             *
*       Написать функцию, возвращающую YES, если входная        *
*  строка является палиндромом и NO в противном случае.         *
*На вход подается строка ASCII символов длины n. 1 <= n <= 10000*
****************************************************************/

/*Принимаеи на вход строку
В связи с неточностью задания, собираем строку из всех параметров*/
var teststr = process.argv.slice(2).join('');

/* Для удобства переводим строку в нижний регистр и удалем все символы кроме цифр
и букв*/
teststr = teststr.toLowerCase().replace(/[^a-z0-9а-я]/g,'');

/*Переворачиваем строку*/
var reverseString = teststr.split('').reverse().join('');

/*Если строки равны, то отвечаем YES
 Иначе отвечаем NO*/
if (teststr == reverseString)
	{
		process.stdout.write("YES")
	}
else 
	{
		process.stdout.write("NO")
	}