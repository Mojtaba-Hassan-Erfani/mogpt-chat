import query from '../../../db';

const testConnection = async () => {
   try {
      const result = await query( 'SELECT NOW()' );
      return result.rows[0];
   } catch ( error ) {
      console.error( 'Error executing query:', error );
      return { error: 'Error executing query.' };
   }
}

const handler = async ( req, res ) => {
   const result = await testConnection();
   res.status( 200 ).json( result );
}

export default  handler;
