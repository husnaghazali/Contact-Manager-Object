function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function(){
      return this.name + ": " + this.number;
    }
  };
  
  var a = new contact("David", 12345);
  var b = new contact("Amy", 987654321);
  
  console.log(a.print("David", 12345));
  console.log(b.print("Amy", 987654321));