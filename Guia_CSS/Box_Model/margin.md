## margin

Espaços entre os elementos 

- margin-top | margin-right | margin-botton | margin-left
- values: `<length>` | `<percentage>` | auto

```css
div {
    /* shorthand */
    margin: 12px 16px 10px 4px; /* top, right, botton, left ==> 4 valores */
    margin: 12px 16px 0; /* top, right + left, botton ==> 3 valores */
    margin: 8px 16px; /* top + botton, right + left ==> 2 valores */
    margin: 8px; /* top + right + botton + left ==> 1 valor */
}
```
    * Cuidadado com  margin collapsing (top se ajunta ao botton)
