import helper from './_helpers.js'

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
    let output = ''
    courses.forEach(course => {
      output += `<p>
      ${course.degree}</br>
      ${course.institution}</br>
      ${course.description}</br>
      ${course.timeperiod}</br>
    </p>`
    })
    return output
  }

  render () {
    const c = this.cv
    return `
    <div class="block__education">
      <h3 class='education__name'>${c.label.education}</h3>
      <div class='education__courses'>
        ${this.listCourses(c.education)}
      </div>
      <div class='education__langs'>
        <h3 class='education__name'>${c.label.languages}</h3>
        ${helper.listSkills(c.languages)}
      </div>
    </div>
    `;
  }
}

Education.refs = {}
