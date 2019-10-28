export default {
  refGenerator: (context, component, container) => {
    if (typeof container.dataset.ref === 'undefined') {
      // Add a data-ref reference to element
      context.ref = Math.random();
      component.refs[context.ref] = context;
      container.dataset.ref = context.ref;
      context.init(container);
    } else {
      // If this element has already been instantiated, use the existing reference.
      return component.refs[container.dataset.ref];
    }
  },
  removeHttps: fullUrl => fullUrl.replace('https://', ''),
  listSkills: skills => {
    let output = ''
    skills.forEach(skill => {
      output += `<li>
        <span>${skill.name}<span>
          <svg width="258" height="30" viewBox="0 0 258 30" fill="none">
            <rect width="258" height="30" fill="#E5E5E5"/>
            <rect width="212" height="30" fill="#FFBFBA"/>
          </svg>
      </li>`
    })
// ${skill.level}/100
    return output
  },

  

  listProjects: (projects, labels) => {
    let output = ''
    projects.forEach(project => {
      output += `
      <div class='project'>
        <h4 class='project__name'>${project.name}</h4>
        <p class='project__platform tags'><em>${project.platform}</em></p>
        <p class='project__description'>${project.description}</p>
        <p>
        <span class=''project__url'>
          ${labels.project} <a href="${project.url}">${project.display}</a><br>
        <span class='project__repo'>
          ${labels.repository} <a href="${project.repo}">${project.repo.replace('https://github.com/', '@').toLowerCase()}</a>
        </span>
      </div>
      `
    })
    return output
  }
}
