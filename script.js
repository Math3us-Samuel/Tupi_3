let credito_block = document.getElementById("credito")
let principal_block = document.getElementById("entrada")
let div_c = document.getElementById("dev_creditos")
let paper = document.getElementById("creditos_p")

let quadro = document.getElementById("b_principal")

let b_aluna = document.getElementById("E_al")
let b_prof = document.getElementById("E_prof")
let b_cre = document.getElementById("b_creditos")

let b_sair = document.getElementById("sair")

function load_s() {
  quadro.value = "Resultado da Pesquisa sobre Bullying\n\nTambém chamado de intimidação \nsistemática, é considerado bullying “todo ato de violência física ou psicológica, intencional e repetitivo que ocorre sem motivação evidente, praticado por indivíduo ou grupo, contra uma ou mais pessoas, com o objetivo de intimidá-la ou agredi-la, causando dor e angústia à vítima\n\nO Bullying precisa ser combatido com coragem e força! neste site fizemos uma pesquisa simples porém intuitiva que nos apresenta duas experiências com este ato, confira nos blocos acima:"
}

function aluna() {
  quadro.value = "__________________________________\nEntrevista com uma aluna\nNay.\n\nSegundo Nay, aluna da instituição pesquisada o bullying pode ser incorporado a partir da infancia sendo influenciafo por fatores como educação, criação e experiências pessoais\n\nEla pontua que por causa de problemas emocionais por vezes o individuo possa praticar o bullying para se sentir melhor\n\nAlgumas consequências pontuadas por Nay seriam:\n•Traumas\n•Transtornos\n•Consequências físicas\n\nPara ela é preciso que sejam feitas mais palestras que defendem a equidade dentre nós serehumanos e que hajam mais políticas públicas por parte do governo\n__________________________________"
}

function prof() {
  quadro.value = "__________________________________\nEntrevista com uma Professora\nProf. Sueli\n\nDe acordo com uma das professoras da instituição, professora Sueli, o bullying vem sendo muito praticado principalmente na Web oque prejudica a vítima em todos os sentidos principalmente na produção escolar.\n\nSegundo a prof.Sueli deve - se denunciar o ou os(geralmente é praticado em grupo) para as autoridades escolares senão o bul continuará Crescendo\n\nEla pontua que deveriam criar mais políticas públicas para enfrentar o bullying, dando o exemplo ela mesma trabalha nisso: Eu sempre trabalho na minha área de projeto de vida, sempre coloco este ponto\n__________________________________"
}

function credit() {
  principal_block.style.display="none"
  credito_block.style.display="block"
  creditos_p.value = " _______________________________ \n      TRABALHO DE PORTUGUÊS\n\n      PARTICIPANTES ATIVOS:\n\n      • Alielsson\n      • Gustavo Fontes\n      • Luiza Mariane \n      • Matheus Samuel\n\n      OBRIGADO POR LER <3\n _______________________________\n\n  [1°] ANO RECURSOS HUMANOS MANHÃ"
}

function sair() {
  credito_block.style.display = "none"
  principal_block.style.display = "block"
}

window.addEventListener("load",load_s)

b_aluna.addEventListener("click",aluna)
b_prof.addEventListener("click",prof)

b_cre.addEventListener("click",credit)
b_sair.addEventListener("click",sair)