try{
    e;
}catch(err){
    alert(err.name);  //ReferenceError
    alert(err.message);  // e is not defined
    alert(err.stack);    // ReferenceError: e is not defined at (...call stack)
    alert(err);    // ReferenceError: e is not defined
}


//If we don’t need error details, catch may omit it:

try {
    // ...
  } catch { // <-- without (err)
    // ...
  }