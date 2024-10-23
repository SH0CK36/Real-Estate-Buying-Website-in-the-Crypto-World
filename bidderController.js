const blockchain = require('./blockchain'); // Your current blockchain.js
const Bid = require('../models/Bid'); // Assuming you have a Bid model

// Place a bid
const placeBid = async (req, res) => {
  const { propertyId, amount, walletAddress } = req.body;
  try {
    // Ensure the user has sufficient funds, etc. (implement your checks here)

    // Get accounts (if needed)
    const accounts = await blockchain.getAccounts();
    
    // Send transaction
    const receipt = await blockchain.sendTransaction(accounts[0], walletAddress, amount);
    console.log("Transaction receipt:", receipt);
    
    // Save bid to the database
    const newBid = new Bid({
      propertyId,
      amount,
      walletAddress,
      transactionHash: receipt.transactionHash,
    });
    await newBid.save();
    
    res.status(201).json({ message: 'Bid placed successfully', transactionHash: receipt.transactionHash });
  } catch (error) {
    console.error("Error placing bid:", error);
    res.status(500).json({ message: 'Error placing bid' });
  }
};

// Fetch all bids for a property
const getBidsForProperty = async (req, res) => {
  const { propertyId } = req.params;
  try {
    const bids = await Bid.find({ propertyId }); // Assuming Bid model is implemented
    res.json(bids);
  } catch (error) {
    console.error("Error fetching bids:", error);
    res.status(500).json({ message: 'Error fetching bids' });
  }
};

module.exports = {
  placeBid,
  getBidsForProperty,
};
