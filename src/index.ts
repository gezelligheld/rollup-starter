class Demo {
  a: number | string = 1;

  setA = (a: string) => {
    this.a = a;
  };
}

new Demo().setA('12');
