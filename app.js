const mondayUpper = document.getElementById('mondayUpper')
const mondayDown = document.getElementById('mondayDown')
const tuesday = document.getElementById('tuesday')

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
    // Для верхней недели
    mondayUpper.classList.add('bg-success')
    mondayDown.classList.add('opacity-50')
}
else {
    // Для нижней недели
    mondayUpper.classList.add('opacity-50')
    mondayDown.classList.add('bg-success')
}