let drinks = [
	{
		Name: "Kahvi",
		Description: "",
		Price: "2,90",
	},
	{
		Name: "Tee: <br>Masala Chai",
		Description: "",
		Price: "",
	},
	{
		Name: "Haudutettu Tee",
		Description: "1 portion 2,30 <br> 2 portions 4,00",
		Price: "",
	},
	{
		Name: "Latte",
		Description: "",
		Price: "4,30",
	},
	{
		Name: "Cappuccino",
		Description: "",
		Price: "3,90",
	},
	{
		Name: "Espresso (single)",
		Description: "",
		Price: "2,50",
	},
	{
		Name: "Espresso (double)",
		Description: "",
		Price: "3,00",
	},
	{
		Name: "Americano",
		Description: "",
		Price: "3,00",
	},
	{
		Name: "Kaakao",
		Description: "",
		Price: "4,20",
	},
	{
		Name: "Smoothie",
		Description: "",
		Price: "5,00",
	},
	{
		Name: "Ginger Beer",
		Description: "",
		Price: "4,00",
	},
];

const drinksEl = document.querySelector("#drinks");
drinks.forEach((item) => {
	const li = document.createElement("li");
	li.innerHTML = `
	<div class="name-and-price">
	<p tabindex="0"  class="item">${item.Name}</p>
	<p tabindex="0"  class="price">${item.Price}</p>
</div>
<p tabindex="0"  class="description">${item.Description}</p>
	`;
	drinksEl.appendChild(li);
});

let sweet = [
	{
		Name: "Muffinsit",
		Description: "",
		Price: "4,50",
	},
	{
		Name: "Keksit",
		Description: "",
		Price: "1,10-2,00",
	},
	{
		Name: "Juustokakut",
		Description: "",
		Price: "5,80",
	},
	{
		Name: "Kakut",
		Description: "",
		Price: "4,00-5,80",
	},
	{
		Name: "Raakakakut",
		Description: "",
		Price: "6,00",
	},
	{
		Name: "Piirakat",
		Description: "",
		Price: "3,00",
	},
	{
		Name: "Talon Pala",
		Description: "",
		Price: "3,00",
	},
	{
		Name: "Jäätelöt",
		Description: "",
		Price: "4,00",
	},
	{
		Name: "Korvapuusti",
		Description: "",
		Price: "3,50",
	},
];

const sweetEl = document.querySelector("#sweet");
sweet.forEach((item) => {
	const li = document.createElement("li");
	li.innerHTML = `
	<div class="name-and-price">
	<p tabindex="0"  class="item">${item.Name}</p>
	<p tabindex="0"  class="price">${item.Price}</p>
</div>
<p tabindex="0"  class="description">${item.Description}</p>
	`;
	sweetEl.appendChild(li);
});

let salty = [
	{
		Name: "Bagels",
		Description: "",
		Price: "9,20",
	},
	{
		Name: "Piirakat",
		Description: "Liha tai vege",
		Price: "8,20",
	},
	{
		Name: "Juusto-Muffinsit",
		Description: "",
		Price: "4,50",
	},
	{
		Name: "Quiche",
		Description: "Liha tai vege",
		Price: "5,50",
	},
	{
		Name: "Filopiirakat",
		Description: "Tai vegan",
		Price: "5,00",
	},
];

const saltyEl = document.querySelector("#salty");
salty.forEach((item) => {
	const li = document.createElement("li");
	li.innerHTML = `
	<div class="name-and-price">
	<p  tabindex="0"  class="item">${item.Name}</p>
	<p tabindex="0"  class="price">${item.Price}</p>
</div>
<p tabindex="0"  class="description">${item.Description}</p>
	`;
	saltyEl.appendChild(li);
});
