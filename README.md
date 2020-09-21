# JSGroupMask
Group of masks for input, with different number patterns.

Crie máscaras dinâmicas para os seus inputs de texto, como CPF e CNPJ, telefones fixos e celulares, etc.

## Como usar

* Importe o arquivo **mascara.js**

* Crie o input que receberá a máscara
```html
 <input type="text" id="cpf-cnpj" />
```

* Instancie a máscara a ele, passando como parâmetro seu ID e um array contendo as máscaras.
```javascript
let masc = new Mascara("cpf-cnpj", [
  "__.___.___/____-__",
  "___.___.___-__",
]);
```
Os caracteres *_* serão os espaços preenchidos por números. Demais caracteres serão considerados separadores.

* Chame o método update sempre que quiser aplicar a máscara no valor atual do input.
```javascript
masc.update();
```
Como no exemplo, aplicando o método para todo char inserido, podemos usar o trecho de código:
```javascript
$("#cpf-cnpj").keyup(function () {
  masc.update();
});
```

*Versão desenvolvida rapidamente, contém alguns bugs, eu sei* 
