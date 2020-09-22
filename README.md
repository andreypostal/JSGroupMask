# JSGroupMask

Group of masks for input, with different number patterns.

Crie máscaras dinâmicas para os seus inputs de texto, como CPF e CNPJ, telefones fixos e celulares, etc.

## Como usar

- Import the file **mask.js**<br>
  Importe o arquivo **mask.js**

- Create the input that will receive the mask<br>
  <small>Crie o input que receberá a máscara</small>

```html
<input type="text" id="cpf-cnpj" /> <input type="text" id="phone" />
```

- Instantiate the mask to it, having as parameters the ID and an array with the masks<br>
  Instancie a máscara a ele, passando como parâmetro seu ID e um array contendo as máscaras.

```javascript
let mask_cpf_cnpj = new Mask("cpf-cnpj", [
  "__.___.___/____-__",
  "___.___.___-__",
]);

let mask_phone = new Mask("phone", [
  "+__ (__) ____-____",
  "+__ (__) _____-____",
  "+___ (__) _____-____",
]);
```

The char **\_** will be the space filled by numbers. Other characters (except for numbers) will be considered separators.<br>
Os caracteres **\_** serão os espaços preenchidos por números. Demais caracteres (exceto números) serão considerados separadores.

- Call the method **update** whenever you want to apply the mask to the current value of the input<br>
  Chame o método **update** sempre que quiser aplicar a máscara no valor atual do input.

```javascript
mask_cpf_cnpj.update();
mask_phone.update();
```

As in the example, applying the method to every key pressed, we can use the following code:<br>
Como no exemplo, aplicando o método para todo char inserido, podemos usar o trecho de código:

```javascript
$("#cpf-cnpj").keyup(function () {
  masc.update();
});

$("#phone").keyup(function () {
  mask_phone.update();
});
```

_Version developted really quickly, it is really simples, has some bugs, but does the job_<br>
_Versão desenvolvida rapidamente, é muito simples, tem alguns bugs, mas faz o que precisa_
