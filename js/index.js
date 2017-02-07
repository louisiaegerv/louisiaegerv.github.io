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
        li.innerHTML = linkTxt;
        a.href = link;
        a.appendChild(li);
        return a;
    };
    
    /* Header section */
    const title = createLinkLI(nav.title.text, nav.title.link);
    title.classList.add('title');
    headerSection.firstElementChild.appendChild(title);
    
    const navButton = document.createElement('p');
    navButton.innerHTML = `&#9776;`;
    navButton.classList.add('navButton');
    headerSection.firstElementChild.appendChild(navButton);
    
    const headerList = document.createElement('ul');
    headerList.classList.add("headerList");
    navButton.addEventListener('click', () => {
        headerList.classList.toggle('active');
    });
    const headerLinks = nav.navLinks;
    headerLinks.forEach(link => {
        const li = createLinkLI(link.name, link.url);
        li.addEventListener('click', () => {
            headerList.classList.toggle('active');
        });
        headerList.appendChild(li);
    });
    headerSection.firstElementChild.appendChild(headerList);
    
    
    
    /* Jumbotron section */
    jumboSection.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, .8), rgba(255, 255, 255, .4)), url(` + data.jumbo.img + `)`;
    const jumboContentContainer = document.createElement('div');
    jumboContentContainer.classList.add('jumboContentContainer');
    const jumboText = document.createElement('h1');
    jumboText.textContent = jumbo.text;
    jumboContentContainer.appendChild(jumboText);
    const jumboButton = document.createElement('a');
    jumboButton.textContent = jumbo.buttonText;
    jumboButton.href = jumbo.buttonLink;
    jumboContentContainer.appendChild(jumboButton);
    jumboSection.appendChild(jumboContentContainer);
    
    const scrollDown = document.createElement('a');
    scrollDown.href = jumbo.scrollDownLink;
    scrollDown.classList.add('scrollDown');
    scrollDown.innerHTML = '<i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>';
    jumboSection.appendChild(scrollDown);
    
    
    /* About section */
    const aboutImg = document.createElement('img');
    aboutImg.src = about.img;
    aboutSection.firstElementChild.firstElementChild.appendChild(aboutImg);
    const aboutTxt = document.createElement('p');
    aboutTxt.textContent = about.aboutText;
    aboutSection.firstElementChild.lastElementChild.appendChild(aboutTxt);
    
    /* Portfolio Section */
    portfolioSection.style.background = `url(` + portfolio.backgroundImg + `)  center center fixed`;
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
    /* Footer Section */
    const year = new Date().getFullYear();
    let footerCopyright = document.createElement('p');
    footerCopyright.textContent = `Handmade by me © ${year}.`;
    footerSection.firstElementChild.appendChild(footerCopyright);
    social.forEach(socialAccount => {
        const socialLink = document.createElement('a');
        if (socialAccount.fontAwesome === true) {
            const faIcon = '<i class="fa fa-' + socialAccount.name + ' fa-2x" aria-hidden="true"></i>';
            socialLink.innerHTML = faIcon;
        }
        else if (socialAccount.img !== '') {
            const iconImg = '<img src="' + socialAccount.img + '">';
            socialLink.innerHTML = iconImg;
        }
        else {
            socialLink.textContent = socialAccount.name;
        }
        socialLink.href = socialAccount.fullLink;
        socialLink.target = '_blank';
        footerSection.lastElementChild.appendChild(socialLink);
    });
})();