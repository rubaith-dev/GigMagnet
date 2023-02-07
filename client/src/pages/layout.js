export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <title>Nested layouts by example</title>
      </Head>
      <body>
        <header>hello</header>
        {children}
      </body>
    </html>
  );
}
