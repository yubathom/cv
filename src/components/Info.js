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
      <h2 class='info__name'>
        ${c.name.first} ${c.name.last}
      </h2>
      <p calss='info__details'>${c.label.nacionality}, ${this.currentAge(c.birth.year, c.birth.month, c.birth.day)} ${c.label.years} | São Paulo, SP</p>
      <p class='info__tags'>${c.tags}</p>
      <p class="info__about">${c.about}</p>
      <div class="info__contact">
        <p>${c.contact.phone}</p>
        <p>${c.contact.email}</p>
        <p>
          Linkedin </br>
          <a href="${c.contact.linkedin}">${helper.removeHttps(c.contact.linkedin)}</a>
        </p>
        <p>
          Github </br>
          <a href="${c.contact.github}">${helper.removeHttps(c.contact.github)}</a>
        </p>
      </div>
    </div>
    `
  }
}

Info.refs = {}