//LISTA DINÂMICA - ARTISTAS
const itens =
[
    {
        gênero: "lofi jazz",
        artista: "Colton Bryan"
    },
    {
        gênero: "lofi jazz",
        artista: "Yugo Ease"
    },
    {
        gênero: "lofi jazz",
        artista: "Lofi Coffee"
    },
    {
        gênero: "pop",
        artista: "Harry Styles"
    },
    {
        gênero: "pop",
        artista: "Lizzo"
    },
    {
        gênero: "pop",
        artista: "Ariana Grande"
    },
    
    {
        gênero: "indie",
        artista: "Arctic Monkeys"
    },
    {
        gênero: "indie",
        artista: "Lana Del Rey"
    },
    {
        gênero: "indie",
        artista: "The Smiths"
    },
    
];

const lista = document.getElementById("lista");
const data = document.getElementById("data");


function search() {
    lista.innerHTML = "";
    for (let i = 0; i < itens.length; i++) {
        if(itens[i].gênero === data.value){
           lista.innerHTML += 
            `
            <li>
                <p> Gênero: ${itens[i].gênero} </p>
                <p> Artista: ${itens[i].artista} </p>
            </li>
            `;
        }
    }
}



//CADASTRO - OPINIÃO

let campo = document.getElementsByClassName("campo");
let info = [];
function getInfo() {
    for (let i = 0; i < campo.length; i++) {
        info.push(campo[i].value);
    }
    console.log(info);
}
