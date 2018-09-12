export default text => {
  document.getElementById('text').innerHTML = text

  const charming = require('charming')
  const element = document.getElementById('text')
  charming(element, {
    tagName: 'span',
    classPrefix: 'letter'
  })

  const listText = element.children
  console.log(listText[0].innerHTML)
}
