// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain (naamAndDomein) {
    // Declareer teruggave postitie van string en declareer domein
    fromPosition = naamAndDomein.indexOf("@")
    domain = naamAndDomein.substring(fromPosition + 1)
    //  name = naamAndDomein.substring(0, fromPosition + 1)
    return domain
}
//input
const output1 = getEmailDomain("n.eeken@novi-education.nl")
const output2 = getEmailDomain("t.mellink@novi.nl")
const output3 = getEmailDomain("a.wiersma@outlook.com")

// output
console.log(output1)
console.log(output2)
console.log(output3)



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


function typeofEmail (nameAndDomein) {
    // Declareer teruggave postitie van string en declareer domein
    fromPosition = nameAndDomein.indexOf("@")
    domain = nameAndDomein.substring(fromPosition)


    if (!domain.includes("@")) {
        return "Geef een emailadres op"
    } else if (domain.includes("novi")) {
        return "Medewerker"
    } else if (domain.includes("-education"))  {
        return "Student"
    } else if (domain.includes("outlook.com")) {
        return "Extern"
    }
}

// Input
const output4 = typeofEmail("email!adres")
const output5 = typeofEmail("t.mellink@novi.nl")
const output7 = typeofEmail("novi.nlaapjesk@outlook.com")
const output8 = typeofEmail("a.wiersma@outlook.com")

//Output
console.log(output4)
console.log(output5)
console.log(output7)
console.log(output8)

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in


function checkEmailValidity (emailadres) {
    lastChar = emailadres.length -1
    condition3 = emailadres.substring(lastChar)

    if (emailadres.includes("@") || !condition3.includes(".") || !emailadres.includes(",")) {
        console.log("true")
    } else console.log("false")
}

input10 = checkEmailValidity("n.eeken@novi.nl")
input11 = checkEmailValidity("tessmellink@novi.nl")
input12 = checkEmailValidity("n.eekenanovi.nl")
input13 = checkEmailValidity("n.eeken@novinl.")
input14 = checkEmailValidity("tessmellink@novi,nl")

