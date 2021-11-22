/**
 * 'ES6'
 * 1. Properties are like "variables attached to classes/ objects"
 * 2. Methods are like "functions attaced to classes/ objects"
 */
{
  class a1 {
    constructor(){
      this.myProperty = 'value'
      this.className = 'a1'
    }
  }
  //myMethod(){}
}

/**
 * 'ES7'
 * 1. properties를 생성자에서 set up 할 필요 없음
 * 2. arrow func 구현을 통해 this keyword로 인한 문제 발생 지양
 */
{
  class a1 {
    myProperty = 'value'
    className = 'a1'
  }
  // myMethod = () => {}
}

