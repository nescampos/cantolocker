// sample testing code

async function main() {
  const DContract = await ethers.getContractFactory("DigitalWill");

  const dContract = DContract.attach(
    "0x4dA05ddA2F0586327E956548fd3E88a508ba2168"
  );

  // let amount = ethers.utils.parseEther('5');
  // let tx1= await dContract.adduser("0x55f2c051d8136E44942205f0b0045c1824eEa6B0", {value: amount});
  //console.log(tx1);

  //  let tx2 = await dContract.revertToOwner();
  //  console.log("Transection Hash",tx2.hash);

  const tx = await dContract.getRecipientBalance(
    "0x4dA05ddA2F0586327E956548fd3E88a508ba2168"
  );

  console.log(ethers.utils.formatEther(tx));

  console.log(typeof tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
