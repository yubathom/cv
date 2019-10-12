import helper from './_helpers.js'

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
    const c = this.cv
    return `
    <div class="block__projects">
      <h3 class='projects__name'>${c.label.projects}</h3>
      <div class='projects__projects'>
      ${helper.listProjects(c.projects)}
      </div>
    </div>
    `;
  }
}

Projects.refs = {}
