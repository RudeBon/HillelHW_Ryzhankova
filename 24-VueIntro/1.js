// 1) Создать приложение  TaskManager. У нас есть два списка дел. 
// В конце каждого списка есть кнопка `transfer`. При нажатии на кнопку - последний єлемент списка переносится в начало другого списка

const vue = new Vue(
    {
        el: '#app',
        data: {
            transfer(arrayFrom, arrayDestination) {
                if (arrayFrom.length > 0){
                    arrayDestination.unshift(arrayFrom.pop());
                };
            },
            toDoArray : ["Посетить лекцию","Задать вопросы","Получить домашку", "Изучить материалы", "Выполнить задание", "Отдохнуть после проделанной работы"],
            doneArray : [], 
        }
    }
);