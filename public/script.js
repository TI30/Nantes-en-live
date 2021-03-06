'use strict'

window.addEventListener('load', event => {

    let display = document.querySelector('#event')
    let url = new XMLHttpRequest()

    url.open('GET', 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&facet=emetteur&facet=rubrique&facet=lieu&facet=ville', false)

    url.send(null)

    let data = JSON.parse(url.response)

    console.log(data.records);
    

    if (data) {

        data.records.forEach(value => {

            display.innerHTML +=
            `<ul>
            <li class ="events" >
            <h4>${value.fields.nom}</h4>
            <div class="enventsContent">
            <p>${value.fields.description}</p>
            <img  class"imgEvent" src="${value.fields.media_1}">
            </div>
            <p>| Date: ${value.fields.date} -- Début: ${value.fields.heure_debut} -- Lieu: ${value.fields.adresse} -- Téléphone: ${value.fields.lieu_tel !== undefined ? value.fields.lieu_tel : "NC"} |</p>
            <p>| Tarif: ${value.fields.gratuit === "non" ? value.fields.precisions_tarifs : "Gratuit"} -- <a href="${value.fields.lieu_siteweb}">Site web</a> |</p>
            </li>
            </ul>`
        });

    }

})