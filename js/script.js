//ESERCIZIO
// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe.

// Una volta che avete terminato una milestone, fare un push e nel messaggio indicare che avete terminato la milesione numero X.

// BONUS (da fare una volta terminate le singole milestone)
// BONUS 1: Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const team = [
    { 
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'Wayne-barnett-founder-ceo.jpg',
    },

    { 
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },

    { 
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },

    { 
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },

    { 
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },

    { 
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
]

//MILESTONE 1 Stampa in Console
// const card_list = document.getElementById('card-container');
// for(let i = 0; i < team.length; i++){
//     let member = team[i];

//     console.log(`${member.name}, ${member.role}, ${member.image}`)


// MILESTONE 2: Stampare le stesse informazioni su DOM
// const unordered_list = document.querySelector('.unstyled-list')
// for(let i = 0; i < team.length; i++)
//     let member = team[i];

//     let list_item = `<li>${member.name}, ${member.role}, ${member.image}</li>`;
//     unordered_list.innerHTML += list_item;
// }

//BONUS 1
// card_list.innerHTML +=` 
//     <img src="./img/${member.image}" width="200px"/>
//     <p>${member.role}</p>
//     <p>${member.name}</p>`

// }

function drawTeam(person){
    const card_list = document.getElementById('card-container');
    let member_card = `
        <div class="team-card">
            <div class="card-img">
                <img src="./img/${person.image}" class="img-fluid"/>
            </div>
            <div class="card-text bg-white p-2">
                <h5 class="text-center">${person.name}</h5>
                <p>${person.role}</p>
            </div>
        </div>
    `

    card_list.innerHTML += member_card;
}

for(let i = 0; i < team.length; i++){
    let member = team[i];
    drawTeam(member);
    console.log(`${member.name}, ${member.role}, ${member.image}`)

}