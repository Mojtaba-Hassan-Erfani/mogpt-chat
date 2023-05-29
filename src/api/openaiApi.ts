 // OpenAI API fetch call.
    // ---------------------------------------------------------------------------------------
    export const OpenAiStream = async ( payload: OpenAIStreamPayload ): Promise<any> => {
        const apiKey = process.env.OPENAI_API_KEY;
        const organization = process.env.OPENAI_ORGANIZATION;

        const response = await fetch( '/api/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'OpenAI-Organization': organization,
            },
            body: JSON.stringify( payload ),
        } );

        // Check if the HTTP response is OK.
        if ( ! response.ok ) {
            throw new Error( `HTTP error! status: ${response.status}` );
        }

        // Handle the stream response.
        let result = '';
        const reader = response.body?.getReader();
        const decoder = new TextDecoder( 'utf-8' );

        if ( reader ) {
            // eslint-disable-next-line no-constant-condition
            while ( true ) {
                const { done, value } = await reader.read();

                if ( done ) break;
                if ( value ) result += decoder.decode( value );
            }
        }

        return result;
    };
    // ---------------------------------------------------------------------------------------
