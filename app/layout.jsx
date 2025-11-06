export const metadata = { title: 'Stadslab Demo', description: 'Backoffice + Manuals demo' };
import './(styles)/globals.css';
export default function RootLayout({ children }){
  return (
    <html lang="nl">
      <body>
        <header>
          <nav>
            <strong>Stadslab Demo</strong>
            <a className="pill" href="/backoffice">Backoffice</a>
            <a className="pill" href="/manuals">Handleidingen</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
