weatherData=[
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Ernakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Ernakulam',temp:31}
]
// question
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

// algorithm

// create an empty output object
output= {}
// get each item from weatherdDta
weatherData.forEach(districtDetails=>{
  //store district and temprature
  const district = districtDetails.district
  const currTemp = districtDetails.temp
 // check district is in the output
 if(output.hasOwnProperty(district)){
    const oldTemp = output[district]
        //  district present : compare the value of temprature , update district value as its highest value
        if(currTemp>=oldTemp){
            output[district] = currTemp
        }
        else{
            output[district]= oldTemp
        }
 }else{
   // district not present : add district and temp to output
   output[district]= currTemp
 }
})
 // display output
 console.log(output);


   



