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
  listSkills: (skills, colors) => {
    const lists = skills.map(skill => {
      const normalizedWidth = () => skill.level * 2.58
      const height = 37
      return `<li class='skills__item'>${skill.name}
          <svg width='258' height='${height}' viewBox='0 0 258 ${height}' fill='none'>
            <rect width='258' height='${height}' fill='#E5E5E5'/>
            <rect width='${normalizedWidth()}' height='${height}' fill='${colors[skill.group]}'/>
          </svg>
      </li>`
    })
    return lists.join('')
  },

  listProjects: (projects, labels) => {
    const divs = projects.map(project => {
      return `
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
    return divs.join('')
  }
}
