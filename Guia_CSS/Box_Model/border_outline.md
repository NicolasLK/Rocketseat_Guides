## border ( e outline)

As bordas da caixa

- values: `<border-style>` | `<border-width>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<length>`
    - color: `<color>`

```css
div {
    /* shorthand */
    border-top: solid 2px; /* top | right | bottom | left */

    /* style */
    border: solid;

    /* width <length> | style */
    border: outset dotted;

    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green;
}
```
### E Outline?

- Difere de 4 sentidos:
    - Não modifica o tamanho da caixa, pois não é parte do box Model
    - Poderá ser diferente de retangular
    - Não permite ajustes individuais
    - Mais usados pelo user agent para acessibilidade

