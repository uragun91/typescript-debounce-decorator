import { debounce } from "./debounce";
// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Debounce Decorator</h1>`;

class TestClass {
  @debounce(400)
  testMethod() {
    console.log("this method called with debounce");
  }
}
