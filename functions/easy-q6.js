// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle



let typeOfTriangle = (angle1,angle2,angle3)=>{
    const sum = angle1+angle2+angle3;
    console.log(sum);
      if(sum===180){
          if(angle1===angle2 && angle2===angle3) return `equilateral triangle`
          else if(angle1===angle2 || angle2===angle3 || angle3===angle1) return `isosceles triangle`
          else return `scalene triangle`
      }else{
          return `Not a triangle at all`;
      }
  }
  
  //calling typeOfTriangle
  console.log(typeOfTriangle(60, 60, 60));
  
  
  