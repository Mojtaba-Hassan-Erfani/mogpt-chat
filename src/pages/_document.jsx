import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
   return (
      <Html lang="en">
         <Head>
            <link
               rel="stylesheet"
               href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

export default Document;