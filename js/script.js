console.log('JS OK');

// 0 - Recupero dal DOM il contenitore 

// 1 - Creo la variabile che dovrà andare in output

// 2 - Inizializzo un ciclo che restituisca i numeri da 1 a 100

for(let i = 1; i <= 100; i++)
{
    // Se il numero è multiplo sia di 3 che di 5
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log('FizzBuzz');
    }
    // Se il numero è multiplo di 3
    else if(i % 3 === 0)
    {
        console.log('Fizz');
    }
    // Se il numero è multiplo di 5
    else if(i % 5 === 0)
    {
        console.log('Buzz');
    }
    // Altrimenti
    else
    {
        console.log(i);
    }
}