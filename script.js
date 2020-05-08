function btnResumeClick(){

    var skillCard=document.getElementById('skillCard');
    skillCard.classList.remove('d-block');
    skillCard.classList.add('d-none');

    var contactCard=document.getElementById('contactCard');
    contactCard.classList.remove('d-block');
    contactCard.classList.add('d-none');

    var resumeCard=document.getElementById('resumeCard');
    resumeCard.classList.add('d-block');

}


function btnSkillClick(){

    var resumeCard=document.getElementById('resumeCard');
    resumeCard.classList.remove('d-block');
    resumeCard.classList.add('d-none');

    var contactCard=document.getElementById('contactCard');
    contactCard.classList.remove('d-block');
    contactCard.classList.add('d-none');

    var skillCard=document.getElementById('skillCard');
    skillCard.classList.add('d-block');

}

function btnContactClick(){

    var resumeCard=document.getElementById('resumeCard');
    resumeCard.classList.remove('d-block');
    resumeCard.classList.add('d-none');

    var skillCard=document.getElementById('skillCard');
    skillCard.classList.remove('d-block');
    skillCard.classList.add('d-none');

    var contactCard=document.getElementById('contactCard');
    contactCard.classList.add('d-block');

}






function resumeLeftClick(){

    
    var resumeCard=document.getElementById('resumeCard');
    resumeCard.classList.remove('d-block');
    var contactCard=document.getElementById('contactCard');
    contactCard.classList.add('d-block');

    
    
}

function resumeRightClick(){

    
    var resumeCard=document.getElementById('resumeCard');
    resumeCard.classList.remove('d-block');
    resumeCard.classList.add('d-none');
    var skillCard=document.getElementById('skillCard');
    skillCard.classList.add('d-block');

    
    
}

function skillLeftClick(){

    
    var skillCard =document.getElementById('skillCard');
    skillCard.classList.remove('d-block')
    var resumeCard=document.getElementById('resumeCard');
    resumeCard.classList.add('d-block');

    
    
}

function skillRightClick(){

    
    var skillCard=document.getElementById('skillCard');
    skillCard.classList.remove('d-block')
    var contactCard=document.getElementById('contactCard');
    contactCard.classList.add('d-block');

    
    
}

function contactLeftClick(){

    
    var contactCard=document.getElementById('contactCard');
    contactCard.classList.remove('d-block');
    var skillCard=document.getElementById('skillCard');
    skillCard.classList.add('d-block');

    
    
}

function contactRightClick(){

    
    var contactCard=document.getElementById('contactCard');
    contactCard.classList.remove('d-block');
    var resumeCard=document.getElementById('resumeCard');
    resumeCard.classList.add('d-block');

    
    
}

