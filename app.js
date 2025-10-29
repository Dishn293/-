// Дни недель
const mondayUpper = document.getElementById('mondayUpper')
const mondayDown = document.getElementById('mondayDown')

const tuesdayUpper = document.getElementById('tuesdayUpper')
const tuesdayDown = document.getElementById('tuesdayDown')

const wednesdayUpper = document.getElementById('wednesdayUpper')
const wednesdayDown = document.getElementById('wednesdayDown')

const thursdayUpper = document.getElementById('thursdayUpper')
const thursdayDown = document.getElementById('thursdayDown')

const friday = document.getElementById('friday')

// Для изменения текста
const week = document.getElementById('week')
// const para = document.getElementById('para')
const text = document.getElementById('text')

const textH = document.getElementById('textH')
const textM = document.getElementById('textM')

const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')

// Числа дней недель
const mondayW = 1
const tuesdayW = 2
const wednesdayW = 3
const thursdayW = 4
const fridayW = 5

// Дата
const now = new Date()
const valueWeek = now.getDay()
let isUpper = true

// Для определения верхей и нижней недели
function getWeek() {
    const startDate = new Date('2025-09-01');
    const currentDate = new Date();
    
    const diffTime = currentDate - startDate;

    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    
    if(diffWeeks % 2 === 0) {
        return isUpper = true
    }
    else{
        return isUpper = false
    }
}

// Выводит текущий день недели и какая текущая неделя(верхняя или нижняя)
function ShowWeek() {
    switch(valueWeek) {
        case 1: if(getWeek()) {
            week.textContent = 'Сегодня понедельник🔺'
        }
        else {
            week.textContent = 'Сегодня понедельник🔻'
        }
        break

        case 2:if(getWeek()) {
            week.textContent = 'Сегодня вторник🔺'
        }
        else {
            week.textContent = 'Сегодня вторник🔻'
        }
        break

        case 3:if(getWeek()) {
            week.textContent = 'Сегодня среда🔺'
        }
        else {
            week.textContent = 'Сегодня среда🔻'
        }
        break

        case 4:if(getWeek()) {
            week.textContent = 'Сегодня четверг🔺'
        }
        else {
            week.textContent = 'Сегодня четверг🔻'
        }
        break

        case 5:if(getWeek()) {
            week.textContent = 'Сегодня пятница🔺'
        }
        else {
            week.textContent = 'Сегодня пятница🔻'
        }
        break

        case 6:if(getWeek()) {
            week.textContent = 'Сегодня суббота🔺'
        }
        else {
            week.textContent = 'Сегодня суббота🔻'
        }
        break
        
        case 0: if(getWeek()) {
            week.textContent = 'Сегодня воскресенье🔺'
        }
        else {
            week.textContent = 'Сегодня воскресенье🔻'
        }
        break
    }
}

ShowWeek()

getWeek(now)

tuesday.classList.add('bg-success')
thursday.classList.add('bg-success')

// Делает только ту неделю зеленой, которая сейчас(нижняя или верхняя)
if(isUpper === true) {

    mondayUpper.classList.add('bg-success')
    mondayDown.classList.add('opacity-50')

    tuesdayUpper.classList.add('bg-success')
    tuesdayDown.classList.add('opacity-50')
    
    wednesdayUpper.classList.add('bg-success')
    wednesdayDown.classList.add('opacity-50')

    thursdayUpper.classList.add('bg-success')
    thursdayDown.classList.add('opacity-50')

}
else {

    mondayUpper.classList.add('opacity-50')
    mondayDown.classList.add('bg-success')

    tuesdayUpper.classList.add('opacity-50')
    tuesdayDown.classList.add('bg-success')
    
    wednesdayUpper.classList.add('opacity-50')
    wednesdayDown.classList.add('bg-success')

    thursdayUpper.classList.add('opacity-50')
    thursdayDown.classList.add('bg-success')
}

// Счечик минут и часов до начало пары
// Определяем расписание (в минутах от полуночи)
const schedule = [
    8 * 60,      // 08:00
    9 * 60 + 55, // 09:55
    11 * 60 + 50, // 11:50
    13 * 60 + 45, // 13:45
    15 * 60 + 30  // 15:30
];

setInterval(() => {
    let now = new Date();
    // Текущее время в минутах от полуночи
    let currentTotalMinutes = now.getHours() * 60 + now.getMinutes();
    
    let nextPairTime = -1;

    // Находим ближайшее время начала пары, которое еще не прошло
    for (const time of schedule) {
        if (time > currentTotalMinutes) {
            nextPairTime = time;
            break; 
        }
    }

    if (nextPairTime !== -1) {
        // Расчет оставшегося времени
        let remainingMinutes = nextPairTime - currentTotalMinutes;
        
        let remainH = Math.floor(remainingMinutes / 60);
        let remainM = remainingMinutes % 60;

        // Обновление DOM
        text.textContent = 'До начала следующей пары:';
        hours.textContent = remainH;
        minutes.textContent = remainM;
        // Убедитесь, что textH и textM не удалены, если они используются для подписей "ч" и "мин"
        // Если они были удалены в 'else', их нужно вернуть:
        if (typeof textH !== 'undefined' && textH.style.display === 'none') textH.style.display = '';
        if (typeof textM !== 'undefined' && textM.style.display === 'none') textM.style.display = '';

    } else {
        // Пар сегодня больше нет
        hours.textContent = "Сегодня пар больше нет";
        minutes.textContent = "🥳 Отдыхайте!";
        // Предполагается, что textH и textM - это элементы для подписей "час" и "минута"
        if (typeof textH !== 'undefined') textH.style.display = 'none'; // Скрываем подписи
        if (typeof textM !== 'undefined') textM.style.display = 'none'; // Скрываем подписи
    }
}, 1000);

// Эта функция меняет цвета на какой-либо день недели на красный, чтобы показать текущий
function changeWeek() {
if(valueWeek === mondayW) {
    if(isUpper) {
        mondayUpper.classList.replace('bg-success', 'bg-danger')
        mondayUpper.classList.remove('opacity-50')
    }
    else {
        mondayDown.classList.replace('bg-success', 'bg-danger')
        mondayDown.classList.remove('opacity-50')
    }
}

else if(valueWeek === tuesdayW) {
    if(isUpper) {
        tuesdayUpper.classList.replace('bg-success', 'bg-danger')
        tuesdayUpper.classList.remove('opacity-50')
    }
    else {
        tuesdayDown.classList.replace('bg-success', 'bg-danger')
        tuesdayDown.classList.remove('opacity-50')
    }
}

else if(valueWeek === wednesdayW) {
    if(isUpper) {
        wednesdayUpper.classList.replace('bg-success', 'bg-danger')
        wednesdayUpper.classList.remove('opacity-50')
    }
    else {
        wednesdayDown.classList.replace('bg-success', 'bg-danger')
        wednesdayDown.classList.remove('opacity-50')
    }
}

else if(valueWeek === thursdayW) {
    if(isUpper) {
        thursdayUpper.classList.replace('bg-success', 'bg-danger')
        thursdayUpper.classList.remove('opacity-50')
    }
    else {
        thursdayDown.classList.replace('bg-success', 'bg-danger')
        thursdayDown.classList.remove('opacity-50')
    }
}

else if(valueWeek === fridayW) {
    if(isUpper) {
        friday.classList.replace('bg-success', 'bg-danger')
        friday.classList.remove('opacity-50')
    }
    else {
        friday.classList.replace('bg-success', 'bg-danger')
        friday.classList.remove('opacity-50')
    }
}

else {
    console.log('Сегодня суббота или воскресенье')
}

}

changeWeek()