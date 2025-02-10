Write a javascript code that calculates the squares and cubes from 0 to 10 .

  function calculateSquaresAndCubes()
  {
    console.log("Number | Square | Cube");
    console.log("----------------------");
    
    for (let i = 0; i <= 10; i++) 
    {
        let square = i ** 2; 
        let cube = i ** 3;    
        console.log(`${i}      | ${square}      | ${cube}`);
    }
}
calculateSquaresAndCubes();
