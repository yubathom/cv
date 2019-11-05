import helper from './_mixins.js'

export default class Actions {
  constructor(container, actions, lang) {
    this.container = container
    this.actions = actions
    this.lang = lang
    this.icons = {
      print: `
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      `,
      share: `
      <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
      `,
      translate: `
      <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
      `
    }
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
  share () {
    if (navigator.share) {
      let time = new Date().toLocaleTimeString();
      let date = new Date().toLocaleDateString();
      navigator
        .share({
          title: `Thomas Yuba`,
          text: `Resume | ${time} | ${date}`,
          url: window.location.href
        })
        .then(() => {})
        .catch(console.error);
    }
    else {
      const dummy = document.createElement("input")
      document.body.appendChild(dummy)
      dummy.value = window.location.href
      dummy.select()
      document.execCommand("copy")
      document.body.removeChild(dummy)

      const message = this.lang === 'ptbr' ? 'A url foi copiada!' : 'The url was copied!'

      const btn = document.getElementById('share')
      btn.innerHTML = `${message}${this.icons.share}`
      btn.classList.add('disabled')
      btn.setAttribute('disabled','disabled')
    }
  }

  translate () {
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.get('lang') === 'en' ? window.location.replace('/cv') : window.location.replace('?lang=en')
  }

  render () {
    const lists = this.actions.map(action => {
      const actionId = Object.keys(action)[0]
      const actionValue = Object.values(action)[0]
      if (this.icons[actionId]) {
        return `
          <li class='action__item'>
            <button id="${actionId}" class='action__item__btn'>
              ${actionValue}${this.icons[actionId]}
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