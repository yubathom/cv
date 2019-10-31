import helper from './_mixins.js'

export default class Actions {
  constructor(container, actions) {
    this.container = container
    this.actions = actions
    helper.refGenerator(this, Actions, container)
  }

  init () {
    this.container.innerHTML = this.render()
    this.listenEventAction()
  }

  listenEventAction () {
    this.actions.forEach(action => {
      const actionId = Object.keys(action)[0]
      const actioneEl = document.getElementById(actionId)
      if (this[actionId]) actioneEl.addEventListener('click', () => this[actionId]())
    })
  }

  // give the same name to this action function in actions object key in .yml file
  print () { window.print() }
  share () { console.log('share') }

  render () {
    const icons = {
      print: `
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      `
    }
    const lists = this.actions.map(action => {
      const actionId = Object.keys(action)[0]
      const actionValue = Object.values(action)[0]
      if (icons[actionId]) {
        return `
          <li class='action__item'>
            <button id="${actionId}" class='action__item__btn'>
              ${actionValue}${icons[actionId]}
            </button>
          </li>
        `
      }
      else {
        return `
          <li class='action__item'>
            <buttpm id="${actionId}" class='action__item__btn'>
              ${actionValue}
            </button>
          </li>
        `
      }
    })
    return lists.join('')
  }
}

Actions.refs = {}