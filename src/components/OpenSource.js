import helper from './_helpers.js'

export default class OpenSource {
  constructor(container, cv) {
    this.container = container
    this.cv = cv
    helper.refGenerator(this, OpenSource, container)
  }

  init() {
    this.container.innerHTML = this.render()
  }

  render () {
    const c = this.cv
    return `
    <div class="block__opensource">
      <h3 class='opensource__name'>${c.label.opensource}</h3>
      <div class='opensource__projects'>
      ${helper.listProjects(c.opensource)}
      </div>
    </div>
    `;
  }
}

OpenSource.refs = {}
