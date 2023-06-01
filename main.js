let myLeads = [];
// getting the DOM elements
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn")
// 1. Store the delete button in a deleteBtn variable

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromStorage);
if (leadsFromStorage) {
  myLeads = leadsFromStorage;
  renderLeads();
}
// 2. Listen for double clicks on the delete button (google it!)
deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
})
// 3. When clicked, clear localStorage, myLeads, and the DOM

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);

  //saving the leads in the local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  // console.log(localStorage.getItem("myLeads"));

  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a href=${myLeads[i]} >
             ${myLeads[i]}
        </a>
    </li>`;
  }

  ulEl.innerHTML = listItems;
}
