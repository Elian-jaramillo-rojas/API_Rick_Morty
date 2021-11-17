const url = 'https://rickandmortyapi.com/api/character/'
const main = document.getElementById('main')
const select = document.getElementById('select')
const cartaMayor = document.getElementById('cartaMayor')
const listaPersonajes=[];
fetch(url)
.then(response=>response.json())
.then(data=>agregarOpciones(data)/*createcCard(data)*/)
.catch(error=>console.log(error))



function agregarOpciones(data) {
    
    
    for(personaje=0;personaje<data.results.length;personaje++){
        listaPersonajes.push(data.results[personaje])
        
        const option = document.createElement("option");
        option.textContent=listaPersonajes[personaje].name
        option.setAttribute('value', listaPersonajes[personaje].id)
        main.appendChild(select)
        select.appendChild(option)
    }
    console.log(listaPersonajes);

    select.addEventListener('change', mostrartodo)
    
   
}

function mostrartodo(){
    if (select.value==0){
        console.log(listaPersonajes);
        listaPersonajes.forEach(personaje=>{

            const titulo = document.createElement('h2')
            const frase = document.createElement('h3')
            const status = document.createElement('h3')
            const div_carta = document.createElement('div')
            const car_imagen = document.createElement('img')
            
            
            car_imagen.classList.add('imagen')
            div_carta.classList.add('card')
            

            
            titulo.textContent =personaje.name
            car_imagen.setAttribute('src',personaje.image)
            status.textContent=personaje.status
            frase.textContent=personaje. species
            
            
            main.appendChild(div_carta)
            div_carta.appendChild(titulo)
            div_carta.appendChild(car_imagen)
            div_carta.appendChild(frase)
            div_carta.appendChild(status)
            cartaMayor.appendChild(div_carta)
            
            
        })

    }

    else{
        return createcCard()

    }

    
}


function createcCard(){
    

    const titulo = document.createElement('h2')
    const frase = document.createElement('h3')
    const status = document.createElement('h3')
    const div_carta = document.createElement('div')
    const car_imagen = document.createElement('img')
    
    car_imagen.classList.add('imagen')
    div_carta.classList.add('card')
    status.classList.add('h3')
    frase.classList.add('h3')
    titulo.classList.add('h2')
    
    titulo.textContent =listaPersonajes[select.value-1].name
    car_imagen.setAttribute('src',listaPersonajes[select.value-1].image)
    status.textContent=listaPersonajes[select.value-1].status
    frase.textContent=listaPersonajes[select.value-1].species
    
    
    main.appendChild(div_carta)
    div_carta.appendChild(titulo)
    div_carta.appendChild(car_imagen)
    div_carta.appendChild(frase)
    div_carta.appendChild(status)
    cartaMayor.appendChild(div_carta)

    
}