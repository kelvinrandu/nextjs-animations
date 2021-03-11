import { NextApiRequest, NextApiResponse} from 'next';

export default function getStoreById(req: NextApiRequest, res: NextApiResponse){
    res.json({byId: req.query.id, message: 'store owner lies here'});

}