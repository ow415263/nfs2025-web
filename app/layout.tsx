import React from 'react';

import './globals.css';

const gaTag = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EWXHE9QW20');
`;


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='sr'>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-EWXHE9QW20"></script>
                <script dangerouslySetInnerHTML={{ __html: gaTag }}></script>
                <title>NextFirstSteps | Creative Talent Recruitment & Upskilling in Digital Design</title>
            </head>
            <body>{children}</body>
        </html>
    )
}