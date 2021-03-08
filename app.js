const arrows = document.querySelectorAll('.arrow');
const qeustions = document.querySelectorAll('.question');


function displayContent(element){
    // hiding all other elements beside the one that was cliked 
    qeustions.forEach(question =>{ 
        if(question !== element){
            question.nextElementSibling.classList.remove('active');
            question.nextElementSibling.classList.remove('colored');
            question.nextElementSibling.classList.remove('rotate')

        }
    })

    element.nextElementSibling.classList.toggle('active');
    element.childNodes[3].classList.toggle('rotate');
    element.childNodes[1].classList.toggle('colored')

}

qeustions.forEach(
    element =>  {element.addEventListener('click', function(){
        displayContent(this);
    }
)})