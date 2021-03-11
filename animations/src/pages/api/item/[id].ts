import { NextApiRequest, NextApiResponse} from 'next';

export default function getItemById(req: NextApiRequest, res: NextApiResponse){
    res.json({hello: 'world', message: 'each item lies here' });

}