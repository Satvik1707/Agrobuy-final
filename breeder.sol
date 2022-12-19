// SPDX-License-Identifier: MIT
pragma solidity >0.8.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.8/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract BreederFCI is ERC721URIStorage("AGRO BUY", "AGY"){
struct BreederSubmission{
    string Seedname;
    uint quantity;
    Status status;
    mapping (address => Breeder) BreederDetails;
    string locality;
    uint dateofHarvesting;
}
struct Breeder{
    string name;
    string location;
    string remarks;
    uint rating;
    //bool approved;
}

 enum Status{SUBMITTED, INPROCESS, APPROVED}
 mapping (address => BreederSubmission) public submission;
 mapping (address => Breeder) public BreederList;
 address public owner;
 
  constructor() {
        owner = msg.sender;
    }     
 modifier onlyFCI(){
      require(msg.sender == owner, "ONLY_OWNER");
        _;
 }
 function addSubmission(string memory SeedName, uint quantity, string memory locality, uint dateofHarvesting) external payable{
     submission[msg.sender] = BreederSubmission({
         SeedName : SeedName,
         quantity : quantity,
         status : Status.SUBMITTED,
         locality : locality,
         dateofHarvesting : dateofHarvesting
     });
 }


 function acceptSubmission(address Breeder) external onlyFCI{

    BreederSubmission storage sub = submission[msg.sender];
     sub.status = Status.INPROCESS;
 }
 function approveSubmission(address Breeder, string memory tokenURI) external payable onlyFCI{
     //mint NFT 
    _mint(Breeder, tokenId);
    _setTokenURI(tokenId, tokenURI);
    status = Status.APPROVED;
 //if rejected then what

 }
}