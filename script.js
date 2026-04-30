const searchInput = document.getElementById("search-input"); 
const searchButton = document.getElementById("search-button"); 
const result = document.getElementById("result");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack"); 
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack"); 
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed"); 
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id"); 
const height = document.getElementById("height"); 
const weight = document.getElementById("weight"); 
const types = document.getElementById("types");

async function getData() {
  try {
  const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${searchInput.value.toLowerCase().trim()}`)
const data = await res.json(); 
return data;
}catch(err){
console.log(err);
}
}

async function renderData(){

  const data = await getData(); 
  if(!data){
    alert("Creature not found");
    return;
  }

 let innerHTMLType = data.types.map((item) => {
      return `<span class="type">${item.name.toUpperCase()}</span> `
    });

  creatureName.textContent = data.name;
  creatureId.textContent =  data.id; 
  height.textContent = `Height: ${data.height}`; 
  weight.textContent = `Weight: ${data.weight}`;
  types.innerHTML = innerHTMLType.join("");

hp.textContent = data.stats[0].base_stat;
attack.textContent = data.stats[1].base_stat;
defense.textContent = data.stats[2].base_stat;
specialAttack.textContent = data.stats[3].base_stat;
specialDefense.textContent = data.stats[4].base_stat;
speed.textContent = data.stats[5].base_stat;


}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  renderData()
  });


