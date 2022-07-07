## Display: block vs display: inline

 - Como as caixas se comportam  em relação às outras caixas
 - Comportamento externo das caixas

 |  ** Block **                     |   ** Inline **
 |----------------------------------|----------------------------------|
 |  Ocupa toda a linha, colocando o |   Elemento do lado do outro;     |
 |próximo elemento abaixo desse;    |                                  |
 |----------------------------------|----------------------------------|
 |  width e height são respeitados; |   width e height não funcionam;  |
 |----------------------------------|----------------------------------|
 |  padding, margin, border irão    |   Somente valores horizontais de |
 |fucionar normalmente.             |margin, padding e border.         |
 |----------------------------------|----------------------------------|
 
Exemplos:
- block: `<p>, <div>, <section>`, todos os headings, `<h1>, <h2>, ...`
- inline: `<a>, <strong>, <span>` e `<em>`
