let input = document.getElementById('input-field');
let submit = document.getElementById('submit');
let list = document.getElementById('list_container');

let newDiv = document.createElement('div');
let p = document.createElement('p');
let trash = document.createElement('button')




function main() {
    submit.addEventListener('click', function (){
        // criar div
        let newDiv = document.createElement('div');
        newDiv.classList.add("tarefa_container");
        // criar paragrafo
        let p = document.createElement('p');
        //criar butao de apagar
        let trash = document.createElement('button');
        trash.innerHTML = "delete";
        trash.classList.add('delete_button');
        //div por p e butao dentro
        newDiv.appendChild(p);
        newDiv.appendChild(trash);

        list.appendChild(newDiv);
        p.innerText = input.value;
        p.addEventListener('click', function(){
            p.style.textDecoration = "line-through";
        })
        trash.addEventListener('click', function(){
        list.removeChild(newDiv)
    })
    })

    
}

main()