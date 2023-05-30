console.log('JS OK');

// 0 - Recupero dal DOM il contenitore 

const container = document.getElementById('container');
console.log(container);

// 1 - Creo la variabile che dovrà andare in output

let code = '';

// 2 - Inizializzo un ciclo che restituisca i numeri da 1 a 100

for(let i = 1; i <= 100; i++)
{
    // Se il numero è multiplo sia di 3 che di 5
    if(i % 3 === 0 && i % 5 === 0)
    {
        code += '<div class="square bg-red">Fizzbuzz</div>';
    }
    // Se il numero è multiplo di 3
    else if(i % 3 === 0)
    {
        code += '<div class="square bg-green">Fizz</div>';
    }
    // Se il numero è multiplo di 5
    else if(i % 5 === 0)
    {
        code += '<div class="square bg-yellow">Buzz</div>';
    }
    // Altrimenti
    else
    {
        code += `<div class="square">${i}</div>`;
    }
}

// 4 - Inserisco nel contenitore il codice HTML

container.innerHTML = code;