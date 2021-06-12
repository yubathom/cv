parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LJ3n":[function(require,module,exports) {
module.exports={name:{first:"Thomas",last:"Yuba"},about:"UI and Front-End developer",position:"Frontend specialist at McKinsey & Company",tags:"ui, frontend, open-source",birth:{year:1985,month:10,day:21,location:"São Paulo"},label:{experience:"Experiência profissional",projects:"Outros projetos",years:"anos",nacionality:"Brasileiro",skills:"Qualificação por área, ferramenta e nível de experiência",skillareas:"Áreas de atuação",education:"Educação",design:"Design",developmnent:"Desenvolvimento",devpattern:"Padrões de desenvolvimento",databases:"Banco de dados",infra:"Infraestrutura",languages:"Idiomas",opensource:"Projetos Open Source",about:"sobre",cv:"currículo",project:"projeto",repository:"repositório"},actions:[{translate:"English"},{print:"Imprimir"},{share:"Copie esta url"}],experience:[{company:"São Paulo Urbanismo",position:"Assessor. Frontend, backend, ux, ui",timeperiod:"Outubro de 2014 - Outubro de 2020",description:"Desenvolvimento frontend de SPA/PWA's. Desenvolvimento, manutenção e documentação de API's. Contribuições em projetos open source, documentação, testes e rotinas de ci.",website:"https://github.com/spurb"},{company:"mote.bz",position:"Sócio. Frontend, ux, ui, branding",timeperiod:"Março de 2008 - Setembro de 2014",description:"Desenvolvimento de protótipos e entregáveis UX/UI. Desenvolvimento frontend. Branding e consultoria de comunicação",website:"https://www.behance.net/motebz"},{company:"Editora Abril",position:"Trainee. Frontend, ui",timeperiod:"Março de 2007 - Março de 2008",description:"Desenvolvimento de aplicações web. Desenvolvimento de elementos de interface",website:"https://abril.com.br"}],education:[{degree:"Experiência do usuário em plataformas digitais",timeperiod:"Março de 2019 - Julho de 2019",description:"Curso de extensão em experiência do usuário (UX) em plataformas digitais",institution:"Pontífica Universidade Católica de São Paulo (PUC-SP)"},{degree:"Design, desenho industrial, programação visual",timeperiod:"Março de 2006 - Julho 2011",description:"Bacharelado em Design",institution:"Faculdade de Arquitetura e Urbanismo da Universidade de São Paulo (FAU-USP)",website:"http://www.fau.usp.br/graduacao/design"},{degree:"Design da Comunicação",timeperiod:"Março 2010 - Março 2011",description:"Intercâmbio acadêmico",institution:"Faculdade de Belas Artes da Universidade do Porto (FBAUP)",website:"https://www.fba.up.pt"}],knowledge:"Desenvolvedor javascript e python com proeficiência em meios de representação e prototipação digital.",opensource:[{name:"hoppscotch.io",platform:"Nuxt, vue",description:"Ajuda a criar requisições para apis salvando tempo de desenvolvimento Contribuo como colaborador deste projeto.",display:"hoppscotch",url:"https://hoppscotch.io",repo:"https://github.com/hoppscotch/hoppscotch"},{name:"API Gestão Urbana SP",platform:"Rest api, php",description:"API REST de contribuições de arquivos produzidos durante o processo participativo do Município de São Paulo. A api tem atendido a consultas públicas de diversas secretarias e órgãos do município, dentre elas SMC (Cultura), SMT (Transportes), SMIT (Tecnologia), SECOM (Comunicação) e SMDU (Urbanismo). Contribuo como mantenedor deste projeto. Projeto premiado pelo IAB-SP 2019 na categoria 'Plataformas e Suportes Tecnológicos'.",display:"notícia",url:"https://gestaourbana.prefeitura.sp.gov.br/noticias/plataforma-participe-vence-premiacao-iabsp-2019/",repo:"https://github.com/spurb/consultas-publicas-backend"},{name:"Participe Gestão Urbana",platform:"Vue, cypress, netlifly-ci",description:"Site de participação social da prefeitura de São Paulo, a princípio criado para os projetos do marco regulatório, mas adotados para diversas secretarias e órgãos do município, dentre elas SMC (Cultura), SMT (Transportes), SMIT (Tecnologia), SECOM (Comunicação) e SMDU (Urbanismo)",display:"participe.prefeitura",url:"https://participe.gestaourbana.prefeitura.sp.gov.br",repo:"https://github.com/spurb/participe"}],projects:[{name:"Serviços de dados da São Paulo Urbanismo",platform:"Vue 3",description:"Sistematização de dados produzidos pela São Paulo Urbanismo em API's públicas e serviços de dados",display:"servicos.spurbanismo",url:"https://servicos.spurbanismo.sp.gov.br",repo:"https://github.com/SPURB/servicos.spurbanismo.sp.gov.br"},{name:"Apropriação de horas",platform:"Nodejs, express, rest api, vue, nuxt",description:"Sistema de apropriação de horas trabalhadas, gerenciamento de pessoal e relatoria de trabalho da São Paulo Urbanismo",display:"apropriacaohoras",url:"https://servicos.spurbanismo.sp.gov.br/apropriacaohoras/faq",repo:"https://github.com/spurb/apropriacaohoras"},{name:"Controle de CEPAC das Operação Urbanas Consorciadas",platform:"C#, rest api, vue, nuxt",description:"Sistema de moderação do cadastro de interessados de CEPACs - Certificados de Potencial Adicional de Construção - das Operações Urbanas Consorciadas de São Paulo",display:"cepac",url:"https://servicos.spurbanismo.sp.gov.br/cepac/",repo:"https://github.com/spurb/cepac"},{name:"Monitoramento dos Projetos de Intervenção Urbana de São Paulo",platform:"Nodejs, express, rest api, vue, open layers",description:"Sistema de acompanhamento dos Projetos públicos de intervenção urbana da cidade de São Paulo (decreto nº 56.901, de 30 de março de 2016)",display:"gestaourbana/piu-monitoramento",url:"https://gestaourbana.prefeitura.sp.gov.br/piu-monitoramento",repo:"https://github.com/spurb/piu-monitoramento"},{name:"API Geosampa",platform:"Vue, vuepress",description:"Proposta de API do portal de dados geográficos do município de Sâo Paulo. 2º lugar em hackathona (17 equipes)",display:"notícia",url:"https://gestaourbana.prefeitura.sp.gov.br/noticias/projeto-vencedor-da-hackatona-geosampa-propoe-inovacao-tecnologica-a-partir-de-construcoes-na-capital/",repo:"https://github.com/yubathom/api-geosampa"},{name:"Mapa da consulta PIU Setor Central",platform:"Nodejs, open layers",description:"Mapa interativo da consulta pública do Projeto de Intervenção Urbana Centro",display:"mapas/piu-setor-central",url:"https://participe.gestaourbana.prefeitura.sp.gov.br/mapas/piu-setor-central-2/",repo:"https://github.com/SPURB/mapa-consulta-setor-central"}],contact:{email:"yubathom@gmail.com",phone:"55 11 99638 3168",street:"Rua Frei Caneca",city:"São Paulo",github:"https://github.com/yubathom",linkedin:"https://linkedin.com/in/thomasyuba"}};
},{}],"qbM8":[function(require,module,exports) {
module.exports={name:{first:"Thomas",last:"Yuba"},about:"UI and Front-End developer",position:"Frontend specialist at McKinsey & Company",tags:"ui, frontend, open-source",birth:{year:1985,month:10,day:21,location:"São Paulo"},label:{experience:"Experience",projects:"Other projects",years:"years",nacionality:"Brazilian",skills:"Skillset, tools and experience levels",skillareas:"Skillset",education:"Education",design:"Design",developmnent:"Development",devpattern:"Develpment patterns",databases:"Databases",infra:"infrastructure",languages:"Languages",opensource:"Open Source projects",about:"about",cv:"resume",project:"project",repository:"repo"},actions:[{translate:"Português"},{print:"Print"},{share:"Copy this url"}],experience:[{company:"São Paulo Urbanism",position:"Consultant. Frontend, backend, ux, ui",timeperiod:"October 2014 - October 2020",description:"SPA/PWA frontend development. REST API's development, maintenance and documentation. Contribuitions to open source prjects. Tests and continuous integration setups for frontend projects.",website:"https://github.com/spurb"},{company:"mote.bz",position:"Founder. Frontend, ux, ui, branding",timeperiod:"March 2008 - September de 2014",description:"UX, UI, prototype development. Frontend, branding and comunication consultancy.",website:"https://www.behance.net/motebz"},{company:"Abril (publishing company)",position:"Trainee. Frontend, ui",timeperiod:"March 2007 - March 2008",description:"Web design and development. UI design and frontend",website:"https://abril.com.br"}],education:[{degree:"User experience in digital media",timeperiod:"March 2019 - July 2019",description:"User experience extension course",institution:"The Pontifical Catholic University of São Paulo (PUC-SP)"},{degree:"Industrial and visual design",timeperiod:"March 2006 - July 2011",description:"Bachelor of Design",institution:"School of Architecture and Urbanism at the University of São Paulo (FAU-USP)",website:"http://www.fau.usp.br/graduacao/design"},{degree:"Communication design",timeperiod:"March 2010 - March 2011",description:"Academic exchange",institution:"The Faculty of Fine Arts of Porto (FBAUP)",website:"https://www.fba.up.pt"}],knowledge:"Desenvolvedor javascript e python com proeficiência em meios de representação e prototipação digital.",opensource:[{name:"hoppscotch.io",platform:"Nuxt, vue, cypress, travis-ci",description:"A free open source webapp API request builder. It helps create requests for API's. I contribute as a collaborator of this project.",display:"hoppscotch",url:"https://hoppscotch.io",repo:"https://github.com/hoppscotch/hoppscotch"},{name:"São Paulo Urban Management API",platform:"Rest api, php",description:"A REST API produced during the participatory process of the Municipality of São Paulo. This API has attended public consultations of various organizations of the municipality, including SMC (Culture), SMT (Transport), SMIT (Technology), SECOM (Communication) and SMDU (Urbanism). I contribute as maintainer of this project. This project was awarded by the IAB-SP 2019 (Brazillian Architecture Institute of São Paulo) awards at the category of 'Technology Platforms and Supports'.",display:"news (portuguese)",url:"https://gestaourbana.prefeitura.sp.gov.br/noticias/plataforma-participe-vence-premiacao-iabsp-2019/",repo:"https://github.com/spurb/consultas-publicas-backend"},{name:"São Paulo Participatory web app",platform:"Vue, cypress, netlifly-ci",description:"Social participation site of the city of São Paulo, initially created for regulatory framework projects (PIU), but adopted for various organizations of the municipality.",display:"participe",url:"https://participe.gestaourbana.prefeitura.sp.gov.br",repo:"https://github.com/spurb/participe"}],projects:[{name:"São Paulo Urbanismo data services",platform:"Vue 3",description:"Systematization of data produced by São Paulo Urbanism in public API's and data services",display:"servicos.spurbanismo",url:"https://servicos.spurbanismo.sp.gov.br",repo:"https://github.com/SPURB/servicos.spurbanismo.sp.gov.br"},{name:"Productivity manager",platform:"Nodejs, express, rest api, vue, nuxt",description:"Personnel management and work reports of São Paulo Urbanismo",display:"apropriacaohoras",url:"https://servicos.spurbanismo.sp.gov.br/apropriacaohoras/faq",repo:"https://github.com/spurb/apropriacaohoras"},{name:"Certificates of Additional Construction Potential dashboard",platform:"C#, rest api, vue, nuxt",description:"São Paulo city land tax called CEPACS (certificates of additional construction potential) monitoring system",display:"cepac",url:"https://servicos.spurbanismo.sp.gov.br/cepac/",repo:"https://github.com/spurb/cepac"},{name:"São Paulo city Urban Intervention Projects dashboard",platform:"Nodejs, express, rest api, vue, open layers",description:"Monitoring system and dashboard of public urban projects (Decree nº 56.901, march 2016)",display:"gestaourbana/piu-monitoramento",url:"https://gestaourbana.prefeitura.sp.gov.br/piu-monitoramento",repo:"https://github.com/spurb/piu-monitoramento"},{name:"Geosampa API",platform:"Vue, vuepress",description:"API proposal of the geographic data portal of the municipality of São Paulo. 2nd place in hackathona (17 teams)",display:"news",url:"https://gestaourbana.prefeitura.sp.gov.br/noticias/projeto-vencedor-da-hackatona-geosampa-propoe-inovacao-tecnologica-a-partir-de-construcoes-na-capital/",repo:"https://github.com/yubathom/api-geosampa"},{name:"Participatory map of São Paulo city center",platform:"Nodejs, open layers",description:"Interactive map of the public consultation of urban intervention project",display:"maps/piu-setor-central",url:"https://participe.gestaourbana.prefeitura.sp.gov.br/mapas/piu-setor-central-2/",repo:"https://github.com/SPURB/mapa-consulta-setor-central"}],contact:{email:"yubathom@gmail.com",phone:"55 11 99638 3168",street:"Rua Frei Caneca",city:"São Paulo",github:"https://github.com/yubathom",linkedin:"https://linkedin.com/in/thomasyuba"}};
},{}],"hQ7l":[function(require,module,exports) {
module.exports={skills:[{name:"Inglês",level:70,group:"languages"},{name:"Português",level:85,group:"languages"},{name:"Japonês",level:50,group:"languages"},{name:"Espanhol",level:15,group:"languages"},{name:"Typescript/Javascript",level:80,group:"front"},{name:"HTML",level:80,group:"front"},{name:"CSS/SASS",level:80,group:"front"},{name:"Vuejs",level:70,group:"front"},{name:"React",level:70,group:"front"},{name:"Figma",level:60,group:"design"},{name:"Illustrator",level:50,group:"design"},{name:"Webpack",level:80,group:"tooling"},{name:"Babel",level:70,group:"tooling"},{name:"Rollup",level:60,group:"tooling"},{name:"Parcel",level:60,group:"tooling"},{name:"TDD",level:80,group:"devpattern"},{name:"MVC",level:80,group:"devpattern"},{name:"SOLID",level:60,group:"devpattern"},{name:"MySQL",level:80,group:"databases"},{name:"PostGreSQL",level:50,group:"databases"},{name:"Mongodb",level:50,group:"databases"},{name:"Nodejs",level:80,group:"backend"},{name:"Bash",level:40,group:"backend"},{name:"Python",level:40,group:"backend"},{name:"Git",level:80,group:"infra"},{name:"Firebase",level:40,group:"infra"},{name:"AWS",level:60,group:"infra"},{name:"Travis-CI",level:60,group:"infra"},{name:"Nginx",level:40,group:"infra"},{name:"Docker",level:40,group:"infra"},{name:"Netlifly-CI",level:40,group:"infra"}],skillgroupcollors:{languages:"#D5D5D6",design:"#FBD462",front:"#EBA5A5",tooling:"#A3CDE0",devpattern:"#AFD2B9",databases:"#71AE82",backend:"#AD95C5",infra:"#6C6B90"}};
},{}],"tLYN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={refGenerator:function(t,e,n){if(void 0!==n.dataset.ref)return e.refs[n.dataset.ref];t.ref=Math.random(),e.refs[t.ref]=t,n.dataset.ref=t.ref,t.init(n)},removeHttps:function(t){return t.replace("https://","")},listSkills:function(t,e){return t.map(function(t){return"<li class='skills__item'>".concat(t.name,"\n          <svg width='258' height='").concat(37,"' viewBox='0 0 258 ").concat(37,"' fill='none'>\n            <rect width='258' height='").concat(37,"' fill='#E5E5E5'/>\n            <rect width='").concat(2.58*t.level,"' height='").concat(37,"' fill='").concat(e[t.group],"'/>\n          </svg>\n      </li>")}).join("")},listProjects:function(t,e){return t.map(function(t){return"\n      <div class='project'>\n        <h4 class='project__name'>".concat(t.name,"</h4>\n        <p class='project__platform tags'><em>").concat(t.platform,"</em></p>\n        <p class='project__description'>").concat(t.description,"</p>\n        <p>\n        <span class=''project__url'>\n          ").concat(e.project,' <a href="').concat(t.url,'">').concat(t.display,"</a><br>\n        <span class='project__repo'>\n          ").concat(e.repository,' <a href="').concat(t.repo,'">').concat(t.repo.replace("https://github.com/","@").toLowerCase(),"</a>\n        </span>\n      </div>\n      ")}).join("")}};exports.default=t;
},{}],"anYQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var l=s(require("./_mixins.js"));function s(l){return l&&l.__esModule?l:{default:l}}function t(l,s){if(!(l instanceof s))throw new TypeError("Cannot call a class as a function")}function i(l,s){for(var t=0;t<s.length;t++){var i=s[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}function o(l,s,t){return s&&i(l.prototype,s),t&&i(l,t),l}var n=function(){function s(i,o){t(this,s),this.container=i,this.cv=o,l.default.refGenerator(this,s,i)}return o(s,[{key:"init",value:function(){this.container.innerHTML=this.render()}},{key:"sortedSkill",value:function(l,s){return l.filter(function(l){return l.group===s}).sort(function(l,s){return s.level-l.level})}},{key:"render",value:function(){return"\n    <div class=\"block__skills\">\n        <h3 class='skills__name title'>".concat(this.cv.label.skills,"</h3>\n\n        <div class='skills__legend'>\n          <h4>").concat(this.cv.label.skillareas,"</h4>\n          <ul style='border-color:").concat(this.cv.skillgroupcollors.design,"' class='skills__list design'>\n            <li>Design<li>\n          </ul>\n          <ul style='border-color:").concat(this.cv.skillgroupcollors.front,"' class='skills__list front'>\n            <li>Frontend<li>\n          </ul>\n          <ul style='border-color:").concat(this.cv.skillgroupcollors.tooling,"' class='skills__list tooling'>\n            <li>Tooling<li>\n          </ul>\n          <ul style='border-color:").concat(this.cv.skillgroupcollors.devpattern,"' class='skills__list devpatterns'>\n            <li>").concat(this.cv.label.devpattern,"<li>\n          </ul>\n          <ul style='border-color:").concat(this.cv.skillgroupcollors.databases,"' class='skills__list databases'>\n            <li>").concat(this.cv.label.databases,"<li>\n          </ul>\n          <ul style='border-color:").concat(this.cv.skillgroupcollors.backend,"' class='skills__list backend'>\n            <li>Backend<li>\n          </ul>\n          <ul style='border-color:").concat(this.cv.skillgroupcollors.infra,"' class='skills__list infra'>\n            <li>").concat(this.cv.label.infra,"<li>\n          </ul>\n        </div>\n\n        <ul style='border-color:").concat(this.cv.skillgroupcollors.design,"' class='skills__list design'>\n          ").concat(l.default.listSkills(this.sortedSkill(this.cv.skills,"design"),this.cv.skillgroupcollors),"\n        </ul>\n        <ul style='border-color:").concat(this.cv.skillgroupcollors.front,"' class='skills__list front'>\n          ").concat(l.default.listSkills(this.sortedSkill(this.cv.skills,"front"),this.cv.skillgroupcollors),"\n        </ul>\n        <ul style='border-color:").concat(this.cv.skillgroupcollors.tooling,"' class='skills__list tooling'>\n          ").concat(l.default.listSkills(this.sortedSkill(this.cv.skills,"tooling"),this.cv.skillgroupcollors),"\n          </ul>\n        <ul style='border-color:").concat(this.cv.skillgroupcollors.devpattern,"' class='skills__list devpatterns'>\n          ").concat(l.default.listSkills(this.sortedSkill(this.cv.skills,"devpattern"),this.cv.skillgroupcollors),"\n          </ul>\n        <ul  style='border-color:").concat(this.cv.skillgroupcollors.databases,"' class='skills__list databases'>\n          ").concat(l.default.listSkills(this.sortedSkill(this.cv.skills,"databases"),this.cv.skillgroupcollors),"\n        </ul>\n        <ul style='border-color:").concat(this.cv.skillgroupcollors.backend,"' class='skills__list backend'>\n          ").concat(l.default.listSkills(this.sortedSkill(this.cv.skills,"backend"),this.cv.skillgroupcollors),"\n          </ul>\n        <ul style='border-color:").concat(this.cv.skillgroupcollors.infra,"'class='skills__list infrastructure'>\n          ").concat(l.default.listSkills(this.sortedSkill(this.cv.skills,"infra"),this.cv.skillgroupcollors),"\n        </ul>\n      </div>\n    ")}}]),s}();exports.default=n,n.refs={};
},{"./_mixins.js":"tLYN"}],"Omq1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=t(require("./_mixins.js"));function t(n){return n&&n.__esModule?n:{default:n}}function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function c(n,t,e){return t&&a(n.prototype,t),e&&a(n,e),n}var o=function(){function t(a,c){e(this,t),this.container=a,this.cv=c,n.default.refGenerator(this,t,a)}return c(t,[{key:"init",value:function(){this.container.innerHTML=this.render()}},{key:"currentAge",value:function(n,t,e){var a=(new Date).getFullYear(),c=(new Date).getMonth(),o=(new Date).getDate();return c>t?a-n:c===t&&o>=e?a-n:a-n-1}},{key:"render",value:function(){var t=this.cv;return"\n    <div class='block__info'>\n      <h3 class='info__name title'>".concat(t.name.first," ").concat(t.name.last,"</h3>\n      <h4 class='info__details'>").concat(t.label.nacionality,", ").concat(this.currentAge(t.birth.year,t.birth.month,t.birth.day)," ").concat(t.label.years," | São Paulo, SP</h4>\n      <p class='info__tags tags'><em>").concat(t.tags,'</em></p>\n      <p class="info__about">').concat(t.about,'</p>\n      <div class="info__contact">\n        <p>').concat(t.contact.phone,"<br>\n        ").concat(t.contact.email,'\n        </p>\n        <p>\n          linkedin <a href="').concat(t.contact.linkedin,'">').concat(n.default.removeHttps(t.contact.linkedin),'</a><br>\n          github <a href="').concat(t.contact.github,'">').concat(n.default.removeHttps(t.contact.github),"</a>\n        </p>\n      </div>\n    </div>\n    ")}}]),t}();exports.default=o,o.refs={};
},{"./_mixins.js":"tLYN"}],"iVEz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=e(require("./_mixins.js"));function e(n){return n&&n.__esModule?n:{default:n}}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function s(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),n}var c=function(){function e(i,s){t(this,e),this.container=i,this.cv=s,n.default.refGenerator(this,e,i)}return s(e,[{key:"init",value:function(){this.container.innerHTML=this.render()}},{key:"listCourses",value:function(n){return n.map(function(n){return"<div class='course'>\n        <h4 class='course__details'>".concat(n.degree,"</h4>\n        <p>").concat(n.timeperiod,"</p>\n        <p>").concat(n.institution,"</p>\n        <p>").concat(n.description,"</p>\n      </div>")}).join("")}},{key:"render",value:function(){var e=this.cv.skills.filter(function(n){return"languages"===n.group}).sort(function(n,e){return e.level-n.level});return"\n    <div class=\"block__education\">\n      <h3 class='education__name title'>".concat(this.cv.label.education,"</h3>\n      <div class='education__courses'>\n        ").concat(this.listCourses(this.cv.education),"\n      </div>\n      <div class='education__langs'>\n        <h3 class='education__name title'>").concat(this.cv.label.languages,"</h3>\n        <ul style='border-color:").concat(this.cv.skillgroupcollors.languages,"' class='skills__list languages'>\n          ").concat(n.default.listSkills(e,this.cv.skillgroupcollors),"\n        </ul>\n      </div>\n    </div>\n    ")}}]),e}();exports.default=c,c.refs={};
},{"./_mixins.js":"tLYN"}],"cpUC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./_mixins.js"));function n(e){return e&&e.__esModule?e:{default:e}}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}var i=function(){function n(r,o){t(this,n),this.container=r,this.cv=o,e.default.refGenerator(this,n,r)}return o(n,[{key:"init",value:function(){this.container.innerHTML=this.render()}},{key:"render",value:function(){return"\n    <div class=\"block__opensource\">\n      <h3 class='opensource__name title'>".concat(this.cv.label.opensource,"</h3>\n      <div class='opensource__projects'>\n      ").concat(e.default.listProjects(this.cv.opensource,this.cv.label),"\n      </div>\n    </div>\n    ")}}]),n}();exports.default=i,i.refs={};
},{"./_mixins.js":"tLYN"}],"MZPO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./_mixins.js"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var o=function(){function t(r,i){n(this,t),this.container=r,this.cv=i,e.default.refGenerator(this,t,r)}return i(t,[{key:"init",value:function(){this.container.innerHTML=this.render()}},{key:"render",value:function(){return"\n    <div class=\"block__projects\">\n      <h3 class='projects__name title'>".concat(this.cv.label.projects,"</h3>\n      <div class='projects__projects'>\n      ").concat(e.default.listProjects(this.cv.projects,this.cv.label),"\n      </div>\n    </div>\n    ")}}]),t}();exports.default=o,o.refs={};
},{"./_mixins.js":"tLYN"}],"yIEZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./_mixins.js"));function n(e){return e&&e.__esModule?e:{default:e}}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}var c=function(){function n(i,r){t(this,n),this.container=i,this.cv=r,e.default.refGenerator(this,n,i)}return r(n,[{key:"init",value:function(){this.container.innerHTML=this.render()}},{key:"listExperiences",value:function(e){return e.map(function(e){return"\n      <div class='experience'>\n        <h4 class='project__name title'>".concat(e.company,"</h4>\n        <p class='project__position tags'><em>").concat(e.position,"</em></p>\n        <p class='project__description'>").concat(e.description,"</p>\n        <p class='project__timeperiod'>").concat(e.timeperiod,"</p>\n        <p class='project__website'>\n          <a href=\"").concat(e.website,'">').concat(e.website.replace("https://",""),"</a>\n        </p>\n      </div>\n      ")}).join("")}},{key:"render",value:function(){return"\n    <div class=\"block__experience\">\n      <h3 class='experience__title'>".concat(this.cv.label.experience,"</h3>\n      ").concat(this.listExperiences(this.cv.experience),"\n    </div>\n    ")}}]),n}();exports.default=c,c.refs={};
},{"./_mixins.js":"tLYN"}],"cANU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=t(require("./_mixins.js"));function t(n){return n&&n.__esModule?n:{default:n}}function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function c(n,t,e){return t&&i(n.prototype,t),e&&i(n,e),n}var a=function(){function t(i,c,a){e(this,t),this.container=i,this.actions=c,this.lang=a,this.icons={print:'\n        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\n      ',share:'\n      <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>\n      ',translate:'\n      <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>\n      '},n.default.refGenerator(this,t,i)}return c(t,[{key:"init",value:function(){this.container.innerHTML=this.render(),this.listenEventAction()}},{key:"listenEventAction",value:function(){var n=this;this.actions.forEach(function(t){var e=Object.keys(t)[0],i=document.getElementById(e);n[e]&&i.addEventListener("click",function(){return n[e]()})})}},{key:"print",value:function(){window.print()}},{key:"share",value:function(){if(navigator.share){var n=(new Date).toLocaleTimeString(),t=(new Date).toLocaleDateString();navigator.share({title:"Thomas Yuba",text:"Resume | ".concat(n," | ").concat(t),url:window.location.href}).then(function(){}).catch(console.error)}else{var e=document.createElement("input");document.body.appendChild(e),e.value=window.location.href,e.select(),document.execCommand("copy"),document.body.removeChild(e);var i="ptbr"===this.lang?"A url foi copiada!":"The url was copied!",c=document.getElementById("share");c.innerHTML="".concat(i).concat(this.icons.share),c.classList.add("disabled"),c.setAttribute("disabled","disabled")}}},{key:"translate",value:function(){"en"===new URLSearchParams(window.location.search).get("lang")?window.location.replace("/cv"):window.location.replace("?lang=en")}},{key:"render",value:function(){var n=this;return this.actions.map(function(t){var e=Object.keys(t)[0],i=Object.values(t)[0];return n.icons[e]?"\n          <li class='action__item'>\n            <button id=\"".concat(e,"\" class='action__item__btn'>\n              ").concat(i).concat(n.icons[e],"\n            </button>\n          </li>\n        "):"\n          <li class='action__item'>\n            <buttpm id=\"".concat(e,"\" class='action__item__btn'>\n              ").concat(i,"\n            </button>\n          </li>\n        ")}).join("")}}]),t}();exports.default=a,a.refs={};
},{"./_mixins.js":"tLYN"}],"Focm":[function(require,module,exports) {
"use strict";var e=f(require("./pt-br.json")),n=f(require("./en.json")),t=f(require("./skills.json")),r=a(require("./components/Skills.js")),o=a(require("./components/Info.js")),u=a(require("./components/Education.js")),c=a(require("./components/OpenSource.js")),s=a(require("./components/Projects.js")),i=a(require("./components/Experience.js")),l=a(require("./components/Actions.js"));function a(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}function f(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var c=o?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(r,u,c):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function p(e){return"en"===new URLSearchParams(e).get("lang")?"en":"ptbr"}function m(e,n){return n.skills=e.skills,n.skillgroupcollors=e.skillgroupcollors,n}document.addEventListener("DOMContentLoaded",function(){var a=p(window.location.search),d="en"===a?n:e;new o.default(document.getElementById("info"),d),new r.default(document.getElementById("skills"),m(t,d)),new u.default(document.getElementById("education"),m(t,d)),new c.default(document.getElementById("open-source"),d),new s.default(document.getElementById("projects"),d),new i.default(document.getElementById("experience"),d),new l.default(document.getElementById("actions"),d.actions,a)});
},{"./pt-br.json":"LJ3n","./en.json":"qbM8","./skills.json":"hQ7l","./components/Skills.js":"anYQ","./components/Info.js":"Omq1","./components/Education.js":"iVEz","./components/OpenSource.js":"cpUC","./components/Projects.js":"MZPO","./components/Experience.js":"yIEZ","./components/Actions.js":"cANU"}]},{},["Focm"], null)
//# sourceMappingURL=src.5160f495.js.map