const input = document.querySelector('input')
const paragraph = document.querySelector('p')

input.addEventListener('keyup', () => {
  const textToSearch = input.value
  const regularExp = new RegExp(textToSearch, 'gi')
  paragraph.innerHTML = paragraph.innerText.replace(regularExp, match => {
    return `<span class='highlight'>${match}</span>`
  })
})
