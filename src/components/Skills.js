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
    return `
    <div class="block__skils">
        <h3 class='skils__name title'>${this.cv.label.skills}</h3>
        <ul style='border-color:${this.cv.skillgroupcollors.design}' class='skills__list design'>
          ${helper.listSkills(this.cv.skills.filter(skill => skill.group === 'design'), this.cv.skillgroupcollors)}
        </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.front}' class='skills__list frontend'>
          ${helper.listSkills(this.cv.skills.filter(skill => skill.group === 'front'), this.cv.skillgroupcollors)}
        </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.tooling}' class='skills__list tooling'>
          ${helper.listSkills(this.cv.skills.filter(skill => skill.group === 'tooling'), this.cv.skillgroupcollors)}
        </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.devpattern}' class='skills__list devpatterns'>
          ${helper.listSkills(this.cv.skills.filter(skill => skill.group === 'devpattern'), this.cv.skillgroupcollors)}
        </ul>
        <ul  style='border-color:${this.cv.skillgroupcollors.databases}' class='skills__list databases'>
          ${helper.listSkills(this.cv.skills.filter(skill => skill.group === 'databases'), this.cv.skillgroupcollors)}
        </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.backend}' class='skills__list backend'>
          ${helper.listSkills(this.cv.skills.filter(skill => skill.group === 'backend'), this.cv.skillgroupcollors)}
        </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.infra}'class='skills__list infrastructure'>
          ${helper.listSkills(this.cv.skills.filter(skill => skill.group === 'infra'), this.cv.skillgroupcollors)}
        </ul>
      </div>
    `;
  }
}

Skills.refs = {}