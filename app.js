const mondayUpper = document.getElementById('mondayUpper')
const mondayDown = document.getElementById('mondayDown')

const tuesday = document.getElementById('tuesday')

const wednesdayUpper = document.getElementById('wednesdayUpper')
const wednesdayDown = document.getElementById('wednesdayDown')

const week = document.getElementById('week')

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

if(isUpper === true) {

    mondayUpper.classList.add('bg-success')
    mondayDown.classList.add('opacity-50')
    
    wednesdayUpper.classList.add('bg-success')
    wednesdayDown.classList.add('opacity-50')
}
else {

    mondayUpper.classList.add('opacity-50')
    mondayDown.classList.add('bg-success')
    
    wednesdayUpper.classList.add('opacity-50')
    wednesdayDown.classList.add('bg-success')
}