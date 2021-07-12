// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades1 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]
const grades2 = [6, 4, 5]
const grades3 = [8, 9, 4, 6, 10]

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// declare counter for cumlaude students
let counter = 0

// check every grade meeting condition and count
for (let i = 0; i < grades1.length; i++) {
    if (grades1[i] >= 8){
        counter++ // counter = counter + 1
    }
}
// log out the result
console.log(counter)



/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function countCumlaude (grades) {
    // declare counter for cumlaude students
    counter = 0

    // check every grade meeting condition and count
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8){
            counter++ // counter = counter + 1
        }
    }
    // return calculated value from function
    return counter
}

// input from array
input1 = countCumlaude(grades1)
input2 = countCumlaude(grades2)
input3 = countCumlaude(grades3)


// output the result
console.log(input1)
console.log(input2)
console.log(input3)


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// Declare total and average (total divided by amount = average)
let total = 0
let avg = 0

// calculate total and average
for (let i = 0; i < grades1.length; i++) {
    total = total + grades1[i]
    avg = total / grades1.length
}
// log result
console.log(avg)

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function average (inputgrades) {
    // Declare total and average (total divided by amount = average)
    total = 0
    avg = 0

// calculate total and average
    for (let i = 0; i < inputgrades.length; i++) {
        total = total + inputgrades[i]
        avg = total / inputgrades.length
    }
    return avg
}

//Input
input4 = average (grades1)
input5 = average (grades2)
input6 = average (grades3)

//Output
console.log(input4)
console.log(input5)
console.log(input6)



/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
console.log(input4.toFixed(2))
console.log(input5.toFixed(2))
console.log(input6.toFixed(2))


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// Declare highest number
let highestNumber = 0

// Check which value in the array is the highest number
for (let i = 0; i < grades1.length; i++) {
    if (highestNumber < grades1[i]) {
        highestNumber = grades1[i]
    }
}
// output result
console.log(highestNumber)



/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highNumber (inputGrades) {
// Declare highest number
    highestNumber = 0

// Check which value in the array is the highest number
    for (let i = 0; i < inputGrades.length; i++) {
        if (highestNumber < inputGrades[i]) {
            highestNumber = inputGrades[i]
        }
    }
    return highestNumber
}

//Input Arrays
input7 = highNumber(grades1)
input8 = highNumber(grades2)
input9 = highNumber(grades3)


// output result
console.log(input7)
console.log(input8)
console.log(input9)
