const navs = [{
        Text: ' Home ',
        Url: 'index.html',
        Class: ' Home ',
        Alt: ' Click here to view the home link '
    },
    {
        Text: ' About ',
        Url: ' about.html ',
        Class: ' about',
        Alt: ' Click Here to visit about '
    },
    {
        Text: ' Contact ',
        Url: ' contact.html',
        Class: ' contact ',
        Alt: ' Click here to visit contact '
    },
    {
        Text: ' LeaderBoard ',
        Url: ' leaderboard.html ',
        Class: ' leaderboard ',
        Alt: ' Click Here to visit Leaderboard '
    }


];

// Loop that places list items to create the navBar. 
const navBarMarkup = `
${navs.map(nav => `<li class="navlink"><a href=${nav.Url} class="${nav.Class}" alt="${nav.Alt}">${nav.Text}</a>`).join(' ')}</li>
`;

document.querySelector(' ul ').innerHTML = navBarMarkup;

// Creates hamburger icon for mobile navigation

// Select HTML objects

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function

function toggleNav(){
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});