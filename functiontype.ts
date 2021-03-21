function displayType<T, U>(id: T, name: U): void {
    console.log(typeof(id) + ", " + typeof(name));
    console.log(id + ", " + name);
  }
 
displayType<number, string>(101, "Smith");       // number, string