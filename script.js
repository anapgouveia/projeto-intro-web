//SEMANA 1
// ITEM: SERIE: PEAKY BLINDERS

const string = "Peaky Blinders"
const number = 2013
const boolean = "true"

//informacao = sao irmaos?
const personagem1 = "Thomas Shelby"
const idade1 = 23
const informacao1 = true

const personagem2 = "Arthur Shelby"
const idade2 = 43
const informacao2 = true

const personagem3 = "John Shelby"
const idade3 = 30
const informacao3 = false

//média dos valores
let t1 = 23
let t2 = 43
let t3 = 55
let mediaT = (t1 + t2 + t3)/3
// console.log("média dos valores númericos:", mediaT)

// imprimindo os valores booleanos
const verificarInformacao = informacao1 && informacao2 && informacao3
// console.log(verificarInformacao)


//SEMANA 2
const familia = ["Thomas Shelby", "Arthur Shelby", "John Shelby", "Finn Shelby", "Polly Gray"]

// console.log("Personagem 1:", personagem1.toUpperCase(), "\nIdade:", idade1, "\nSão irmãos Shelby?", informacao1, "\nFamília Shelby:", familia)
// console.log("Personagem 2:", personagem2.toUpperCase(), "\nIdade:", idade2, "\nSão irmãos Shelby?", informacao2, "\nFamília Shelby:", familia)
// console.log("Personagem 3:", personagem3.toUpperCase(), "\nIdadde:", idade3, "\nSão irmãos Shelby?", informacao3, "\nFamília Shelby:", familia)


// SEMANA 3 - Transforme os itens que criamos nas últimas semanas em objetos.
serie = {
    titulo: "Peaky Blinders",
    lancamento: 2013,
    internacional: "true"
}

const personagens = []
personagens.push(
    {
        nome: "Thomas Shelby",
        idade: 23,
        informacao: true,
        familia : ["Thomas Shelby", "Arthur Shelby", "John Shelby", "Finn Shelby", "Polly Gray"],
        img:"./media/thomas-shelby.jpeg"
    },
    {
        nome: "Arthur Shelby",
        idade: 43,
        informacao: true,
        familia : ["Thomas Shelby", "Arthur Shelby", "John Shelby", "Finn Shelby", "Polly Gray"],
        img: "./media/arthur-shleby.jpeg"
    },
    {
        nome: "John Shelby",
        idade: 30,
        informacao: true,
        familia : ["Thomas Shelby", "Arthur Shelby", "John Shelby", "Finn Shelby", "Polly Gray"],
        img: "./media/john-shleby.jpeg"
    }
)
    // console.log('Personagens : ', personagens)

    //Semana 4
 //let nomeDaSerie = confirm ("A série é Peaky Blinders?")
    //if (nomeDaSerie){
    //alert("a série foi validada")
 //}
 //else {
    //alert("A série não foi validada")
 //}


//Semana 5
for (let i = 0; i<= familia.length; i++){
    // console.log(`${personagens[i].nome},${personagens[i].idade},${personagens[i].informacao},`)

}

//SEMANA 6
// 
function imprimeRelatorio(personagem){
    let person = `Personagem: ${personagem.nome.toUpperCase()}, 
    Idade:${personagem.idade} 
    São irmãos Shelby? ${personagem.informacao ? "sim" : "não"}`
    console.log(person)
    
}


function imprimeRelatorioPersonagens(personagens){
    for (const personagem of personagens) {
        imprimeRelatorio(personagem)
        console.log("=".repeat(40))
    }
}
//imprimeRelatorioPersonagens(personagens)

function pesquisaPersonagem(){
    let nome = document.getElementById("nome").value
    let perosnagemFiltrado = personagens.filter(
        personagem =>{
            return personagem.nome.toUpperCase().includes(nome.toUpperCase())
        }
    

    )
    if(perosnagemFiltrado.length){
       gerarCard(perosnagemFiltrado)
    }else{
        alert("Personagem não encontrado")
        gerarCard(personagens)
    }


}
//let algumaCoisa = prompt("Digite o nome do personagem")
//pesquisaPersonagem(personagens, algumaCoisa)

function gerarCard(personagens){
    let cards = document.getElementById("cards")
    cards.innerHTML = ""
  let card 
  for (const personagem of personagens) {
    card = `<section class="card" id="card">
    <figure>
      <img src="${personagem.img}" alt="${personagem.nome}" />
    </figure>
    <article class="cardData">
      <ul>
        <li>Nome: ${personagem.nome}</li>
        <li>Idade: ${personagem.idade}</li>
        <li>
          Parentes : ${personagem.familia.join(", ")}
        </li>
      </ul>
    </article>
  </section>
</section>` 
cards.innerHTML += card 
    
  }

}
gerarCard(personagens)

