import * as ptbr from './pt-br.json'
import * as en from './en.json'
import * as skills from './skills.json'
import Skills from './components/Skills.js'
import Info from './components/Info.js'
import Education from './components/Education.js'
import OpenSource from './components/OpenSource.js'
import Projects from './components/Projects.js'
import Experience from './components/Experience.js'
import Actions from './components/Actions.js'

function langCheck (queryString) {
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get('lang') === 'en' ? 'en' : 'ptbr'
}

function addSkills (skills, content) {
  content.skills = skills.skills
  content.skillgroupcollors = skills.skillgroupcollors
  return content
}

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = langCheck(window.location.search)
  const content = currentLang === 'en' ? en : ptbr

  new Info(document.getElementById('info'), content)
  new Skills(document.getElementById('skills'), addSkills(skills, content))
  new Education(document.getElementById('education'), addSkills(skills, content))
  new OpenSource(document.getElementById('open-source'), content)
  new Projects(document.getElementById('projects'), content)
  new Experience(document.getElementById('experience'), content)
  new Actions(document.getElementById('actions'), content.actions, currentLang)
})
