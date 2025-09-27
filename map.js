const tooltip = document.querySelector('.tooltip')
const continents = document.querySelectorAll('.continents')

continents.forEach(continent => {
    continent.addEventListener('mousemove', function(e) {
        tooltip.innerText = this.dataset.title
        tooltip.style.top = (e.y + 20) + 'px'
        tooltip.style.left = (e.x + 20) + 'px'
    })
})