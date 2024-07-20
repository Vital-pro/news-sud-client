import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'Судак Крым город на берегу Чёрного моря. Идеально подходит для семейного, культурного отдыха',
  description:
    'Посмотрите новости Судака, подробности погоды. Спасибо за внимание! Сайт с новостями города Судака курортного города Крыма. На сайте можно увидеть новости, изменения в жизни города, проходящие культурные события и многое другое.',
};


export default function RootLayout({ children }) {
  let date = new Date();
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Header />
        <main className='main container'>
          <div className='geolocation-wrapper'>
            <h1>Крым г.Судак</h1>
            <time dateTime={date.getHours() + ':' + date.getMinutes()}>
              Сегодня:{' '}
              {date.toLocaleString('ru-RU', { month: 'long', day: 'numeric' })}{' '}
              {date.getFullYear()} г.
            </time>
            {/* <Link href={'/'}>Получить свежие вести</Link> */}
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
