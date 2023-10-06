/*Tema*/

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = '<i class="bi bi-moon-stars"></i>';
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = '<i class="bi bi-sun"></i>';

    }

    }


/*Menu*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bookmark-x-fill');
    navbar.classList.toggle('active');
};



/*Seções e Links*/ /*Texto Sobre Mim*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bi bi-bookmark-x-fill');
    navbar.classList.remove('active');
};




ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading, .principal-sobre, .principal-portfolio, .principal-contatos', { origin: 'top' });




const typed = new Typed('.multiple-text',{
    strings: ['Mestra Em Educação - UFBA - 2023', 'Aluna do Curso de Formação em Programação e Desenvolvimento Web para Mulheres ElasNaTech - Assíncrona Turma 1 - 2023','Aluna Vai na Web - Talentos Digitais - 2023','Aluna Curso de Python - FEA.dev|USP - Iniciante ao Intermediário - 2023','Aluna Aprendendo a Programar com Games - Fábrica de Programadores - UANE|FDR - 2023'], 
    typeSpeed: 150,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
    
});




const el = document.querySelector('#text');
const text = 'Mulher - Preta - Moradora da Periferia - De Salvador - Bahia';
const interval = 200;

function showText(el, text, interval) {

    const char = text.split('').reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval);

}

showText(el, text, interval);

/*Slider*/

let count = 1;
document.getElementById('radio1').checked = true;


setInterval(function() {
    nextImage();
}, 4000)

function nextImage() {
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById('radio'+count).checked = true;
}


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 7000); 
}





