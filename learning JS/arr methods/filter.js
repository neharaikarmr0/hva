let p = [
    {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
];

let u = p.filter(item=>item.id>2);
alert(u.name);
alert(u.length);