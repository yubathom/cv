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
        ${skill.name} | ${skill.level}/100
      </li>`
    })
    return output
  },
  listProjects: projects => {
    let output = ''
    projects.forEach(project => {
      output += `
      <div class='project>
        <h4 class='project__name'>${project.name}</h4>
        <p class='project__platform'>${project.platform}</p>
        <p class='project__description'>${project.description}</p>
        <p class='project__url'>
          url </br>
          <a href="${project.url}">${project.url.replace('https://', '')}</a>
        </p>
        <p class='project__repo'>
          repo </br>
          <a href="${project.repo}">${project.repo}</a>
        </p>
      </div>
      `
    })
    return output
  }
}
