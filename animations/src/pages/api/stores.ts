import { NextApiRequest, NextApiResponse} from 'next'
import { PrismaClient } from '@prisma/client'

export default function getAllStores(req: NextApiRequest, res: NextApiResponse){
    const prisma = new PrismaClient();
    
  
    res.json({hello: 'world', message: 'all items lies here' + stores});
    // try{
    //     const users = await prisma.users()
    // } catch(e){
    //     res.status(500);
    //     res.json({stores});

    // } finally{ 

    //     await prisma.disconnect();
    // }

}