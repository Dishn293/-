const mondayUpper = document.getElementById('mondayUpper')
const mondayDown = document.getElementById('mondayDown')

const tuesday = document.getElementById('tuesday')

const wednesdayUpper = document.getElementById('wednesdayUpper')
const wednesdayDown = document.getElementById('wednesdayDown')

const thursday = document.getElementById('thursday')

const fridayUpper = document.getElementById('fridayUpper')
const fridayDown = document.getElementById('fridayDown')

const week = document.getElementById('week')
const para = document.getElementById('para')

const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')

const now = new Date()

let isUpper = true

// заметил интересный баг, когда часто обновляешь не доконца прогруженную страницу, то
// датчик недель ломается и показывается ложная неделя, но легко исправляется той же перезагрузкой страницы
function getWeek(date) {
    if (now%7 === 0) {
        week.textContent = 'Текущая неделя: верхняя'
        return isUpper = true
    }
    
    else {
        week.textContent = 'Текущая неделя: нижняя'
        return isUpper = false
    }
}

getWeek(now)

tuesday.classList.add('bg-success')
thursday.classList.add('bg-success')


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

// Счетчик часов и минут до начала пары
// Тщательно проверить этот участок кода, так как возможны баги

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

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else if(currentHour < 9 || (currentHour === 9 && currentMinute === 55)) {
        remainH = 9 - currentHour
        remainM = 55 - currentMinute

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else if(currentHour < 11 || (currentHour === 11 && currentMinute === 50)) {
        remainH = 11 - currentHour
        remainM = 50 - currentMinute

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else if(currentHour < 13 || (currentHour === 13 && currentMinute === 45)) {
        remainH = 13 - currentHour
        remainM = 45 - currentMinute

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else if(currentHour < 15 || (currentHour === 15 && currentMinute === 30)) {
        remainH = 15 - currentHour
        remainM = 30 - currentMinute

        hours.textContent = remainH
        minutes.textContent = remainM
    }

    else {
        hours.textContent = "Сегодня пар больше нет"
        minutes.textContent = "🥳 Отдыхайте!"
        timeFound = false
    }

    if(timeFound) {
        if(remainM < 0) {
            remainH = remainH -1
            remainM = remainM + 60
        }
        
        else if (remainM >= 60) {
            remainH = remainH + Math.floor(remainM / 60)
            remainM = remainM % 60
        }

        hours.textContent = remainH
        minutes.textContent = remainM
    }
}, 1000);