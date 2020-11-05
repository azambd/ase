const categoryNames = [
  "Books",
  "Clothing, Shoes & Jewelry",
  "Beauty & Personal Care",
  "Home & Kitchen",
  "Kitchen & Dining",
  "Tools & Home Improvement",
  "Appliances",
  "Arts, Crafts & Sewing",
  "Automotive",
  "Baby",
  "Camera & Photo",
  "Cell Phones & Accessories",
  "Computers & Accessories",
  "Electronics",
  "Grocery & Gourmet Food",
  "Health & Household",
  "Industrial & Scientific",
  "Kindle Store",
  "CDs & Vinyl",
  "Musical Instruments",
  "Office Products",
  "Patio, Lawn & Garden",
  "Pet Supplies",
  "Software",
  "Sports & Outdoors",
  "Toys & Games",
  "Video Games",
  "Watches",
  "Movies & TV"
];

function setSelectOptions() {
  const catId = document.getElementById("catId");
  let options = "";
  categoryNames.forEach(
    name => (options += `<option value="${name}">${name}</option>`)
  );
  catId.innerHTML = options;
}

function onClick() {
  const catId = categoryNames.indexOf(document.getElementById("catId").value);
  const salesRank = document.getElementById("salesRank").value;
  const resultTitle = document.getElementById("resultTitle");
  const result = document.getElementById("result");

  if (!salesRank) {
    alert("Please enter sales rank");
    return;
  }
  const sales = getSalesPerDay(parseInt(salesRank), catId);
  resultTitle.innerHTML = "ORDERS PER DAY APPROXIMATELY";
  result.innerHTML = "" + sales;
}

function getSalesPerDay(rank = 0, catId = 0) {
  let bookSalesPerDay = 0;

  if (rank >= 1 && rank <= 5)
    bookSalesPerDay = ((7000 - 4000) / 5) * (5 - rank) + 4000;
  if (rank >= 6 && rank <= 20)
    bookSalesPerDay = ((4000 - 3000) / (20 - 5)) * (20 - rank) + 3000;
  if (rank >= 21 && rank <= 35)
    bookSalesPerDay = ((3000 - 2000) / (35 - 20)) * (35 - rank) + 2000;
  if (rank >= 36 && rank <= 100)
    bookSalesPerDay = ((2000 - 1000) / (100 - 35)) * (100 - rank) + 1000;
  if (rank >= 101 && rank <= 200)
    bookSalesPerDay = ((1000 - 500) / (200 - 100)) * (200 - rank) + 500;
  if (rank >= 201 && rank <= 350)
    bookSalesPerDay = ((500 - 250) / (350 - 200)) * (350 - rank) + 250;
  if (rank >= 351 && rank <= 500)
    bookSalesPerDay = ((250 - 175) / (500 - 350)) * (500 - rank) + 175;
  if (rank >= 501 && rank <= 750)
    bookSalesPerDay = ((175 - 120) / (750 - 500)) * (750 - rank) + 120;
  if (rank >= 751 && rank <= 1500)
    bookSalesPerDay = ((120 - 100) / (1500 - 750)) * (1500 - rank) + 100;
  if (rank >= 1501 && rank <= 3000)
    bookSalesPerDay = ((100 - 70) / (3000 - 1500)) * (3000 - rank) + 70;
  if (rank >= 3001 && rank <= 5500)
    bookSalesPerDay = ((70 - 25) / (5500 - 3000)) * (5500 - rank) + 25;
  if (rank >= 5501 && rank <= 10000)
    bookSalesPerDay = ((25 - 15) / (10000 - 5500)) * (10000 - rank) + 15;
  if (rank >= 10001 && rank <= 50000)
    bookSalesPerDay = ((15 - 5) / (50000 - 10000)) * (50000 - rank) + 5;
  if (rank >= 50001 && rank <= 100000)
    bookSalesPerDay = ((5 - 1) / (100000 - 50000)) * (100000 - rank) + 1;
  if (rank < 1 || rank > 100000) bookSalesPerDay = 0;

  bookSalesPerDay = Math.round(
    bookSalesPerDay * ((categoryNames.length - catId) / 30)
  );

  return bookSalesPerDay + "";
}

setTimeout(() => {
  setSelectOptions();
}, 200);
