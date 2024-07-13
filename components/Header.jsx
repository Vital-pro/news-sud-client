import Link from 'next/link'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <h2 className='header__title'>Солнечные новости</h2>
      </div>
      <nav>
        {/* <Link href='/'>Home</Link>
        <Link href='/blog'>blog</Link>
        <Link href='/about'>about</Link> */}
      </nav>
    </header>
  );
}
