import Image from 'next/image';
import { ScrollToTop }  from '../components/ScrollToTop';

async function getData() {
  const result = await fetch(process.env.API_URL, {
    next: {
      revalidate: 10,
      tags: ['news-box'],
    },
  });
  if (!result.ok) {
    throw new Error('Failed to fetch data!');
  }
  return result.json();
}

export default async function Home() {

  const data = await getData();
  return (
    <section>
      <div className='news-box'>
        <ScrollToTop />

        {/* ****START for greetings**display: 'none* */}
        {/* <div style={{ display: 'none' }} className='imageTat__inner container'>
          <div className='imageTat__wrapper '>
            <h3 className='imageTat__title'>Важная новость!</h3>
            <p className='imageTat__text'>
              Судакчане продолжают отмечать большой праздник!
            </p>
            <p>
              Мы празднуем День рождения нашего самого Почетного гражданина, а,
              вернее, Гражданки
            </p>
            <p className='name'>Татьяны Валериевны!</p>
            <p>
              У кого-то есть только один Татьянин день, а у нас праздник на всю
              неделю!
            </p>
            <p>
              Поздравляем нашу любимую <span className='name1'>Татьяну!</span>
            </p>
            <p>Желаем ей здоровья и счастья!</p>
            <p>Потому что всему остальному нам всем только учиться у неё!</p>
            <p>
              С Днём рождения, <span className='name'>Танечка!</span>
            </p>
          </div>
          <div className='imageTat__wrapper-img'>
            <Image
              className='imageTat w-full h-auto'
              width={0}
              height={0}
              sizes='100vw'
              src={'/images/girl.jpg'}
              alt='image'
            />
            <Image
              className='imageTat'
              width={500}
              height={500}
              src={'/images/girl1.jpg'}
              alt='image'
            />
            <Image
              className='imageTat'
              width={500}
              height={500}
              src={'/images/girl2.jpg'}
              alt='image'
            />
          </div>
        </div> */}
        {/* ****FINISH for greetings***display: 'none*** */}

        {data.map((el, idx) => (
          <div key={idx} className='item-inner'>
            <a target='_blank' href={el.link}>
              <img src={el.imageUrl} alt={el.title} />
              <h2>
                {el.title}
                <span>Подробнее в первоисточнике... &#10132;</span>
              </h2>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
