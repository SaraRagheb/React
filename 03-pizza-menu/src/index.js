// first folder webpack entry point to be called index.js

import React from "react"; // import module is part of javascript
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// creat App component

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// parent compent
// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>
//       <Pizza
//         name="Pizza Spinaci"
//         ingredient="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="pizzas/spinaci.jpg"
//         price={10}
//       />
//       <Pizza
//         name="Pizza Funghi"
//         ingredient="Tomato, mushrooms"
//         photoName="pizzas/funghi.jpg"
//         price={12}
//       />
//     </main>
//   );
// }

/* rending list : array of elements */
function Menu() {
  // condional rending
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> */}
      {/* ternaries operator */}
      {pizzas ? (
        <React.Fragment key={"rr"}>
          <p>we have pizza </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : null}
    </main>
  );
}

// child component
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients} </p>
        <span>{pizzaObj.soldOut ? "sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("we're currently open!");
  // else alert("Sorry we're closed");
  // multiple return
  if (!isOpen)
    return (
      <p>
        we're happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    );
  return (
    // <footer className="footer">
    //   {new Date().toLocaleTimeString()}.we're currently open!
    // </footer>

    <footer className="footer">
      {isOpen && (
        <Order closeHours={closeHour} openHour={openHour} />
        //   <div className="order">
        //     <p>we're open until {closeHour}:00. Come visit us or order online.</p>
        //     <button className="btn">Order</button>
        //   </div>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "we're  currently open!");
}

// extracting jsx with new commponent
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>we're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
