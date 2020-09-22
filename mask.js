class Mask {
  constructor(element, patterns) {
    // element = ID
    this.element = document.getElementById(element);
    if (this.element == null) {
      console.error("Element not found");
    }

    this.patterns = [];
    this.text_value = [];
    this.max_size = 0;

    // should i make this better?
    // check for duplicity of sizes, initialize patterns and values and find the max size
    patterns.forEach((element, id) => {
      let element_size = element.replace(/[^_]/g, "").length;
      patterns.forEach((elm, id2) => {
        if (id != id2 && element_size == elm.replace(/[^_]/g, "").length) {
          console.error("Masks cannot have the same size");
        }
      });

      this.patterns.push(element.split(""));
      this.max_size =
        this.max_size > element_size ? this.max_size : element_size;
      this.text_value.push([]);
    });
  }

  update() {
    // get the value of the element with just numbers
    let text_value = this.element.value
      .replace(/[^0-9]/g, "")
      .substr(0, this.max_size)
      .split("");

    let el = this;

    // get the value into each pattern
    this.patterns.forEach((element, id) => {
      el.text_value[id] = [];
      let cnt = 0;
      for (let i = 0; i < text_value.length && cnt < element.length; i++) {
        let num = text_value[i];

        if (el.text_value[id].length < cnt + 1) el.text_value[id].push(" ");

        if (cnt < element.length) {
          if (element[cnt] != "_") (el.text_value[id][cnt] = element[cnt]), i--;
          else el.text_value[id][cnt] = num;
        }

        cnt++;
      }
    });

    // select the value to put in the input
    let value;
    let min_size = this.max_size;
    this.patterns.forEach((element, id) => {
      let size = element.join("").replace(/[^_]/g, "").length;
      if (text_value.length <= size) {
        if (size <= min_size) {
          min_size = size;
          value = this.text_value[id].join("");
        }
      }
    });

    this.element.value = value;
  }
}
