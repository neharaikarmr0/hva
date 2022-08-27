let o=[0,8,9];
o.forEach(alert); //0,8,9


[0,7,8,6].forEach((item, index, array)=>{
    alert(`${item} is at  index ${index} in ${array}`);
});

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });