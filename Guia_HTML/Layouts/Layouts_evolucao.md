# Layouts e evolução

Layout tem a ver com a maneira que os elementos estão 
distribuidos na tela.

# Normal flow

Ou Flow layout é a maneira que os elementos `block` e `inline` 
ficam na página.

```Html
<p> Texto block com  <strong>inline</strong> dentro</p>
```

## Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` 
fazendo com que elementos internos com `td` e `tr` possam ser 
usados para montar tabela.

```Html
<table>
    <tr>
        <td> Hora </td>
        <td> 20:00 </td>
    </tr>
    <tr>
        <td> Hora </td>
        <td> 20:38 </td>
    </tr>
</table>
```

# Tabless

Uso das propriedades `float`, `clear` para que os elementos possam 
mudar de posição na tela.

```Html
<div stryle="float: right">
    Esquerda
</div>
<div stryle="float: right">
    Direita
</div>
<div stryle="float: right">
    Normal
</div>
```

## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam 
receber melhor:

- Alinhamento
- Ordenação
- Tamanhos flexíveis

