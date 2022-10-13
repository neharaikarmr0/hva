let n = {
    0 : "i",
    9: "u",
};
alert(Object.entries(n));  //[0,i],[9,u]


const o = {
    "i":9,
    "u":8
};

for(const [book,price] of Object.entries(o)){
    if(price===8){
        alert(book);
    }
}

const books = {
    'The Shining': 5.50,
    'Harry Potter and the Goblet of Fire': 10.00,
    '1984': 0
  };
  for (const [book, price] of Object.entries(books)) {
    if (price === 0) {
      alert(book);
    }
  }