import Link from 'next/link';

let date = new Date();
let dateHour = date.getHours() + 3;

export const Header = () => {
  return (
    <header
      className='header'
      style={{
        borderImage:
          dateHour >= 4 && dateHour < 17
            ? 'fill 0 linear-gradient(190deg, #0000, #0000)'
            : dateHour >= 17 && dateHour <= 21
            ? 'fill 0 linear-gradient(190deg, #0004, #0004)'
            : dateHour > 21
            ? 'fill 0 linear-gradient(190deg, #0009, #0009)'
            : '',
      }}
    >
      <div className='header__container container'>
        <p className='header__title'>Солнечные новости</p>
      </div>
      <nav>
        {/* <Link href='/'>Home</Link>
        <Link href='/blog'>blog</Link>
        <Link href='/about'>about</Link> */}
      </nav>
    </header>
  );
};
