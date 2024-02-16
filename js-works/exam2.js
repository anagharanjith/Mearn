// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.                                                                    using jsscript



function convertMilesToKilometers(disArray) {
   
    const convFactor = 1.60934;
  
  
    const kmArray = disArray.map(miles => miles * convFactor);
  
    const totalDistanceInKilometers = kmArray.reduce((total, kilometers) => total + kilometers, 0);
  
    return totalDistanceInKilometers;
  }
                                     
  const disArray = [10, 5, 8, 12];
  const result = convertMilesToKilometers(disArray);
  
  console.log("Total Distance in Kilometers:", result);
  