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
        <h3 class='skils__name title'>${c.label.skills}</h3>
        <ul class='skills__list design'>
          ${helper.listSkills(c.skills.filter(skill => skill.group === 'design'))}
        </ul>
        <ul class='skills__list frontend'>
          ${helper.listSkills(c.skills.filter(skill => skill.group === 'front'))}
        </ul>
        <ul class='skills__list tooling'>
          ${helper.listSkills(c.skills.filter(skill => skill.group === 'tooling'))}
        </ul>
        <ul class='skills__list devpatterns'>
          ${helper.listSkills(c.skills.filter(skill => skill.group === 'devpattern'))}
        </ul>
        <ul class='skills__list databases'>
          ${helper.listSkills(c.skills.filter(skill => skill.group === 'databases'))}
        </ul>
        <ul class='skills__list backend'>
          ${helper.listSkills(c.skills.filter(skill => skill.group === 'backend'))}
        </ul>
        <ul class='skills__list infrastructure'>
          ${helper.listSkills(c.skills.filter(skill => skill.group === 'infra'))}
        </ul>
      </div>
    `;
  }
}

Skills.refs = {}