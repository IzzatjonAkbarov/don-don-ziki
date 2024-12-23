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
const btn = document.querySelector(".submit1");
const btnstart = document.querySelector(".start");
const first = document.querySelector(".first");
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
  btn.style.display = "block";

  if (number() == 1) {
    userscore.innerHTML++;
    laptopscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    }
    return (
      (natiaja.innerHTML = "durrang "),
      (laptop.innerHTML = `Tosh`),
      alert("durrang raqibham tosh tanladi")((user.innerHTML = ` Tosh`))
    );
  } else if (number() == 2) {
    userscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    }
    return (
      (natiaja.innerHTML = "yutdingiz "),
      (user.innerHTML = ` Tosh`),
      (laptop.innerHTML = `qaychi`),
      alert("yutdingiz raqib qaychi tanladi")((user.innerHTML = ` Tosh`))
    );
  } else {
    laptopscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    }
    return (
      (natiaja.innerHTML = "yutqazdingiz "),
      (user.innerHTML = `Tosh`),
      (laptop.innerHTML = `qog'oz`),
      alert("yutqazdingiz raqib qog'oz tanladi")((user.innerHTML = ` Tosh`))
    );
  }
});
qaychi.addEventListener("click", () => {
  btn.style.display = "block";

  if (number() == 1) {
    laptopscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    }
    return (
      (natiaja.innerHTML = "yutqazdingiz "),
      (user.innerHTML = `qaychi`),
      (laptop.innerHTML = `tosh`),
      alert("yutqazdingiz raqib tosh tanladi")((user.innerHTML = ` Tosh`))
    );
  } else if (number() == 2) {
    userscore.innerHTML++;
    laptopscore.innerHTML++;
    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    }
    return (
      (natiaja.innerHTML = "durrang "),
      (user.innerHTML = `qaychi`),
      (laptop.innerHTML = `qaychi`),
      alert("durrang raqib qaychi tanladi")((user.innerHTML = ` Tosh`))
    );
  } else {
    userscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    }
    return (
      (natiaja.innerHTML = "yutdingiz "),
      (user.innerHTML = `qaychi`),
      (laptop.innerHTML = `qog'oz`),
      alert("yutdingiz raqib qog'oz tanladi")((user.innerHTML = ` Tosh`))
    );
  }
});
qogoz.addEventListener("click", () => {
  btn.style.display = "block";

  if (number() == 1) {
    userscore.innerHTML++;

    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    }
    return (
      (natiaja.innerHTML = "yutdingiz "),
      (user.innerHTML = `qogoz`),
      (laptop.innerHTML = `tosh`),
      alert("yutdingiz raqib tosh tanladi")((user.innerHTML = ` Tosh`))
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
      (laptop.innerHTML = `qaychi`),
      alert("yutqazdingiz raqib qaychi tanladi")((user.innerHTML = ` Tosh`))
    );
  } else {
    userscore.innerHTML++;
    laptopscore.innerHTML++;
    if (laptopscore.innerHTML == 3 && userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `durrang`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (laptopscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutqazdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    } else if (userscore.innerHTML == 3) {
      umumiynatija.innerHTML = `yutdingiz`;
      userscore.innerHTML = 0;
      laptopscore.innerHTML = 0;
    }

    return (
      (natiaja.innerHTML = "durrang "),
      (user.innerHTML = `qaychi`),
      (laptop.innerHTML = `qogoz`),
      alert("durrang raqib qog'oz tanladi")((user.innerHTML = ` Tosh`))
    );
  }
});
btnstart.addEventListener("click", () => {
  first.style.display = "block";
  btnstart.style.display = "none";
});
