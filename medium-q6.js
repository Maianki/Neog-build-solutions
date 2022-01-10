// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021


let minDate = (date1,date2)=>{
    let firstDate = date1.split('/')
    let secondDate = date2.split('/')
    
    let [firstDateDay,firstDateMonth,firstDateYear] = firstDate;
    let [secondDateDay,secondDateMonth,secondDateYear] = secondDate;

    if(firstDateYear!==secondDateYear) return firstDateYear<secondDateYear ? `${firstDate.join('/')}` : `${secondDate.join('/')}`
    else{
      if(firstDateMonth!==secondDateMonth) return firstDateMonth<secondDateMonth ? `${firstDate.join('/')}` : `${secondDate.join('/')}`
      else{
         return firstDateDay<secondDateDay ? `${firstDate.join('/')}` : `${secondDate.join('/')}`
      }
    }
}

console.log(minDate('02/05/2021', '24/05/2021'))