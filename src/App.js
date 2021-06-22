import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import CartList from "./Components/CartList";
import DataList from "./Components/DataList";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

// Demo Data
var data = [];
var color = ['#FF6633', '#FFB399', '#FF33FF', 'rgb(24 24 13)', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300'];
var len = 100;
for (var i = 0; i < len; i++) {
  data.push({
    "key": i,
    "name": "item" + i,
    "color": color[Math.round(Math.random(0, 9) * 10)],
    "price": Math.random(0, 9) * 15
  });
}
// Themes
export const light = {
  palette: {
    type: "light"
  }
};

export const dark = {
  palette: {
    type: "dark"
  }
};

// App
export default function App() {
  const [Data, setData] = useState(data);
  const [Cart, setCart] = useState([]);
  const [theme, setTheme] = useState(true);
  const [term, setTerm] = useState("");
  const icon = theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(!theme ? light : dark);

  const searchData = (event) => {
    setTerm(event.target.value);
    var Results = [];
    if (event.target.value.length > 1) {
      data.forEach(a => {
        if (a.name.toLowerCase().includes(event.target.value.toLowerCase())) {
          Results.push(a);
          setData([...Results]);
        }
      })
    } else {
      setData(data);
    }
  }
  var price = 0;
  Cart.map(a => price += a.price);
  const addItem = (a) => {
    Cart.push(a);
    setCart([...Cart]);
  }

  const removeItem = (a, i) => {
    Cart.splice(i, 1);
    setCart([...Cart]);
  }

  return (
    <ThemeProvider theme={appliedTheme}>
      <Paper style={{ minHeight: window.innerHeight * 0.93, padding: "1%" }}>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={() => setTheme(!theme)}
          style={{ display: "contents", height: "20px" }}
        >
          Change Mode
          {icon}
        </IconButton>
        <SearchBar term={term} searchData={searchData} price={price} />
        <CartList Cart={Cart} removeItem={removeItem} />
        <DataList Data={Data} addItem={addItem} />
      </Paper>
    </ThemeProvider>
  );
}