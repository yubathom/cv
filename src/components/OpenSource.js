import helper from './_mixins.js'

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
    return `
    <div class="block__opensource">
      <h3 class='opensource__name title'>${this.cv.label.opensource}</h3>
      <div class='opensource__projects'>
      ${helper.listProjects(this.cv.opensource, this.cv.label)}
      </div>
    </div>
    `;
  }
}

OpenSource.refs = {}
