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

    let timer = new Date()
    let currentHour = timer.getHours()
    let currentMinute = timer.getMinutes()

    if(currentHour >= 8) {
        let remainH = 8 - currentHour
        let remainM = 0 - currentMinute

        hours.textContent = remainH + " часов "
        minutes.textContent = remainM + " минут до начало пары"
    }

    if(currentHour >= 9) {
        let remainH = 9 - currentHour
        let remainM = 55 - currentMinute

        hours.textContent = remainH + " часов "
        minutes.textContent = remainM + " минут до начало пары"
    }

   if(currentHour >= 11) {
        let remainH = 11 - currentHour
        let remainM = 50 - currentMinute

        hours.textContent = remainH + " часов "
        minutes.textContent = remainM + " минут до начало пары"
    }

    if(currentHour >= 13) {
        let remainH = 13 - currentHour
        let remainM = 45 - currentMinute

        hours.textContent = remainH + " часов "
        minutes.textContent = remainM + " минут до начало пары"
    }

    if(currentHour >= 15) {
        let remainH = 15 - currentHour
        let remainM = 30 - currentMinute

        hours.textContent = remainH + " часов "
        minutes.textContent = remainM + " минут до начало пары"
    }
    
}, 1000);



// Первый пример подсчёта сколько осталось до пары

// if(14 >= Number(now.getHours())) {
//     const resH = 15 - 14
//     const resM = 30 - Number(now.getMinutes())

//     console.log(resH, resM)
// }