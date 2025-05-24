// object

// example
// laptop is an objects,its properties is [make,color,screensize,ram] and its methods is 
// [Browse,Build Projects,Play Games,Watch movies]

// how to create object

// let Material = {
//     name : "Laptop",
//     price : "50000",
//     quantity : 1
//   }

// let a = [1,2,3,4]
//  let b = []
  
// console.log(Material)
// console.log(typeof(Material))


// Another way to create new object
let Material1 = new Object();
 console.log(Material1)
console.log(typeof(Material1))
Material1.name = "Laptop"
Material1.price = 50000
Material1.quantity = "1g"

 console.log(Material1)
// Dot notation
console.log(Material1.price)
Material1.price = 60000
console.log(Material1)
console.log(Material.price)


// // add new properties
Material1.ram = "8GB"
Material1.Price = 70000
console.log(Material1)
//Another way to get values 
let data = Material1['name']
console.log(data)

// purpose of using square bracket incase we change the value by using new variable means we use square bracket

let ans = "price"
Material1[ans] = "70000"
 console.log(Material1)
Material1.ans = 80000
 console.log(Material1)
console.log(Material1.price)
Material1.ans = 80000
console.log(Material1[ans])
Material1.ans = 80000
console.log(Material1)









// let Material2 = {
//      Brand : "Lenovo",
//      Price : 50000,
//      Quantity : 1,
//      data : ['firstname','lastname','email','password'],
//      AddToCart : function (){
//       console.log("Item added to cart Successfully")
//      }
//  }

// console.log(Material2)
// console.log(Material2['data'])
// Material2.AddToCart()