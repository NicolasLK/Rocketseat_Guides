# Trabalhando com fontes

Tipografia transmite mensagem
    -negrito
    -tamanho
    -estilo
---------------------------------------------------

## Basic Font Properties

* font-family
* font-height
* font-style
* font-size
-----------------------------------------------------

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* Inclui * fallback * font

```css
p {
    font-family: "Times New Roman", Times, serif
}
````
- serif
- sans
----------------------------------------------------------
## Font Weight

* Peso da fonte

```css
p {
    font-weight: bold;
}
````

----------------------------------------------------------
## Font Style

* O estilo da fonte

```css
span {
    font-style: italic;
}
````
----------------------------------------------------------------
## Font Size

* O tamanho da fonte

```css
p {
    font-size: 18px;
}
````
-------------------------------------------------------------------
## Web fonts

- fontes  do sistema x fontes da web
- como usar fontes para web

    * @font-face
    * @import
    * link
-------------------------------------------------------------------

## Font-variant

* variações na apresentação fonte

```css
p {
    font-variant: small-caps;
}
````
-------------------------------------------------------------------
## Font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chaves como: expaned, condensed, normal
* aceita porcentagens de 50% a 200%

```css
p {
    font-stretch: expanded;
}
```
-------------------------------------------------------------------
## letter-spacing

* Espaços entre caracteres

```css
p {
    letter-spacing: 4px;
}
````
-------------------------------------------------------------------
## word-spacing

* Espaços entre caracteres

```css
p {
    word-spacing: 4px;
}
````
-------------------------------------------------------------------
## line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
````
-------------------------------------------------------------------
## text-transform

* Transformação do texto

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */
}
````
-------------------------------------------------------------------
## text-decoration

* Aparencia decorativa de um texto
* line: underline | overline | line-through
    * Podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: '<color>' values

```css
p {
    text-decoration: underline; /* shorthand */
}
````
-------------------------------------------------------------------
## text-align

* Alinhamento de um texto

```css
p {
    text-align: center; /* left | right | center | justify */
}
````
-------------------------------------------------------------------
## text-shadow

* Sombra aplicada a um evento
* permite múltiplos valores

```css
p {
    text-shadow: 1px 1px 1px red, 
                2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
````
-------------------------------------------------------------------
## Shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family.

```css
p {
    /* -style, -variant, -weight, -stretch, -size, line-height, e -family. */
    font: italic normal bold normal 3em/1.5 Helvica, Arial, sans-serif;
}
````
