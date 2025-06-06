import './globals.css';

export const metadata = {
  title: 'xposicionclandestina',
  description: 'Obra digital única',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
