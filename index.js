// Your code here
class Polygon {
    constructor(Array) {
        this.Array = Array
    }
    get countSides() {
        return this.Array.length
    }
    get perimeter() {
        const reducer = (acc, currValue) => acc + currValue
        return this.Array.reduce(reducer)
    }
}

class Triangle extends Polygon {

    get isValid() {
      if (!Array.isArray(this.sides)) return;
      if (this.count !== 3) return;
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
  }



// class Triangle extends Polygon {
//     constructor(Array) {
//         super(Array)
//     }
//     get isValid() {
//         if (!Array.isArray(this.Array)) return
//         if (this.Array.countsides != 3) return
//         let first = Array[0]
//         let second = Array[1]
//         let third = Array[2]
//         return ((first + second > third) && (first + third > second) && (second + third > first))
//     } 
// }
