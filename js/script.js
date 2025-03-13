const fruits = [
  {
    id: 1,
    name: "Banán",
    fat: 0.33,
    fiber: 2.6,
    calory: 89,
    protein: 1.09,
    carbohydrate: 22.8,
  },
  {
    id: 2,
    name: "Alma",
    fat: 0.17,
    fiber: 1.3,
    calory: 52,
    protein: 0.26,
    carbohydrate: 13.8,
  },
  {
    id: 3,
    name: "Narancs",
    fat: 0.12,
    fiber: 2,
    calory: 47,
    protein: 0.94,
    carbohydrate: 11.8,
  },
];
const fruitSelect = document.getElementsByName("fruit-select")[0];
const fruitNum = document.getElementsByName("fruit-num")[0];
for (const fruit of fruits) {
  const option = document.createElement("option");
  option.innerText = fruit.name;
  option.value = fruit.id;
  fruitSelect.appendChild(option);
}
function calculate() {
  if (fruitSelect.value == 0) {
  }
}
function resetForm() {}
