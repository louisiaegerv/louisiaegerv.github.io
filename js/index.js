(() => {
    /* DOM Section variables */
    const app = document.querySelector('#app');
    const headerSection = document.querySelector('header');
    const jumboSection = document.querySelector('#jumbo');
    const aboutSection = document.querySelector('#about');
    const portfolioSection = document.querySelector('#projects');
    const contactSection = document.querySelector('#contact');
    const footerSection = app.lastElementChild;
    
    /* Turn data keys into variables */
    const nav = data.nav;
    const jumbo = data.jumbo;
    const about = data.about;
    const portfolio = data.portfolio;
    const contact = data.contact;
    const social = data.social;
    
    /* Functions */
    const createLinkLI = (linkTxt, link) => {
        const a = document.createElement('a');
        const li = document.createElement('li');
        li.textContent = linkTxt;
        a.href = link;
        a.appendChild(li);
        return a;
    };
    
    /* Nav section */
    const title = createLinkLI(nav.title.text, nav.title.link);
    title.classList.add('title');
    headerSection.firstElementChild.appendChild(title);
    
    const headerList = document.querySelector(".headerList");
    const headerLinks = nav.navLinks;
    for (let i = 0; i < headerLinks.length; i++) {
        headerList.appendChild(createLinkLI(headerLinks[i].name, headerLinks[i].url));
    };
    
    /* Jumbotron section */
    jumboSection.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, .8), rgba(255, 255, 255, .4)), url(` + data.jumbo.img + `)`;
    jumboSection.firstElementChild.textContent = `Hi, I'm Louis. I design & build websites.`;
    
    /* About section */
    const aboutTxt = document.createElement('p');
    aboutTxt.textContent = about.aboutText;
    aboutSection.appendChild(aboutTxt);
        
    
    /* Portfolio Section */
    portfolioSection.style.background = `url(` + portfolio.backgroundImg +`)  center center fixed`;
    
    portfolio.projects.forEach(project => {
        const projContainer = document.createElement('div');
        const proj = document.createElement('div');
        const imgLink = document.createElement('a');
        proj.style.background = 'url(' + project.img + ') no-repeat center';
        proj.style.transition = 'all 0.2s ease';
        projContainer.classList.add('col-md-4', 'col-sm-6', 'projContainer');
        proj.style.backgroundSize = 'cover';
        imgLink.textContent = project.title;
        imgLink.href = project.link;
        imgLink.target = '_blank';
        $(imgLink).hover(() => {
            imgLink.parentElement.style.transform = "scale(1.1)";
        }, () => {
            imgLink.parentElement.style.transform = "scale(1)";
        });
        proj.appendChild(imgLink);
        projContainer.appendChild(proj);
        portfolioSection.firstElementChild.children[1].appendChild(projContainer);
    });
    /* Contact Section */
    contactSection.textContent = 'Contact me';
    /* Footer Section */
    const year = new Date().getFullYear();
    footerSection.textContent = `Handmade by me © ${year}.`;
})();