/*==================
    Moving Menu Header
==================*/
let headerEl = document.querySelector("header");
let scrollLinks = document.querySelectorAll(".scroll");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  let headerY = headerEl.getBoundingClientRect().height;

  if (y > headerY) {
    headerEl.classList.add("fixed");
  } else {
    headerEl.classList.remove("fixed");
  }
});

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    let reference = link.getAttribute("href");

    let element = document.querySelector(reference);
    let position = element.offsetTop - 100;

    window.scrollTo({ left: 0, top: position });
  });
});

/*==================
    Menu
==================*/
let headerBtns = document.querySelectorAll(".header-nav .btn");

let modal = document.querySelector(".modal");

let menuItems = document.querySelectorAll(".nav-links a");

let headerItems = [modal, ...menuItems];

headerItems.forEach((e) => {
  e.addEventListener("click", () => {
    headerBtns.forEach((btn) => {
      btn.classList.toggle("active");
    });
  });
});

headerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    headerBtns.forEach((btn) => {
      btn.classList.toggle("active");
    });
  });
});

/*==================
    Açougue
==================*/
let bovinos = document.querySelector("#bovinos .item-container");

let acougueObject = {
  bovinos: {
    firstClick: true,

    counter: 0,

    picanha: {
      nome: "Picanha",
      imagem: "midia/meat-example.jpg",
      unidade: 500,
      preco: 50,
    },

    maminha: {
      nome: "Maminha",
      imagem: "midia/maminha-p.png",
      unidade: 500,
      preco: 50,
    },

    fraldinha: {
      nome: "Fraldinha",
      imagem: "midia/meat-example.jpg",
      unidade: 500,
      preco: 50,
    },

    patinho: {
      nome: "Patinho",
      imagem: "midia/meat-example.jpg",
      unidade: 500,
      preco: 50,
    },

    acem: {
      nome: "Acem",
      imagem: "midia/meat-example.jpg",
      unidade: 500,
      preco: 50,
    },
  },
  avinos: {
    firstClick: true,

    counter: 0,

    peitoDeFrango: {
      nome: "Peito de Frango",
      imagem: "midia/chicken.jpg",
      unidade: 500,
      preco: 50,
    },

    coxaESobrecoxa: {
      nome: "Coxa e Sobrecoxa",
      imagem: "midia/chicken.jpg",
      unidade: 500,
      preco: 50,
    },

    frangoAPassarinho: {
      nome: "Frango à Passarinho",
      imagem: "midia/chicken.jpg",
      unidade: 500,
      preco: 50,
    },

    tulipa: {
      nome: "Túlipa",
      imagem: "midia/chicken.jpg",
      unidade: 500,
      preco: 50,
    },
  },
  suinos: {
    firstClick: true,

    counter: 0,

    panceta: {
      nome: "Panceta",
      imagem: "midia/piggy.jpg",
      unidade: 500,
      preco: 50,
    },

    lomboSuino: {
      nome: "Lombo Suíno",
      imagem: "midia/piggy.jpg",
      unidade: 500,
      preco: 50,
    },

    linguicaToscana: {
      nome: "Linguiça Toscana",
      imagem: "midia/piggy.jpg",
      unidade: 500,
      preco: 50,
    },

    bisteca: {
      nome: "Bisteca",
      imagem: "midia/piggy.jpg",
      unidade: 500,
      preco: 50,
    },
  },
  peixaria: {
    firstClick: true,

    counter: 0,

    tilapia: {
      nome: "Tilápia",
      imagem: "midia/peixes.png",
      unidade: 500,
      preco: 50,
    },

    cavalinha: {
      nome: "Cavalinha",
      imagem: "midia/peixes.png",
      unidade: 500,
      preco: 50,
    },

    pacu: {
      nome: "Pacu",
      imagem: "midia/peixes.png",
      unidade: 500,
      preco: 50,
    },

    pescadaBranca: {
      nome: "Pescada Branca",
      imagem: "midia/peixes.png",
      unidade: 500,
      preco: 50,
    },

    salmao: {
      nome: "Salmão",
      imagem: "midia/peixes.png",
      unidade: 500,
      preco: 50,
    },

    camarao: {
      nome: "Camarão",
      imagem: "midia/peixes.png",
      unidade: 500,
      preco: 50,
    },
  },
};

function createAcougue(object) {
  let array = Object.entries(object);
  let sections = {};

  array.forEach(([category, x]) => {
    sections[category] = document.querySelector(`#${category} .item-container`);
  });

  for (let counter = 0; counter < array.length; counter++) {
    let [category, categoryValues] = array[counter];

    let values = Object.values(categoryValues);

    let htmlString = "";

    for (let i = 2; i < values.length; i++) {
      htmlString += createAcougueItem(values[i], i);
    }

    sections[category].innerHTML += htmlString;
  }
}

createAcougue(acougueObject);

function createAcougueItem(obj, i) {
  let htmlClass;

  switch (i) {
    case 2:
      htmlClass = "main-box";
      break;
    case 3:
      htmlClass = "right-box";
      break;
    default:
      htmlClass = "back-box";
  }

  let newProperty = `
    <div class="box ${htmlClass}">
        <img src=${obj.imagem} alt="Pedaços de carne crua">
        <div class="item-description">
            <h4>${obj.nome}</h4>
            <div class="item-details">
                <p>${obj.unidade}g</p>
                <p>R$ ${obj.preco}</p>
            </div>
        </div>
        <div class="buy">
            <div>
                <button id="remove">-</button>
                <div class="item-counter">0</div>
                <button id="add">+</button>
            </div>
        </div>
    </div>
    `;

  return newProperty;
}

/*==================
    Slider
==================*/

let destaqueBoxes = document.querySelectorAll("#destaques .box");
let acougueButtons = document.querySelectorAll(
  "#acougue .item-container .button-container .button "
);
let points = document.querySelectorAll(".point");

let slideRightDestaque = sliderDestaque();
let slideAcougue = sliderAcougue();

destaqueBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    slideRightDestaque(destaqueBoxes);
  });
});

function sliderDestaque() {
  let main = 0;

  let slideRight = function (array) {
    if (main === array.length - 1) {
      main = 0;
    } else {
      main++;
    }

    points.forEach((point) => {
      point === points[main]
        ? point.classList.toggle("active")
        : point.classList.remove("active");
    });

    let current = array[main];
    let previous = array[main - 1] ?? array[array.length - 1];
    let next = array[main + 1] ?? array[0];

    current.setAttribute("class", "box main-box");
    previous.setAttribute("class", "box left-box");
    next.setAttribute("class", "box right-box");

    array.length > 3 ? back.setAttribute("class", "box back-box") : null;

    clearInterval(interval);
    interval = window.setInterval(function () {
      slideRight(array);
    }, 10000);
  };

  let interval = window.setInterval(function () {
    slideRight(destaqueBoxes);
  }, 10000);

  return slideRight;
}

acougueButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let currentSection = btn.parentElement.parentElement.parentElement;
    let acougueBoxes = currentSection.querySelectorAll(".box");
    slideAcougue(acougueBoxes, btn.id, currentSection.id);
  });
});

function sliderAcougue() {
  let slide = function (array, action, id) {
    let section = acougueObject[id];

    let main = acougueObject[id]["counter"];

    if (action === "previous") {
      if (section.firstClick) {
        return;
      }

      if (main === 0) {
        main = array.length - 1;
      } else {
        main--;
      }

      for (let element of array) {
        element.setAttribute("class", "box back-box");
      }

      let back =
        main >= 2
          ? array[main - 2]
          : main === 1
          ? array[array.length - 1]
          : array[array.length - 2];

      let current = array[main];
      let previous = array[main - 1] ?? array[array.length - 1];
      let next = array[main + 1] ?? array[0];

      current.setAttribute("class", "box main-box");
      previous.setAttribute("class", "box left-box");
      next.setAttribute("class", "box right-box");
      back.setAttribute("class", "box back-box");
    } else if (action === "next") {
      if (section.firstClick) {
        section.firstClick = false;
      }

      if (main === array.length - 1) {
        main = 0;
      } else {
        main++;
      }

      let back =
        main >= 2
          ? array[main - 2]
          : main === 1
          ? array[array.length - 1]
          : array[array.length - 2];
      let current = array[main];
      let previous = array[main - 1] ?? array[array.length - 1];
      let next = array[main + 1] ?? array[0];

      current.setAttribute("class", "box main-box");
      previous.setAttribute("class", "box left-box");
      next.setAttribute("class", "box right-box");
      back.setAttribute("class", "box back-box");
    }
    acougueObject[id]["counter"] = main;
  };

  return slide;
}

/*==================
    Açougue Dropdown
==================*/

let categories = document.querySelectorAll("#acougue .section-bar");
let acougue = document.querySelector("#acougue");

categories.forEach((cat) => {
  cat.addEventListener("click", (e) => {
    let current = e.currentTarget;

    categories.forEach((cat) => {
      cat === current
        ? cat.classList.toggle("active")
        : cat.classList.remove("active");
    });
  });
});

/*==================
    Buy Counter
==================*/

let toCartButton = document.querySelectorAll(".buy button");

toCartButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    let parent = btn.parentElement.parentElement.parentElement;
    toCart(btn.id, parent);
  });
});

function toCart(action, parentElement) {
  let itemCounter = parentElement.querySelector(".item-counter");

  // como vamos saber em qual elemento estamos???

  let counter = Number(itemCounter.textContent);

  if (counter > 0) {
    action === "add"
      ? (itemCounter.textContent = ++counter)
      : (itemCounter.textContent = --counter);
  } else {
    action === "add" ? (itemCounter.textContent = ++counter) : null;
  }
}

/*================
    Form
================*/

let nomeEl = document.getElementById("nome");
let emailEl = document.getElementById("email");
let telefoneEl = document.getElementById("telefone");
let inputElements = [nomeEl, emailEl, telefoneEl];

inputElements.forEach((el) => {
  el.addEventListener("focus", focusInput);
  el.addEventListener("blur", blurInput);

  if (el.id === "nome") {
  }

  if (el.id === "telefone") {
    let ddd = 2;
    el.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
      let formatted = "";

      if (value[0] === "0") {
        ddd = 3;
      } else {
        ddd = 2;
      }

      if (value.length > ddd) {
        let areaCode = value.slice(0, ddd);
        let number = value.slice(ddd);
        if (number.length > 3 && number.length <= 8) {
          number = number.slice(0, 4) + "-" + number.slice(4);
        } else if (number.length > 8) {
          number = number.slice(0, 5) + "-" + number.slice(5);
        }

        if (number[number.length - 1] === "-") {
          number = number.slice(0, -1);
        }
        formatted = `(${areaCode}) ${number}`;
      } else {
        formatted = value;
      }

      e.target.value = formatted;
    });
  }
});

function focusInput(e) {
  let textEl = e.target.nextElementSibling;
  textEl.classList.add("active");
}

function blurInput(e) {
  let textEl = e.target.nextElementSibling;
  if (e.target.value === "") {
    textEl.classList.remove("active");
  }
  if (e.target.id === "nome") {
    e.target.value = e.target.value.replace(/(^\S| \S)/g, (a) =>
      a.toUpperCase()
    );
  }
}

function validaTelefone(elemento, valor) {
  let telefone = valor;
  let dddString;
  if (telefone[0] === "0") {
    dddString = telefone.slice(0, 3);
    telefone = telefone.slice(3);

    let ddd = Number(dddString);
    if (ddd >= 11 && ddd <= 99) {
      console.log(`O ddd está correto!`);
    } else {
      console.log(`O ddd está errado`);
    }
  } else {
    dddString = telefone.slice(0, 2);
    telefone = telefone.slice(2);
    console.log(dddString);
    let ddd = Number(dddString);
    if (ddd >= 11 && ddd <= 99) {
      console.log(`O ddd está correto!`);
    } else {
      console.log(`O ddd está errado`);
    }
  }

  dddString = `(${dddString})`;

  if (telefone.length === 9) {
    let primeiraParte = telefone.slice(0, 6);
    let segundaParte = telefone.slice(6);
    telefone = `${dddString} ${primeiraParte}-${segundaParte}`;
  } else if (telefone.length <= 8 && telefone.length > 0) {
    let primeiraParte = telefone.slice(0, 5);
    let segundaParte = telefone.slice(5);
    telefone = `${dddString} ${primeiraParte}-${segundaParte}`;
  } else {
    console.log("telefone inválido");
  }

  return telefone;
}

// radio Section
let radioBtns = document.querySelectorAll(".radio-section .form-field");
let radioBtnCheck = false;
radioBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.firstElementChild.classList.contains("checked")) {
      btn.firstElementChild.classList.remove("checked");
      radioBtnCheck = false;
    } else {
      btn.firstElementChild.classList.add("checked");
      radioBtnCheck = true;
    }

    radioBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.firstElementChild.classList.remove("checked");
      }
    });
    console.log(radioBtnCheck);
  });
});

// select Section
let dropdown = document.querySelector(".dropdown");
let dropdownSelected = document.querySelector(".dropdown-selected");
let dropdownOptions = document.querySelector(".dropdown-options");

dropdownSelected.addEventListener("click", function () {
  dropdownOptions.classList.toggle("active");
  dropdownSelected.classList.toggle("active");
  dropdownSelected.lastElementChild.classList.toggle("fa-angle-down");
  dropdownSelected.lastElementChild.classList.toggle("fa-angle-up");
});

let dropdownOptionElements = document.querySelectorAll(".dropdown-option");

dropdownOptionElements.forEach((option) => {
  option.addEventListener("click", function () {
    dropdownSelected.firstElementChild.textContent = this.textContent;
    dropdownOptions.classList.remove("active");
    dropdownSelected.classList.remove("active");
    dropdownSelected.lastElementChild.classList.toggle("fa-angle-down");
    dropdownSelected.lastElementChild.classList.toggle("fa-angle-up");
  });
});

// checkboxes

let checkboxes = document.querySelectorAll(".checkbox");
let checkboxCheck = [];
checkboxes.forEach((checkbox) => {
  let selectAll = document.getElementById("selectAll");
  checkbox.addEventListener("click", function () {
    if (this.id === "selectAll") {
      if (checkboxCheck.length > 0) {
        for (let el of checkboxCheck) {
          el.classList.remove("checked");
        }
        selectAll.setAttribute("class", "checkbox");
        checkboxCheck = [];
      } else {
        for (let el of checkboxes) {
          el.setAttribute("class", "checkbox checked");
          if (el !== selectAll) {
            checkboxCheck.push(el);
          }
        }
      }
    } /* every other checkbox */ else {
      if (checkboxCheck.includes(this)) {
        let index = checkboxCheck.indexOf(this);
        checkboxCheck.splice(index, 1);
        this.classList.remove("checked");
      } else {
        checkboxCheck.push(this);
        this.classList.add("checked");
      }

      if (
        checkboxCheck.length > 0 &&
        checkboxCheck.length < checkboxes.length - 1 &&
        !selectAll.classList.contains("partial")
      ) {
        selectAll.setAttribute("class", "checkbox partial");
      } else if (checkboxCheck.length === checkboxes.length - 1) {
        selectAll.setAttribute("class", "checkbox checked");
      } else if (checkboxCheck.length === 0) {
        selectAll.setAttribute("class", "checkbox");
      }
    }
  });
});

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  let error = "";

  let nome = nomeEl.value;
  
  nome = nome.split(" ");

  console.log(nome);
  if(nome.length < 2) {
    error += "Digite o nome e o sobrenome!\n";
  }


  let email = emailEl.value;

  let emailRegex = /\S+@\S+.\S+/g;
  console.log(email);

  if (!emailRegex.test(email)) {
    error += "O e-mail digitado não é válido!\n";
  }

  let telefone = telefoneEl.value.replace(/\D/g, ""); // Remove non-digits

  if(telefone[0] === "0") {
    telefone = telefone.slice(1);
  }

  console.log(telefone);


  if(telefone.length < 10 || telefone.length > 11) {
    error += "O telefone digitado é inválido!\n";
  }

  if(!radioBtnCheck) {
    error += "Escolha pelo menos um tipo de carne!\n";
  }

  if (checkboxCheck.length === 0) {
    error += "Escolha pelo menos uma opção de comunicação!\n";
  }

  let mensagem = document.getElementById("mensagem");

  if (mensagem.value.length < 5) {
    error += "A mensagem deve ter pelo menos 5 caracteres!"
  }

  if(error.length > 0) {
    alert(error);
  } else {
    alert("Formulário enviado com sucesso!");
    resetForm();
  }
}

function resetForm() {
    // Reset input fields
    inputElements.forEach((el) => {
      el.value = "";
      let textEl = el.nextElementSibling;
      textEl.classList.remove("active");
    });
  
    // Reset radio buttons
    radioBtns.forEach((btn) => {
      btn.firstElementChild.classList.remove("checked");
    });
    radioBtnCheck = false;
  
    // Reset dropdown
    dropdownSelected.firstElementChild.textContent = "Sem categoria (todos da agenda)";
    dropdownOptions.classList.remove("active");
    dropdownSelected.classList.remove("active");
    dropdownSelected.lastElementChild.classList.remove("fa-angle-up");
    dropdownSelected.lastElementChild.classList.add("fa-angle-down");
  
    // Reset checkboxes
    checkboxes.forEach((checkbox) => {
      checkbox.setAttribute("class", "checkbox");
    });
    checkboxCheck = [];
  
    // Reset textarea
    document.getElementById("mensagem").value = "";
  
  }
