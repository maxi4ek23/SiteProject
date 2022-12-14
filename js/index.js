const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener('click', () => {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLiink => {
        menuLiink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        console.log(document.getElementsByClassName(menuLink.dataset.goto))
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('active')) {
                document.body.classList.toggle('lock')
                iconMenu.classList.toggle('active');
                menuBody.classList.toggle('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

let position = window.pageYOffset;


const header = document.querySelector('.header');
window.addEventListener('scroll' , (event) => {
    event.preventDefault()
    if (document.documentElement.scrollTop > 1) {
        header.classList.add('scrolled')
    }
    else {
        header.classList.remove('scrolled')
    }
})

const color = document.querySelector('.rotated-block') 

window.addEventListener('scroll', (event) => {
    event.preventDefault()
    if (document.documentElement.scrollTop > 1) {
        
        color.classList.add('none')
    }
    else {
        color.classList.remove('none')
        
    }
})

/*if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log(document.documentElement.scrollTop)
}*/

const items = document.querySelectorAll(".timeline li");

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWhith || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

