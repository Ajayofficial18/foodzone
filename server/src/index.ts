import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boilded Egg",
      price: 5,
      text: "Perfectly boiled eggs, simple, nutritious, and deliciously satisfying.",
      image: "/images/egg.png",
      type: "breakfast",
  },
  {
      name: "RAMEN",
      price: 15,
      text: "Flavorful ramen: rich broth, tender noodles, and savory toppings in every bite.",
      image: "/images/ramen.png",
      type: "lunch",
  },
  {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Grilled chicken: succulent, charred perfection with an irresistible smoky aroma.",
      image: "/images/chicken.png",
      type: "dinner",
  },
  {
      name: "CAKE",
      price: 18,
      text: "Indulgent cake: moist layers, rich frosting, a sweet symphony in every bite",
      image: "/images/cake.png",
      type: "breakfast",
  },
  {
      name: "BURGER",
      price: 23,
      text: "Delicious burger: juicy patty, fresh toppings, pure satisfaction in every bite.",
      image: "/images/burger.png",
      type: "lunch",
  },
  {
      name: "PANCAKE",
      price: 25,
      text: "Fluffy pancake: golden-brown, melt-in-your-mouth goodness, topped with sweet syrup.",
      image: "/images/pancake.png",
      type: "dinner",
  },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
