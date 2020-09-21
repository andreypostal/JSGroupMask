class Mascara {
  constructor(elemento, padroes) {
    // ELEMENTO = ID
    this.elemento = document.getElementById(elemento);
    if (this.elemento == null) {
      console.error("Elemento não encontrado");
    }

    // verificação burrinha, mudar depois
    padroes.forEach((element, id) => {
      padroes.forEach((elm, id2) => {
        if (
          id != id2 &&
          element.replace(/[^_]/g, "").length == elm.replace(/[^_]/g, "").length
        ) {
          console.error("As mascaras não podem ter tamanhos iguais");
        }
      });
    });

    this.padroes = [];
    this.val = [];
    this.maior = 0;

    padroes.forEach((element) => {
      this.padroes.push(element.split(""));
      this.maior =
        this.maior > element.replace(/[^_]/g, "").length
          ? this.maior
          : element.replace(/[^_]/g, "").length;
      this.val.push([]);
    });
  }

  update() {
    let val = this.elemento.value
      .replace(/[^0-9]/g, "")
      .substr(0, this.maior)
      .split("");

    let el = this;

    this.padroes.forEach((element, id) => {
      el.val[id] = [];
      let cnt = 0;
      for (let i = 0; i < val.length && cnt < element.length; i++) {
        let num = val[i];

        if (el.val[id].length < cnt + 1) el.val[id].push(" ");

        if (cnt < element.length) {
          if (element[cnt] != "_") (el.val[id][cnt] = element[cnt]), i--;
          else el.val[id][cnt] = num;
        }

        cnt++;
      }
    });

    let valor;
    let menor = this.maior;
    this.padroes.forEach((element, id) => {
      let tam = element.join("").replace(/[^_]/g, "").length;
      if (val.length <= tam) {
        if (tam <= menor) {
          menor = tam;
          valor = this.val[id].join("");
        }
      }
    });
    this.elemento.value = valor;
  }
}
