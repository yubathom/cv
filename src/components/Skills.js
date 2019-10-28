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

  sortedSkill (skills, skillType) {
    return skills
      .filter(skill => skill.group === skillType)
      .sort((a, b) => b.level - a.level)
  }

  render () {
    return `
    <div class="block__skils">
        <h3 class='skills__name title'>${this.cv.label.skills}</h3>

        <div class='skills__legend'>
          <h4>${this.cv.label.skillareas}</h4>
          <ul style='border-color:${this.cv.skillgroupcollors.design}' class='skills__list design'>
            <li>Design<li>
          </ul>
          <ul style='border-color:${this.cv.skillgroupcollors.front}' class='skills__list front'>
            <li>Frontend<li>
          </ul>
          <ul style='border-color:${this.cv.skillgroupcollors.tooling}' class='skills__list tooling'>
            <li>Tooling<li>
          </ul>
          <ul style='border-color:${this.cv.skillgroupcollors.devpattern}' class='skills__list devpatterns'>
            <li>${this.cv.label.devpattern}<li>
          </ul>
          <ul style='border-color:${this.cv.skillgroupcollors.databases}' class='skills__list databases'>
            <li>${this.cv.label.databases}<li>
          </ul>
          <ul style='border-color:${this.cv.skillgroupcollors.backend}' class='skills__list backend'>
            <li>Backend<li>
          </ul>
          <ul style='border-color:${this.cv.skillgroupcollors.infra}' class='skills__list infra'>
            <li>${this.cv.label.infra}<li>
          </ul>
        </div>

        <ul style='border-color:${this.cv.skillgroupcollors.design}' class='skills__list design'>
          ${helper.listSkills(this.sortedSkill(this.cv.skills, 'design'), this.cv.skillgroupcollors)}
        </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.front}' class='skills__list front'>
          ${helper.listSkills(this.sortedSkill(this.cv.skills, 'front'), this.cv.skillgroupcollors)}
        </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.tooling}' class='skills__list tooling'>
          ${helper.listSkills(this.sortedSkill(this.cv.skills, 'tooling'), this.cv.skillgroupcollors)}
          </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.devpattern}' class='skills__list devpatterns'>
          ${helper.listSkills(this.sortedSkill(this.cv.skills, 'devpattern'), this.cv.skillgroupcollors)}
          </ul>
        <ul  style='border-color:${this.cv.skillgroupcollors.databases}' class='skills__list databases'>
          ${helper.listSkills(this.sortedSkill(this.cv.skills, 'databases'), this.cv.skillgroupcollors)}
        </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.backend}' class='skills__list backend'>
          ${helper.listSkills(this.sortedSkill(this.cv.skills, 'backend'), this.cv.skillgroupcollors)}
          </ul>
        <ul style='border-color:${this.cv.skillgroupcollors.infra}'class='skills__list infrastructure'>
          ${helper.listSkills(this.sortedSkill(this.cv.skills, 'infra'), this.cv.skillgroupcollors)}
        </ul>
      </div>
    `;
  }
}

Skills.refs = {}