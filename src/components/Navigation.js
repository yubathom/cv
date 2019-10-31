import helper from './_mixins.js'

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
    const navitems = this.sections.map(section => {
      const sectionClass = Object.keys(section)[0]
      const sectionValue = Object.values(section)[0]
      return `<li class='nav__item nav__item--${sectionClass}'>${sectionValue}</li>`
    })
    return navitems.join('')
  }
}

Navigation.refs = {}