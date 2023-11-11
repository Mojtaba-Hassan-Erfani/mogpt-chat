import { Pool } from 'pg';

const pool = new Pool( {
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   connectionTimeoutMillis: 10000, // Increase timeout to 10 seconds
   ssl: {
      rejectUnauthorized: false, // Set this to true for production
   },
} );

const query = async( text ) => {
   const start = Date.now();
   const res = await pool.query( text );
   const duration = Date.now() - start;
   console.log( 'Executed query', { text, duration, rows: res.rowCount } );
   return res;
}

export default query;
