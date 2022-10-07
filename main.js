const createChocolate = () => {
	
	const newBars = {	}

	return newBars
}
let Chocolate = createChocolate()

const buyChocolate = (Chocolate) => {
    Chocolate.Type = "Milk chocolate";
    return Chocolate;
 }
 const addFlavoring = (Chocolate) => {
    Chocolate.Flavoring = "Mint";
    return Chocolate;
  }
const makeBarkMixture = (Chocolate) => {

    if (Chocolate.Flavoring === "Mint") {
        Chocolate.MakeBark = true
    }
    else {
        Chocolate.MakeBark = false
            }
}
const bakeCandy = (Chocolate) => {
    if (Chocolate.MakeBark === true) {
        Chocolate.baked = true 
        return Chocolate
    }
    else {
        Chocolate.baked = false
        return Chocolate
    }
}
const breakBark = (Chocolate) => {
    if (Chocolate.baked === true) {
       const pieces = [ "Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" , "Mint Chocolate Bark Piece" ]
       return pieces
    }
    }
// buyChocolate(addFlavoring(makeBarkMixture(bakeCandy(breakBark(Chocolate)))))
buyChocolate(Chocolate)
addFlavoring(Chocolate)
makeBarkMixture(Chocolate)
bakeCandy(Chocolate)
breakBark(Chocolate)
console.log(Chocolate)
console.log(breakBark(Chocolate))