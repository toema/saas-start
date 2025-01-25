// pages/_document.tsx
import { Head, Html, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '@/lib/analytics';

export default function Document() {
  return (
    <Html lang="en" className="h-full" data-theme="boxyhq">
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
