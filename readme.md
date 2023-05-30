# FIZZBUZZ

## Traccia:

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che

- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi “Buzz” al posto del numero.
- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

### BONUS 1:

Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche (template literals, innerHTML, append, ecc)

### BONUS 2:

Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi usare varie tecniche (style , className, classList)

## Scaletta:

0. Recupero dal DOM il contenitore dove andranno inseriti gli elementi
1. Creo una variabile in cui verranno inseriti tutti gli elementi HTML da stampare in pagina
2. Inizializzo un ciclo che restituisca i numeri da 1 a 100
3. **FINTANTO CHE** il contatore è minore o uguale a 100
   - **SE** il numero attuale è multiplo sia di 3 che di 5
     - Aggiungo nella variabile apposita un elemento con la scritta "FizzBuzz"
     - BONUS - Applico all'elemento uno sfondo rosso
   - **ALTRIMENTI SE** il numero attuale è multiplo di 3
     - Aggiungo nella variabile apposita un elemento con la scritta "Fizz"
     - BONUS - Applico all'elemento uno sfondo verde
   - **ALTRIMENTI SE** il numero attuale è multiplo di 5
     - Aggiungo nella variabile apposita un elemento con la scritta "Buzz"
     - BONUS - Applico all'elemento uno sfondo giallo
   - **ALTRIMENTI**
     - Aggiungo nella variabile apposita un elemento con il numero attuale
4. Inserisco nel contenitore del DOM l'intero codice HTML contenuto nella variabile
