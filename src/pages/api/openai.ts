import { Configuration, OpenAIApi } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

const configuration = new Configuration( {
   organization: 'org-ne6CjLTVm9NtzVtimMjXZgSN',
   apiKey: process.env.OPENAI_API_KEY,
} );

const openai = new OpenAIApi( configuration );

const handler = async ( req: NextApiRequest, res: NextApiResponse ) => {
   if ( req.body.prompt !== undefined ) {
      try {
         const completion = await openai.createCompletion( {
            model: 'text-davinci-003',
            prompt: `${req.body.prompt}`,
            max_tokens: 150,
            frequency_penalty: 0.5,
            temperature: 0.7,
         } );

         res.status( 200 ).json( { text: `${completion.data.choices[0].text}` } );
      } catch ( error ) {
         console.log( 'Error: ', error );
      }
   } else {
      res.status( 400 ).json( { text: 'No prompt provided.' } );
   }
};

export default handler;
