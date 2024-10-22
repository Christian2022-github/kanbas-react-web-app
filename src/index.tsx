import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

<div id="wd-images">
  <h4>Image tag</h4>
  Loading an image from the internet:
  <br />
  <img id="wd-starship"
    width="400px"
    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
  />
  <br />
  Loading a local image:
  <br />
  <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
</div>



