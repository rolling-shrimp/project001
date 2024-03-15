function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(`第一題:${i}`);
    }
  }
}

const people = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Helen",
  "Ivan",
  "Jack",
  "Kate",
  "Leo",
  "Maria",
  "Nathan",
  "Olivia",
  "Peter",
  "Queen",
  "Rachel",
  "Steve",
  "Tina",
  "Victor",
  "Wendy",
  "Xavier",
  "Yvonne",
  "Zach",
  "Amy",
  "Ben",
  "Chloe",
  "Daniel",
  "Ella",
  "Finn",
  "Gemma",
  "Henry",
  "Isabel",
  "Jacob",
  "Lily",
  "Mason",
  "Nora",
  "Oscar",
  "Penny",
  "Quinn",
  "Ruby",
  "Sam",
  "Taylor",
  "Uma",
  "Violet",
  "Will",
  "Xander",
];

const regions = [
  "臺北市",
  "基隆市",
  "新北市",
  "連江縣",
  "宜蘭縣",
  "釣魚臺",
  "新竹市",
  "新竹縣",
  "桃園市",
  "苗栗縣",
  "臺中市",
  "彰化縣",
  "南投縣",
  "嘉義市",
  "嘉義縣",
  "雲林縣",
  "臺南市",
  "高雄市",
  "南海島",
  "澎湖縣",
  "金門縣",
  "屏東縣",
  "臺東縣",
  "花蓮縣",
];

const data = [];

// 从人名数组中随机选择一个人名，并从地名数组中随机选择一个地名
for (let i = 0; i < 49; i++) {
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  const randomRegion = regions[Math.floor(Math.random() * regions.length)];
  data.push({ person: randomPerson, region: randomRegion });
}

console.log(data);

printPrimes(10);

function isPrime2(num) {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

function printPrimes2(num) {
  let i = 2;
  while (i <= num) {
    if (isPrime2(i)) {
      console.log(`第二題:${i}`);
    }
    i++;
  }
}
// printPrimes(10);
printPrimes2(50);

const createNewarray = (arr, fn) => {
  let newARR = [];
  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newARR.push(arr[i]);
    }
  }
  console.log(newARR);
};
function greaterThan10(n) {
  return n > 10;
}

createNewarray([10, 20, 30], greaterThan10);

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
Promise.all([promise1, promise2]).then((val) => {
  const sum = val.reduce((num1, num2) => {
    return num1 + num2;
  });
  console.log(sum);
});

const data1 = [
  { person: "Daniel", region: "嘉義縣" },
  { person: "Nathan", region: "屏東縣" },
  { person: "Violet", region: "新竹市" },
  { person: "Quinn", region: "雲林縣" },
  { person: "Ben", region: "雲林縣" },
  { person: "Nathan", region: "雲林縣" },
  { person: "Violet", region: "宜蘭縣" },
  { person: "Zach", region: "臺北市" },
  { person: "Chloe", region: "臺中市" },
  { person: "Kate", region: "新竹縣" },
  { person: "Peter", region: "苗栗縣" },
  { person: "Leo", region: "桃園市" },
  { person: "Sam", region: "彰化縣" },
  { person: "Helen", region: "金門縣" },
  { person: "Tina", region: "金門縣" },
  { person: "Jack", region: "連江縣" },
  { person: "Daniel", region: "臺南市" },
  { person: "Queen", region: "桃園市" },
  { person: "Emma", region: "金門縣" },
  { person: "Henry", region: "釣魚臺" },
  { person: "Gemma", region: "花蓮縣" },
  { person: "Kate", region: "臺南市" },
  { person: "Amy", region: "屏東縣" },
  { person: "Penny", region: "桃園市" },
  { person: "Leo", region: "臺中市" },
  { person: "Charlie", region: "釣魚臺" },
  { person: "Amy", region: "臺南市" },
  { person: "Ivan", region: "雲林縣" },
  { person: "Ella", region: "新竹縣" },
  { person: "Ruby", region: "連江縣" },
  { person: "Victor", region: "臺南市" },
  { person: "Will", region: "高雄市" },
  { person: "Henry", region: "高雄市" },
  { person: "Violet", region: "宜蘭縣" },
  { person: "Grace", region: "澎湖縣" },
  { person: "Olivia", region: "臺中市" },
  { person: "Violet", region: "苗栗縣" },
  { person: "Kate", region: "南投縣" },
  { person: "Zach", region: "澎湖縣" },
  { person: "Emma", region: "屏東縣" },
  { person: "David", region: "臺中市" },
  { person: "Oscar", region: "高雄市" },
  { person: "Ruby", region: "南投縣" },
  { person: "Frank", region: "金門縣" },
  { person: "Emma", region: "澎湖縣" },
  { person: "Peter", region: "臺中市" },
  { person: "Victor", region: "南投縣" },
  { person: "Penny", region: "屏東縣" },
  { person: "Xavier", region: "基隆市" },
];
const valuesArray = data1.map((item) => Object.values(item));

// 输出转换后的数组
console.log(valuesArray);

var i = 1;
for (var i = 0; i < 8; i++) {
  console.log(i);
}
let aa = [{ id: 4, product_name: "kk", amount: 5 }];
let bb = [
  { id: 4, product_name: "kk", amount: 5 },
  { id: 2, product_name: "k", amount: 5 },
];
aa.forEach((Element) => {
  const extinguish = bb.find((stuf) => stuf.id === Element.id);
  if (extinguish) {
    Element.amount += extinguish.amount;
  }
});
let thesttt = {
  statistic: [
    {
      id: 1,
      product_name: "001 Dark 98bpm",
      total_price: 3000,
      price: 3000,
      amount: 1,
    },
  ],
}[
  {
    id: 1,
    product_name: "001 Dark 98bpm",
    total_price: 3000,
    price: 3000,
    amount: 1,
  }
];
{
  statistic: [
    {
      id: 1,
      product_name: "001 Dark 98bpm",
      total_price: 3000,
      price: 3000,
      amount: 1,
    },
  ];
}
console.log(thesttt);

let databaseCart = [
  {
    id: 3,
    product_name: "003 Cloudy Street 2.0 98bpm",
    total_price: 3000,
    price: 3000,
    amount: 1,
  },
  {
    id: 1,
    product_name: "001 Dark 98bpm",
    amount: 1,
    price: 3000,
    total_price: 3000,
  },
  {
    id: 2,
    product_name: "002 Cloudy Street 98bpm",
    amount: 1,
    price: 3000,
    total_price: 3000,
  },
];
console.log("會員上次登入存入資料庫的資料",databaseCart);
let currentCart = [
  {
    id: 1,
    product_name: "001 Dark 98bpm",
    amount: 1,
    price: 3000,
    total_price: 3000,
  },
  { id: 4, product_name: "kobe", amount: 1, price: 3000, total_price: 3000 },
];
console.log("未更改的前端購物車",currentCart);
let toUpdate = [];
let toInsert = [];
currentCart.forEach((item) => {
  if (!databaseCart.find((stu) => stu.id === item.id)) {
    toInsert.push(item);
  }
});

databaseCart.forEach((databaseItem) => {
  const existingItem = currentCart.find((item) => item.id === databaseItem.id);
  if (existingItem) {
    // 如果商品在当前购物车中已存在，你可以选择合并数量、更新价格等
    // 更新 currentCart 中的商品信息
    existingItem.amount += databaseItem.amount;
    existingItem.total_price += databaseItem.total_price;
    toUpdate.push(existingItem);
  } else {
    // 如果商品在当前购物车中不存在，将其添加到 currentCart
    currentCart.push(databaseItem);
  }
});

console.log("the_currentCart", currentCart);

//比對構成傳到後端更新資料庫的物件

console.log("toupdate:", toUpdate);
console.log("toInsert", toInsert);
const getDefaultCart=()=>{
  let cart = {};
  for (let index = 1; index < array.length; index++) {
    cart [index] = 0;
    
  }
  return cart;
}
const [cart,setcart]= useState(getDefaultCart());
const addToCart = (itemID)=>{
setcart((prev)=>({...prev,[itemID]:prev[itemID]}));

}
const newItem = {id:1, product_name:"ko",amount:2}
newItem.amount +=3;
console.log(newItem);