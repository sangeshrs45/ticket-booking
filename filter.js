// let m =[12,26,42,101,235,134,100]
// let s =m.filter(x=>x>100)
// console.log(s)   // output [ 101, 235, 134 ]

let a = [{id:1,name:"sangesh",city:"singampunari"},
    {id:2,name:"prakash",city:"sivagangai"},
    {id:3,name:"rithish",city:"ponnamaravathi"}
]
let data = a.filter(x=>x.name  == "sangesh")
console.log(data)