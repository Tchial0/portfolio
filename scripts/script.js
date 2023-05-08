// add class navbarDark on navbar scroll
/*const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}*/

var myFullpage = new fullpage('#fullpage', {
    anchors: ['home', 'about', 'projects'],
    sectionsColor: ['#C63D0F', '#1BBC9B', 'black'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'Projects'],
    showActiveTooltip: true
});

