// verifica se o localstorage está vazio ou nao
var peopleraw = localStorage.getItem('people')

function isValidPhone(phone){
    if(phone.length != 15){
        confirm("Por favor, insira o ddd com 2 digitos e o número celular com 9 digitos")
    }
}

function phonePattern (e){ 

    // var phonePattern = /[^0-9-() ]+/g
    // if(phonePattern.test(phone)){
    //     confirm("Apenas números sao permitidos no campo telefone")
    // }
    
    // //     if(!Number(phone)){
    // //         confirm("Insira apenas números no campo telefone")
    // //         return false
    // //     }
    //      if(phone.replace(/[- ()]/g, '').length != 11){
    //          confirm("Por favor, insira o ddd com 2 digitos e o número celular com 9 digitos")
    //      }

    console.log(e)
    e.preventDefault()

    if(e.target.value.length == 0){
        e.target.value += '('
    }

    if(e.target.value.length == 3){
        e.target.value += ')'
    }

    if(e.target.value.length == 4){
        e.target.value += ' '
    }
     
    if(e.target.value.length == 10){
        e.target.value += '-'
    }

    if((/[0-9]/g).test(e.key) && e.target.value.length < 15){
        e.target.value += e.key
    }
}

function isValidName(name){
    var namePattern = /[^a-zA-Z ]+/g
    if(namePattern.test(name)){
        confirm("Nao utilize numeros no campo nome")
        
    }
}

if(peopleraw !== null){
    var people = JSON.parse(localStorage.getItem('people'))}
else{
    var people = []
}

//capturando os inputs da tela
var inputName = document.getElementById("name")
var inputPhone = document.getElementById("phone")
var inputXpYes = document.getElementById("xpYes")
var inputXpNo = document.getElementById("xpNo")


//Variaveis utilizadas para o autopreenchimento em caso de edicao na lista
var myUrl = new URL(window.location.href)
var indexCurrentPerson = myUrl.searchParams.get("person")
var currentPerson = people[indexCurrentPerson]

if(indexCurrentPerson != null ){
    inputName.value = currentPerson.name
    inputPhone.value = currentPerson.phone
    if (currentPerson.xp == "Sim"){
        inputXpYes.checked = true
    }else{
        inputXpNo.checked = true
    }
}

//criando um novo usuário quando o botao cadastrar é pressionado
function saveUser(e){
    
    var newName = e.target.name.value
    var newPhone = e.target.phone.value
    var newXp = e.target.xpYes.checked ? "Sim" : "Nao"

    if(!isPhoneNumber(newPhone)){
        return false
    }
    
    newOrEditedUser =
        {
        name: newName,
        phone: newPhone,
        xp: newXp
        }
    
    if(indexCurrentPerson == null){    
        people.push(newOrEditedUser)
        
    }else{
        people[indexCurrentPerson] = newOrEditedUser
    
    }
    localStorage.setItem('people', JSON.stringify(people))
    window.location.href = "/new-tab-modulo-2-projeto-guiado/index.html";
}