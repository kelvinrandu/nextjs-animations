import { NextApiRequest, NextApiResponse} from 'next';

export default function getAllItems(req: NextApiRequest, res: NextApiResponse){
    const items: object | null = await prisma.item.findMany({
        where: {
          author: { name: '' },
        }, 
     
        select: {
          id:true,
          name:true,
     
        },
      })

      res.json(stores)
      console.log(stores)
    

}