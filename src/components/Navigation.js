import helper from './_helpers.js'

export default class Navigation {
  constructor(container, sections) {
    this.container = container
    this.sections = sections
    helper.refGenerator(this, Navigation, container)
  }

  init () {
    this.container.innerHTML = this.render()
  }

  render () {
    let output = ''
    let isFirst = true
    this.sections.forEach(section => {
      const sectionClass = Object.keys(section)[0]
      const sectionValue = Object.values(section)[0]
      output += `<li class='nav__item nav__item--${sectionClass}'>${sectionValue}</li>`
    })
    return output
  }
}

Navigation.refs = {}