import helper from './_helpers.js'

export default class Experience {
  constructor(container, cv) {
    this.container = container
    this.cv = cv
    helper.refGenerator(this, Experience, container)
  }

  init() {
    this.container.innerHTML = this.render()
  }

  listExperiences(experiences) {
    let output = ''
    experiences.forEach(experience => {
      output += `
      <div class='experience'>
        <h4 class='project__name title'>${experience.company}</h4>
        <p class='project__position tags'><em>${experience.position}</em></p>
        <p class='project__description'>${experience.description}</p>
        <p class='project__timeperiod'>${experience.timeperiod}</p>
        <p class='project__website'>
          <a href="${experience.website}">${experience.website.replace('https://', '')}</a>
        </p>
      </div>
      `
    })
    return output
  }

  render () {
    const c = this.cv
    return `
    <div class="block__experience">
      <h3 class='experience__title'>${c.label.experience}</h3>
      ${this.listExperiences(c.experience)}
    </div>
    `;
  }
}

Experience.refs = {}
