import { NextApiRequest, NextApiResponse} from 'next';

export default function getAllItems(req: NextApiRequest, res: NextApiResponse){
    res.json({hello: 'world', message: 'all items lies here'});

}