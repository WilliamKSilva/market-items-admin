import { Request, Response } from 'express';

import MarketItem from "../../entities/MarketItem"

class MarketItemController {
  
  async create(request: Request, response: Response): Promise<Response> {
    const {      
      name,
      description,
      image_url
    } = request.body

    if (!name || !description || !image_url) {
      return response.status(400).json({message: 'Empty fields are not valid!'})
    }

    const marketItemAlreadyExist = await MarketItem.findOne({ _id: request.params.id })

    if (marketItemAlreadyExist) {
      return response.status(200).json({message: 'This item already exists!'})
    }

    const marketItem = await MarketItem.create({name, description, image_url})

    await MarketItem.findByIdAndUpdate(marketItemAlreadyExist, { $push: { marketItem: marketItem } })

    return response.status(201).json(marketItem)
    
  };  
}

export { MarketItemController }