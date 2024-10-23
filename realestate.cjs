const blockchain = require('./blockchain.cjs');
const bcrypt = require('bcrypt');

class RealEstate {
  constructor() {
    this.properties = [
      {
        propertyId: 1,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345678',
        propertyName: 'Dream Home',
        propertyType: 'Residential',
        location: 'New York',
        price: 1000000,
        area: 2000,
        bedrooms: 4,
        bathrooms: 3,
        floors: 2,
        yearBuilt: 2020,
        description: 'Luxurious home with modern amenities',
        images: ['image1.jpg', 'image2.jpg'],
        latitude: 40.7128,
        longitude: -74.0060,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 2,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345679',
        propertyName: 'Oceanfront Villa',
        propertyType: 'Villa',
        location: 'Miami',
        price: 2500000,
        area: 3000,
        bedrooms: 5,
        bathrooms: 4,
        floors: 3,
        yearBuilt: 2019,
        description: 'Stunning villa with ocean views',
        images: ['image3.jpg', 'image4.jpg'],
        latitude: 25.7617,
        longitude: -80.1918,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 3,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345680',
        propertyName: 'Mountain Retreat',
        propertyType: 'Cabin',
        location: 'Aspen',
        price: 1800000,
        area: 1500,
        bedrooms: 3,
        bathrooms: 2,
        floors: 2,
        yearBuilt: 2015,
        description: 'Cozy cabin in the mountains',
        images: ['image5.jpg', 'image6.jpg'],
        latitude: 39.1911,
        longitude: -106.8175,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 4,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345681',
        propertyName: 'Urban Loft',
        propertyType: 'Loft',
        location: 'Chicago',
        price: 850000,
        area: 1200,
        bedrooms: 2,
        bathrooms: 2,
        floors: 1,
        yearBuilt: 2018,
        description: 'Modern loft in the city center',
        images: ['image7.jpg', 'image8.jpg'],
        latitude: 41.8781,
        longitude: -87.6298,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 5,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345682',
        propertyName: 'Countryside Cottage',
        propertyType: 'Cottage',
        location: 'Napa Valley',
        price: 600000,
        area: 900,
        bedrooms: 2,
        bathrooms: 1,
        floors: 1,
        yearBuilt: 2010,
        description: 'Charming cottage surrounded by vineyards',
        images: ['image9.jpg', 'image10.jpg'],
        latitude: 38.2975,
        longitude: -122.2869,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 6,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345683',
        propertyName: 'Luxury Apartment',
        propertyType: 'Apartment',
        location: 'San Francisco',
        price: 1400000,
        area: 1700,
        bedrooms: 3,
        bathrooms: 2,
        floors: 1,
        yearBuilt: 2021,
        description: 'Elegant apartment in the heart of the city',
        images: ['image11.jpg', 'image12.jpg'],
        latitude: 37.7749,
        longitude: -122.4194,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 7,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345684',
        propertyName: 'Historic Mansion',
        propertyType: 'Mansion',
        location: 'Philadelphia',
        price: 3200000,
        area: 4000,
        bedrooms: 6,
        bathrooms: 5,
        floors: 3,
        yearBuilt: 1900,
        description: 'A beautifully restored historic mansion',
        images: ['image13.jpg', 'image14.jpg'],
        latitude: 39.9526,
        longitude: -75.1652,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 8,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345685',
        propertyName: 'Suburban Family Home',
        propertyType: 'Residential',
        location: 'Dallas',
        price: 750000,
        area: 2500,
        bedrooms: 4,
        bathrooms: 3,
        floors: 2,
        yearBuilt: 2015,
        description: 'Spacious home in a family-friendly neighborhood',
        images: ['image15.jpg', 'image16.jpg'],
        latitude: 32.7767,
        longitude: -96.7970,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 9,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345686',
        propertyName: 'Contemporary Condo',
        propertyType: 'Condominium',
        location: 'Los Angeles',
        price: 950000,
        area: 1500,
        bedrooms: 2,
        bathrooms: 2,
        floors: 1,
        yearBuilt: 2022,
        description: 'Modern condo with breathtaking views',
        images: ['image17.jpg', 'image18.jpg'],
        latitude: 34.0522,
        longitude: -118.2437,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 10,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345687',
        propertyName: 'Beach House',
        propertyType: 'House',
        location: 'Santa Monica',
        price: 1800000,
        area: 2500,
        bedrooms: 4,
        bathrooms: 3,
        floors: 2,
        yearBuilt: 2017,
        description: 'Stunning beach house steps away from the ocean',
        images: ['image19.jpg', 'image20.jpg'],
        latitude: 34.0194,
        longitude: -118.4912,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 11,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345688',
        propertyName: 'Farmhouse',
        propertyType: 'Farm',
        location: 'Kentucky',
        price: 700000,
        area: 3000,
        bedrooms: 5,
        bathrooms: 4,
        floors: 1,
        yearBuilt: 2018,
        description: 'Beautiful farmhouse with large land',
        images: ['image21.jpg', 'image22.jpg'],
        latitude: 37.8393,
        longitude: -84.2700,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 12,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345689',
        propertyName: 'Skyscraper Office',
        propertyType: 'Commercial',
        location: 'New York',
        price: 5000000,
        area: 10000,
        bedrooms: 0,
        bathrooms: 2,
        floors: 20,
        yearBuilt: 2023,
        description: 'Modern office space in the city',
        images: ['image23.jpg', 'image24.jpg'],
        latitude: 40.7128,
        longitude: -74.0060,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 13,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345690',
        propertyName: 'Lake House',
        propertyType: 'House',
        location: 'Minnesota',
        price: 1200000,
        area: 2200,
        bedrooms: 4,
        bathrooms: 3,
        floors: 2,
        yearBuilt: 2021,
        description: 'Charming lake house with beautiful views',
        images: ['image25.jpg', 'image26.jpg'],
        latitude: 45.5231,
        longitude: -94.2983,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 14,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345691',
        propertyName: 'Penthous',
        propertyType: 'Apartment',
        location: 'Las Vegas',
        price: 3500000,
        area: 3000,
        bedrooms: 4,
        bathrooms: 5,
        floors: 1,
        yearBuilt: 2022,
        description: 'Luxury penthouse with strip views',
        images: ['image27.jpg', 'image28.jpg'],
        latitude: 36.1699,
        longitude: -115.1398,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 15,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345692',
        propertyName: 'Eco-Friendly Home',
        propertyType: 'Residential',
        location: 'Seattle',
        price: 900000,
        area: 1800,
        bedrooms: 3,
        bathrooms: 2,
        floors: 2,
        yearBuilt: 2023,
        description: 'Sustainable home with solar panels',
        images: ['image29.jpg', 'image30.jpg'],
        latitude: 47.6062,
        longitude: -122.3321,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
      {
        propertyId: 16,
        ownerAddress: '0x1234567890abcdef1234567890abcdef12345693',
        propertyName: 'Rural Retreat',
        propertyType: 'Cottage',
        location: 'Oregon',
        price: 800000,
        area: 1600,
        bedrooms: 3,
        bathrooms: 2,
        floors: 1,
        yearBuilt: 2019,
        description: 'Peaceful cottage surrounded by nature',
        images: ['image31.jpg', 'image32.jpg'],
        latitude: 44.0682,
        longitude: -121.3153,
        highestBid: 0,
        highestBidder: null,
        biddingStartTime: null,
      },
    ];
  }

  getPropertyDetails(propertyId) {
    return this.properties.find((property) => property.propertyId === propertyId);
  }

  async createProperty(propertyData) {
    const propertyId = this.properties.length + 1; // Simple ID generation
    const newProperty = { ...propertyData, propertyId };
    this.properties.push(newProperty);
    await blockchain.storeProperty(newProperty); // Store on the blockchain
  }

  async bidOnProperty(propertyId, bidAmount, bidderAddress) {
    const property = this.getPropertyDetails(propertyId);
    if (property) {
      if (bidAmount > property.highestBid) {
        property.highestBid = bidAmount;
        property.highestBidder = bidderAddress;
        property.biddingStartTime = Date.now();
        await blockchain.updateProperty(property); // Update the property in the blockchain
      } else {
        throw new Error('Bid amount must be higher than the current highest bid.');
      }
    } else {
      throw new Error('Property not found.');
    }
  }

  // Hashing password function
  async hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  // Verify password function
  async verifyPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

module.exports = RealEstate;

