export class Attributes<T> {
  constructor(private data: T) {}

  /* 
    K is the key of object
    K is a possible value of the type of T, where T is the generic function of the class
      so for this senariom K can be of type id, name, string
 
    (id)K ---> { id: number } ---> K = number
    (name)K ---> { name: string } ---> K = string
    (age)K ---> { age: number } ---> K = number

    when K extends keyof T is used, it looks at the keys as types
      so if the object is an interface type and the keys have type assertions, 
      then the property key and value becomes the type for this function
    
    K == name: number

    T[K] is look up in the generic object and returns the actual value as a string type
  */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
