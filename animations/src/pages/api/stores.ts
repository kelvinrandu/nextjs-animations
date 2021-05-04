import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function getAllStores(req: NextApiRequest, res: NextApiResponse){
    const stores: object | null = await prisma.store.findMany({
        where: {
          author: { email: 'randukelvin@gmail.com' },
        }, 
     
        select: {
          id:true,
          name:true,
          location:true,    
        },
       
      })

      res.json(stores)
     
}