import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'Судак - Крым - город на берегу Чёрного моря - Идеально подходит для семейного - культурного отдыха - приезжайте загорать - дышите свежим воздухом - наслаждайтесь и омолаживайтесь',
  description:
    'Актуальные новости города Судака, подробности погоды. Смотрите и читайте информацио о самых свежих событиях города Судака - курортного города Крыма. На сайте можно увидеть изменения в жизни города, проходящие культурные события и многое другое. Будьте в курсе! Спасибо за внимание!',
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
            <time dateTime={date.getHours() + 3 + ':' + date.getMinutes()}>
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
