const nameInput = document.querySelector("#name-input").value;
const hpInput = document.querySelector("#hp-input").valueAsNumber;
const imgInput = document.querySelector("#card-img-select").value;

const atkNameInput1 = document.querySelector("#atk1-name").value;
const atkDmgInput1 = document.querySelector("#atk1-dmg").value;
const atkDescInput1 = document.querySelector("#atk1-desc").value;

const atkNameInput2 = document.querySelector("#atk2-name").value;
const atkDmgInput2 = document.querySelector("#atk2-dmg").value;
const atkDescInput2 = document.querySelector("#atk2-desc").value;

const cardName = document.querySelector(".pkm-name");
const cardHp = document.querySelector("#hp");
const cardImg = document.querySelector("#card-img");

const cardAtkName1 = document.querySelector("#atk-name-1");
const cardAtkDmg1 = document.querySelector("#dmg-1");
const cardAtkDesc1 = document.querySelector("#desc1");

const cardAtkName2 = document.querySelector("#atk-name-2");
const cardAtkDmg2 = document.querySelector("#dmg-2");
const cardAtkDesc2 = document.querySelector("#desc2");

const submitBtn = document.querySelector("#submit");
const form = document.querySelector(".custom-param");


function changeCard() {

    cardName.textContent = nameInput;
    cardHp.textContent = hpInput;
    cardImg.src = imgInput;

    cardAtkName1.textContent = atkNameInput1;
    cardAtkDmg1.textContent = atkDmgInput1;
    cardAtkDesc1.textContent = atkDescInput1;

    cardAtkName2.textContent = atkNameInput2;
    cardAtkDmg2.textContent = atkDmgInput2;
    cardAtkDesc2.textContent = atkDescInput2;

}

function handleForm(event) {
    event.preventDefault();
}


form.addEventListener('submit', handleForm);
form.addEventListener("submit", changeCard)