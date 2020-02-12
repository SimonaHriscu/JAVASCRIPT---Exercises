// Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
// The Person class should have a method called describe which returns a string with the following
// syntax: “name, age years old”. So, for example, if John is 19 years old, then the function describe of his object
// will return “John, 19 years old”.

class Person {
  constructor(_str, _num) {
    this.name = _str;
    this.age = _num;
  }
  describe() {
    console.log(`${this.name}, ${this.age} years old`);
  }
}
const person = new Person("John", 19);
person.describe();

// TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
// Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.

class TV {
  constructor(_brand, _channel = 1, _volume = 50) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  volumeUp() {
    if (this.volume <100) {
        this.volume++;
        console.log(`the volume is ${this.volume}`);
    } else {
        console.log('this is too much');

    }
  }
  volumeDown() {
    if (this.volume > 0) {
        console.log(`the volume is ${this.volume}`);
        this.volume--;
    } else {
        console.log('this is minimum ');
    }
  }
  randomChannel() {
    this.channel = Math.floor(Math.random()*51);
    console.log(this.channel);
  }
  resetChannel(){
      this.channel= 1;
      this.channel = 50;

  }
  display() {
    console.log(
      `${this.brand}, at channel ${this.channel}, volume ${this.volume}`
    );
  }
}

const screen = new TV("Panasonic",3, 97);
console.log(screen);
console.log(screen.brand);
screen.volumeUp();
console.log(screen.volume);
screen.randomChannel();
screen.display();

