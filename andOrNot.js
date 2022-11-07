alert("Hello");
const weekDay = prompt('Какой сегодня день недели? \nпонедельник - 1\nвторник - 2\nсреда - 3\nчетверг - 4\nпятница - 5\nсуббота - 6\nвоскресенье - 7 ', '?');

const currentHour = prompt('Который час? (0-23) ', '?');

const currentMinute = prompt('Сколько минут? (0-60) ', '?');

if (weekDay === '1' || weekDay === '3' || weekDay === '5')  {
    alert('Да, сегодня планируется занятие');
    if (currentHour+'.'+currentMinute >= '21.30')
    alert('Сегодняшнее занятие прошло');
    else if (('19.00' <= currentHour+'.'+currentMinute) && (currentHour+'.'+currentMinute < '21.30'))
    alert('Занятие идет сейчас !');
    else alert ('Занятие скоро будет');
} else if (weekDay === '2' || weekDay === '4' || weekDay === '7')
    alert('Завтра будет занятие');
    else alert ('сегодня и завтра занятий не будет');
