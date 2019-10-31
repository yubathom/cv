import helper from './_mixins.js'

export default class Projects {
  constructor(container, cv) {
    this.container = container
    this.cv = cv
    helper.refGenerator(this, Projects, container)
  }

  init() {
    this.container.innerHTML = this.render()
  }

  render () {
    return `
    <div class="block__projects">
      <h3 class='projects__name title'>${this.cv.label.projects}</h3>
      <div class='projects__projects'>
      ${helper.listProjects(this.cv.projects, this.cv.label)}
      </div>
    </div>
    `;
  }
}

Projects.refs = {}
