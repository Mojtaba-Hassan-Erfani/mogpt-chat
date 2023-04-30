import { query } from '../../../db';

export default async function handler( req, res ) {
    if ( req.method === 'GET' ) {
        try {
            const result = await query( 'SELECT * FROM users' );
            res.status( 200 ).json( result.rows );
        } catch ( error ) {
            res.status( 500 ).json( { message: 'Error fetching users', error} );
        }
    }
}