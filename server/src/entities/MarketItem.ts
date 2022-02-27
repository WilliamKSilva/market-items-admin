import moongose from 'mongoose';

const MarketItem = new moongose.Schema({  
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },  
  image_url: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },    
})

export default moongose.model('MarketItem', MarketItem)