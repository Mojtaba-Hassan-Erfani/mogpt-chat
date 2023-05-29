import { OpenAiStream } from '../../api/openaiApi';
import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAIStreamPayload } from '../../types/openai';

const handler = async ( req: NextApiRequest, res: NextApiResponse ) => {

   if ( req.method !== 'POST' ) {
      res.status( 405 ).json( { text: 'Method not allowd, use POST' } );
      return;
   }
   if ( req.body.prompt !== undefined ) {
      try {
         const payload: OpenAIStreamPayload = {
            model: 'gpt-3.5-turbo',
            messages: [ { role: 'user', content: req.body.prompt } ],
            max_tokens: 150,
            frequency_penalty: 0,
            temperature: 0.7,
            top_p: 1,
            presence_penalty: 0,
            stream: true,
            n: 1,
         };

         const stream = await OpenAiStream( payload );

         res.status( 200 ).json( { text: stream } );
      } catch ( error ) {
         res.status( 500 ).json( { text: 'Error processing request.', error: error.message } );
      }
   } else {
      res.status( 400 ).json( { text: 'No prompt provided.' } );
   }
};

export default handler;
