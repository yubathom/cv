import helper from './_helpers.js'

export default class Skills {
  constructor(container, content) {
    this.container = container
    this.cv = content
    helper.refGenerator(this, Skills, container)
  }

  init () {
    this.container.innerHTML = this.render()
  }

  render () {
    const c = this.cv
    return `
    <div class="block__skils">
      <h3 class='skils__name'>${c.label.skills}</h3>

      <h4 class='skils__label'>${c.label.design}</h4>
      <ul class='skills__list'>
        ${helper.listSkills(c.skills.filter(skill => skill.group === 'design'))}
      </ul>

      <h4 class='skils__label'>Frontend</h4>
      <ul class='skills__list'>
        ${helper.listSkills(c.skills.filter(skill => skill.group === 'front'))}
      </ul>

      <h4 class='skils__label'>Tooling</h4>
      <ul class='skills__list'>
        ${helper.listSkills(c.skills.filter(skill => skill.group === 'tooling'))}
      </ul>

      <h4 class='skils__label'>${c.label.devpatterns}</h4>
      <ul class='skills__list'>
        ${helper.listSkills(c.skills.filter(skill => skill.group === 'devpattern'))}
      </ul>

      <h4 class='skils__label'>${c.label.databases}</h4>
      <ul class='skills__list'>
        ${helper.listSkills(c.skills.filter(skill => skill.group === 'databases'))}
      </ul>

      <h4 class='skils__label'>Backend</h4>
      <ul class='skills__list'>
        ${helper.listSkills(c.skills.filter(skill => skill.group === 'backend'))}
      </ul>

      <h4 class='skils__label'>${c.label.infrastructure}</h4>
      <ul class='skills__list'>
        ${helper.listSkills(c.skills.filter(skill => skill.group === 'infra'))}
      </ul>

      </div>
    `;
  }
}

Skills.refs = {}