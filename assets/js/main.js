var lineList = document.querySelector('tbody.list')

var peopleraw = localStorage.getItem('people')

if(peopleraw !== null){
    var people = JSON.parse(localStorage.getItem('people'))}
else{
    var people = []
}

function renderTable(){
 
    for (person in people){
        
        if(!people[person].xp){
            color = "red"
        }

    
        lineList.innerHTML += `
        <tr 
        style= "background-color:  ${((person % 2 == 0) ? "#fff" : "#eee" )}">
            
        
            <td>
                ${people[person].name}
            </td>
            <td>
                ${people[person].phone}
            </td>
            <td>
                ${people[person].xp == "Sim" ? "<strong style ='color: green'>Sim</strong>" : "<strong style =' color: red'>Nao</strong>"}
            </td>
            <td>
                <button onclick="removePerson(${person})")>Exlcuir</button>
                <a href="/new-tab-modulo-2-projeto-guiado/src/form.html?person=${person}")>Editar</button>
            </td>
        </tr>` 
    }
}

function removePerson(index){
    lineList.innerHTML = ``
    people.splice(index, 1)
    localStorage.setItem('people', JSON.stringify(people))
    renderTable()
}

renderTable()





