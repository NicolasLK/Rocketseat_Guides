## padding

Preenchimento interno da caixa

- padding-top | padding_right | padding-bottom | padding-left
- values: `<length>` | `<percentage>`
```css
div {
    /* shorthand */
    padding: 12px 16px 10px 4px; /* top, right, botton, left ==> 4 valores */
    padding: 12px 16px 0px; /* top, right + left, botton ==> 3 valores */
    padding: 8px 16px; /* top + botton, right + left ==> 2 valores */
    padding: 8px; /* top + right + botton + left ==> 1 valor */
}
```

    * padding poderá causar diferença na largura de um elemento
