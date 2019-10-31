import helper from './_mixins.js'

export default class Education {
  constructor(container, cv) {
    this.container = container
    this.cv = cv
    helper.refGenerator(this, Education, container)
  }

  init() {
    this.container.innerHTML = this.render()
  }

  listCourses (courses) {
    const output = courses.map(course => {
      return `<div class='course'>
        <h4 class='course__details'>${course.degree}</h4>
        <p>${course.timeperiod}</p>
        <p>${course.institution}</p>
        <p>${course.description}</p>
      </div>`
    })
    return output.join('')
  }

  render () {
    const sortedSkils = this.cv.skills
      .filter(skill => skill.group === 'languages')
      .sort((a, b) => b.level - a.level)

    return `
    <div class="block__education">
      <h3 class='education__name title'>${this.cv.label.education}</h3>
      <div class='education__courses'>
        ${this.listCourses(this.cv.education)}
      </div>
      <div class='education__langs'>
        <h3 class='education__name title'>${this.cv.label.languages}</h3>
        <ul style='border-color:${this.cv.skillgroupcollors.languages}' class='skills__list languages'>
          ${helper.listSkills(sortedSkils, this.cv.skillgroupcollors)}
        </ul>
      </div>
    </div>
    `;
  }
}

Education.refs = {}
