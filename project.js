const NFTs=[]

function mintNFT (_name,_totalSupply,_value) {
const NFT={
"name": _name,
"totalSupply": _totalSupply,
"value" : _value,
}

NFTs.push(NFT)

console.log("minted "+ _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for( i=0;i<NFTs.length;i++){
console.log("\n"+"Name: "+NFTs[i].name)
console.log("Total Supply: "+NFTs[i].totalSupply)
console.log("Value: "+NFTs[i].value+"\n")
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("Total NFTs: "+NFTs.length)
}

// call your functions below this line
mintNFT("jojocoin",50,5000);
mintNFT("superManCoin",300,10000)

listNFTs();

getTotalSupply();
