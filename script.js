import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";

const btn = document.querySelector('[data-form-btn]');

//funcion anonima o Arrow functins
btn.addEventListener('click', addTask);

displayTasks();    