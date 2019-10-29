import * as ptbr from './pt-br.json'
import * as en from './en.json'
import * as skills from './skills.json'
import './main.scss'
// import Navigation from './components/Navigation.js'
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

function addSkills (skills, content) {
  content.skills = skills.skills
  content.skillgroupcollors = skills.skillgroupcollors
  return content
}

document.addEventListener('DOMContentLoaded', () => {
  const content = langCheck(window.location.search)
  // new Navigation(document.getElementById('nav'), [{'cv': content.label.cv}, {'about': content.label.about}])
  new Info(document.getElementById('info'), content)
  new Skills(document.getElementById('skills'), addSkills(skills, content))
  new Education(document.getElementById('education'), addSkills(skills, content))
  new OpenSource(document.getElementById('open-source'), content)
  new Projects(document.getElementById('projects'), content)
  new Experience(document.getElementById('experience'), content)
})
