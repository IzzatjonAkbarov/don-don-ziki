const tosh = document.getElementById("tosh");

const qaychi = document.getElementById("qaychi");
const qogoz = document.getElementById("qogoz");
const natiaja = document.querySelector(".natija");
const laptopscore = document.querySelector(".laptopscore");
const userscore = document.querySelector(".userscore");
const umumiynatija = document.querySelector(".umumiynatija");
const submit = document.querySelector("submit");

const user = document.querySelector(".user");
const laptop = document.querySelector(".laptop");
// console.log(laptopnumber);
// if (tosh == laptopnumber) {
//   console.log("durang");
// } else if (tosh < laptopnumber) {
//   console.log("yutqazdingiz");
// } else if (tosh > laptopnumber) {
//   console.log("yutqazyutdingizdingiz");
// }
function number() {
  return Math.ceil(Math.random() * 3);
}
tosh.addEventListener("click", () => {
  if (number() == 1) {
    userscore.innerHTML++;
    laptopscore.innerHTML++;
    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
    }
    return (
      (natiaja.innerHTML = "durrang "),
      (user.innerHTML = ` Tosh`),
      (laptop.innerHTML = `Tosh`)
    );
  } else if (number() == 2) {
    userscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
    }
    return (
      (natiaja.innerHTML = "yutdingiz "),
      (user.innerHTML = ` Tosh`),
      (laptop.innerHTML = `qaychi`)
    );
  } else {
    laptopscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
    }
    return (
      (natiaja.innerHTML = "yutqazdingiz "),
      (user.innerHTML = `Tosh`),
      (laptop.innerHTML = `qog'oz`)
    );
  }
});
qaychi.addEventListener("click", () => {
  if (number() == 1) {
    laptopscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
    }
    return (
      (natiaja.innerHTML = "yutqazdingiz "),
      (user.innerHTML = `qaychi`),
      (laptop.innerHTML = `tosh`)
    );
  } else if (number() == 2) {
    userscore.innerHTML++;
    laptopscore.innerHTML++;
    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
    }
    return (
      (natiaja.innerHTML = "durrang "),
      (user.innerHTML = `qaychi`),
      (laptop.innerHTML = `qaychi`)
    );
  } else {
    userscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
    }
    return (
      (natiaja.innerHTML = "yutdingiz "),
      (user.innerHTML = `qaychi`),
      (laptop.innerHTML = `qog'oz`)
    );
  }
});
qogoz.addEventListener("click", () => {
  if (number() == 1) {
    userscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
    }
    return (
      (natiaja.innerHTML = "yutdingiz "),
      (user.innerHTML = `qogoz`),
      (laptop.innerHTML = `tosh`)
    );
  } else if (number() == 2) {
    laptopscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
    }
    return (
      (natiaja.innerHTML = "yutqazdingiz "),
      (user.innerHTML = `qaychi`),
      (laptop.innerHTML = `qaychi`)
    );
  } else {
    userscore.innerHTML++;
    laptopscore.innerHTML++;
    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
    }

    return (
      (natiaja.innerHTML = "durrang "),
      (user.innerHTML = `qaychi`),
      (laptop.innerHTML = `qogoz`)
    );
  }
});

// userscore++;
// laptopscore++;
