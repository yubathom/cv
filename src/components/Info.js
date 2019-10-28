import helper from './_helpers.js'

export default class Info {
  constructor(container, content) {
    this.container = container
    this.cv = content
    helper.refGenerator(this, Info, container)
  }

  init () {
    this.container.innerHTML = this.render()
  }

  currentAge (birthYear, birthMonth, birthDate) {
    const now = new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDate()
 
    if (month > birthMonth) return now - birthYear
    else if (month === birthMonth && day >= birthDate) return now - birthYear
    else return now - birthYear -1
  }


  render () {
    const c = this.cv
    return `
    <div class='block__info'>
      <h3 class='info__name title'>${c.name.first} ${c.name.last}</h3>
      <h4 class='info__details'>${c.label.nacionality}, ${this.currentAge(c.birth.year, c.birth.month, c.birth.day)} ${c.label.years} | São Paulo, SP</h4>
      <p class='info__tags tags'><em>${c.tags}</em></p>
      <p class="info__about">${c.about}</p>
      <div class="info__contact">
        <p>${c.contact.phone}<br>
        ${c.contact.email}
        </p>
        <p>
          linkedin <a href="${c.contact.linkedin}">${helper.removeHttps(c.contact.linkedin)}</a><br>
          github <a href="${c.contact.github}">${helper.removeHttps(c.contact.github)}</a>
        </p>
      </div>
    </div>
    `
  }
}

Info.refs = {}