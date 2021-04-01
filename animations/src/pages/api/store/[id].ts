import { NextApiRequest, NextApiResponse} from 'next';
import prisma from '../../../../lib/prisma'

export default async function getStoreById(req: NextApiRequest, res: NextApiResponse){
 
    const id = req.query.id
    const store = await prisma.store.findUnique({
        where: {
          id: Number(id) ,
        },
  
      })
      const getUser = await prisma.user.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          items: true,
        },
      })

    res.json(store);
    res.json(getUser);

}