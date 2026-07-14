const menuButton = document.querySelector('.toggle-button');
const toggleButtonIcon = document.querySelector('.toggle-button i');
const dropdownMenu = document.querySelector('.dropdown-menu')


// MENU BUTTON
menuButton.addEventListener('click', ()=>{
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

   toggleButtonIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
})



// STATISTICS CARD & STATISTICS RECORD

const  counters = document.querySelectorAll('.stat-num');

counters.forEach( counter => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const currentDisplay = +counter.innerHTML;
        const increment = target / 200;

        if(currentDisplay < target){
            counter.innerHTML = Math.ceil(currentDisplay + increment)
            setTimeout(updateCounter, 30);
        }else{
            counter.innerHTML = target;
        }
    }

    updateCounter();
})

//PROJECT FILTER

const filterButton = document.querySelectorAll('.filter-button');
const projectCard = document.querySelectorAll('.project-card');


filterButton.forEach(activeButton =>{
    activeButton.addEventListener('click', ()=>{
        filterButton.forEach(nonActiveButton =>{
            nonActiveButton.classList.remove('active');
        })
        activeButton.classList.add('active');

       cardToDisplay(activeButton.innerText)
    })

})

function cardToDisplay(currentButton){ 
    if(currentButton === 'Completed'){
        hideProjectCard('completed')

    }else if(currentButton === 'Upcoming'){
        hideProjectCard('upcoming')

    }else if(currentButton === 'Active'){
        hideProjectCard('active')
    }else{
        projectCard.forEach(project =>{
            project.classList.remove('hiden');
        })
    }
}

function hideProjectCard(currentCard){
    projectCard.forEach(project =>{
        project.classList.remove('hiden')
        if(!(project.classList.contains(currentCard)))
            project.classList.add('hiden');
    })
}


// MEMBERS FILTER

const memberFilterButton = document.querySelectorAll('.member-tab-filter-button');
const memberCards = document.querySelectorAll('.member');

memberFilterButton.forEach(activeButton =>{
    activeButton.addEventListener('click', ()=>{
        memberFilterButton.forEach(nonActiveButton =>{
            nonActiveButton.classList.remove('active');
        })
        activeButton.classList.add('active');
        memberToDisplay(activeButton.innerText);
    })
    
})

function memberToDisplay(currentButton){
    if(currentButton === 'Current Members'){
        hideMenberCard('current');
    }
    else if(currentButton === 'Pass-Out Members'){
        hideMenberCard('old')
    }
}

function hideMenberCard(currentMemberCard){
    memberCards.forEach(memberCard =>{
        memberCard.classList.remove('hiden');
        if(!(memberCard.classList.contains(currentMemberCard))){
            memberCard.classList.add('hiden');
        }
    })
}


// FORM

/*const form = document.querySelector('form');
const radioButton = document.querySelectorAll('input[type="radio"]');
const submitButton = document.querySelector('.form-submit');



radioButton.forEach(radio =>{
    radio.addEventListener('change', (event)=>{
        // const status = (event.target.value);

        submitButton.addEventListener('click', ()=>{

            const formData = new FormData(form);
            const status = formData.get("status");
    
            if (status === "Yes"){
                form.action="../HTML/join-us-message-successful.html"

            }else if(status === "No"){
               form.action ="../HTML/join-us-message-declined.html"
        }
        } )
    })
})*/


