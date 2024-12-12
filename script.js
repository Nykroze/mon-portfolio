// une fonction qui me permet "d'ouvrir" mon burger en ajoutant une class a l'evenement 'click'
function menuMobile(){
    const header= document.querySelector('.header');
    const btn =document.querySelector('.burger');
    const links= document.querySelectorAll('nav__links a')

    btn.addEventListener('click', () =>{
      
        header.classList.toggle('show-nav');
    });
// cette parti me permet de masque l'ouverture du burger quand on clique sur un lien 
    links.forEach(link =>{
        link.addEventListener('click', ()=>{
            header.classList.remove('show-nav')
        } )
    })
}
menuMobile();
// une fonction pour le mode nuit et jour
function darkMode(){
    const body=document.querySelector('.body');
    const switchMode= document.querySelector('.switch-dark-Mode');
    switchMode.addEventListener('click', ()=>{
        body.classList.toggle('dark-mode');
        switchMode.classList.toggle('themSwitch');
    })
}
darkMode();
// une fonction pour le boutton "contact"
function popupContact(){
const popupContact = document.querySelector('.popupContact');
console.log(popupContact);
const btnContact = document.querySelector('.contact')
console.log(btnContact);
const btnCancel =document.querySelector('.reset')
console.log(btnCancel);

btnContact.addEventListener('click', ()=>{
    popupContact.classList.add('start');

    
});

btnCancel.addEventListener('click', ()=>{
    popupContact.classList.remove('start')
})
}
popupContact();
// un fonction pour desactiver le scroll


