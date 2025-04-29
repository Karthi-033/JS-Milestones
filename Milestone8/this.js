const person = {
    firstName  : "John",
    lastName   : "Doe",
    id     : 5566,
    fullname : function() {
      console.log( this.firstName+""+this.lastName);
    }
  };
  person.fullname();