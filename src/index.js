import  * as ptbr from './pt-br.json'
import  * as en from './en.json'
import './main.scss'
import Skills from './components/Skills.js'
import Info from './components/Info.js'
import Education from './components/Education.js'
import OpenSource from './components/OpenSource.js'
import Projects from './components/Projects.js'
import Experience from './components/Experience.js'

function langCheck (queryString) {
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get('lang') === 'en' ? en : ptbr
}

document.addEventListener('DOMContentLoaded', () => {
  const content = langCheck(window.location.search)
  new Info(document.getElementById('info'), content)
  new Skills(document.getElementById('skills'), content)
  new Education(document.getElementById('education'), content)
  new OpenSource(document.getElementById('open-source'), content)
  new Projects(document.getElementById('projects'), content)
  new Experience(document.getElementById('experience'), content)
})
