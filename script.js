let input = document.getElementById('input-field');
let submit = document.getElementById('submit');
let list = document.getElementById('list_container');

let newDiv = document.createElement('div');
let p = document.createElement('p');
let trash = document.createElement('button')




function main() {
    submit.addEventListener('click', function (){
        // Criação de uma tag <div> 
        let newDiv = document.createElement('div');
        newDiv.classList.add("tarefa_container");

        // Criação de uma tag <p> 
        let p = document.createElement('p');

        //Criação de um butão de apagar elemento 
        let trash = document.createElement('button');
        trash.innerHTML = "🗑️";
        trash.classList.add('delete_button');

        //Colocar o <p> e o butão dentro da <div>
        newDiv.appendChild(p);
        newDiv.appendChild(trash);

        //Colocar a <Div> dentro do container
        list.appendChild(newDiv);
        p.innerText = input.value;
        p.addEventListener('click', function(){
            p.style.textDecoration = "line-through";
        })

        // Função de apagar ao clicar no butão de apagar
        trash.addEventListener('click', function(){
        list.removeChild(newDiv)
        })
    })
        
    
}

main()