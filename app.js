// Дни недель
const mondayUpper = document.getElementById('mondayUpper')
const mondayDown = document.getElementById('mondayDown')

const tuesday = document.getElementById('tuesday')

const wednesdayUpper = document.getElementById('wednesdayUpper')
const wednesdayDown = document.getElementById('wednesdayDown')

const thursday = document.getElementById('thursday')

const fridayUpper = document.getElementById('fridayUpper')
const fridayDown = document.getElementById('fridayDown')

// Для изменения текста
const week = document.getElementById('week')
// const para = document.getElementById('para')
const text = document.getElementById('text')

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
    
    wednesdayUpper.classList.add('bg-success')
    wednesdayDown.classList.add('opacity-50')

    fridayUpper.classList.add('bg-success')
    fridayDown.classList.add('opacity-50')
}
else {

    mondayUpper.classList.add('opacity-50')
    mondayDown.classList.add('bg-success')
    
    wednesdayUpper.classList.add('opacity-50')
    wednesdayDown.classList.add('bg-success')

    fridayUpper.classList.add('opacity-50')
    fridayDown.classList.add('bg-success')
}

// Счечик минут и часов до начало пары
setInterval(() => {

    let timetable = new Date()
    let currentHour = timetable.getHours()
    let currentMinute = timetable.getMinutes()

    let remainH
    let remainM
    let timeFound = true

    if(currentHour < 8){
        remainH = 8 - currentHour
        remainM = 0 - currentMinute
        text.textContent = 'До начала следующей пары:'

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else if(currentHour < 9 || (currentHour === 9 && currentMinute === 55)) {
        remainH = 9 - currentHour
        remainM = 55 - currentMinute
        text.textContent = 'До начала следующей пары:'

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else if(currentHour < 11 || (currentHour === 11 && currentMinute === 50)) {
        remainH = 11 - currentHour
        remainM = 50 - currentMinute
        text.textContent = 'До начала следующей пары:'

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else if(currentHour < 13 || (currentHour === 13 && currentMinute === 45)) {
        remainH = 13 - currentHour
        remainM = 45 - currentMinute
        text.textContent = 'До начала следующей пары:'

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else if(currentHour < 15 || (currentHour === 15 && currentMinute === 30)) {
        remainH = 15 - currentHour
        remainM = 30 - currentMinute
        text.textContent = 'До начала следующей пары:'

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else {
        hours.textContent = "Сегодня пар больше нет"
        minutes.textContent = "🥳 Отдыхайте!"
        timeFound = false
    }

    // чтобы всё корректно отображалось
    if(timeFound) {
        if(remainM < 0) {
            remainH = remainH - 1
            remainM = remainM + 60
        }
        
        else if (remainM >= 60) {
            remainH = remainH + Math.floor(remainM / 60)
            remainM = remainM % 60
        }

        hours.textContent = remainH
        minutes.textContent = remainM
    }
}, 1000)

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
        tuesday.classList.replace('bg-success', 'bg-danger')
        tuesday.classList.remove('opacity-50')
    }
    else {
        tuesday.classList.replace('bg-success', 'bg-danger')
        tuesday.classList.remove('opacity-50')
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
        thursday.classList.replace('bg-success', 'bg-danger')
        thursday.classList.remove('opacity-50')
    }
    else {
        thursday.classList.replace('bg-success', 'bg-danger')
        thursday.classList.remove('opacity-50')
    }
}

else if(valueWeek === fridayW) {
    if(isUpper) {
        fridayUpper.classList.replace('bg-success', 'bg-danger')
        fridayUpper.classList.remove('opacity-50')
    }
    else {
        fridayDown.classList.replace('bg-success', 'bg-danger')
        fridayDown.classList.remove('opacity-50')
    }
}

else {
    console.log('Сегодня суббота или воскресенье')
}

}

changeWeek()