import { NextApiRequest, NextApiResponse } from 'next';
import query from '../../../db';

type Data = {
   name: string;
};

const testConnection = async () => {
   try {
      const result = await query( 'SELECT NOW()' );
      return result.rows[0];
   } catch ( error ) {
      console.error( 'Error executing query:', error );
      return { error: 'Error executing query.' };
   }
}

const handler = async ( _: NextApiRequest, res: NextApiResponse<Data> ) => {
   const result = await testConnection();
   res.status( 200 ).json( result );
}

export default  handler;
