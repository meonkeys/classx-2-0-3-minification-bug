var MyClass = ClassX.extend(ClassX.Class, function(base) {
  this.constructor = function MyClass() {
    if ( base && base.constructor ) {
      base.constructor.call(this);
      console.log('name in constructor is', this.constructor.name);
    }
    console.log('name just past constructor is', this.constructor.name);
  };
});

var myInstance = new MyClass();
