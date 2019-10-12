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

  currentAge (birthYear) {
    const now = new Date().getFullYear()
    return now - birthYear
  }

  render () {
    const c = this.cv
    return `
    <div class='block__info'>
      <h2 class='info__name'>
        ${c.name.first} ${c.name.last}
      </h2>
      <p info__details>${c.label.nacionality}, ${this.currentAge(c.birth.year)} ${c.label.years} | São Paulo, SP</p>
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