import {Htag, Card} from '@/components';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Card
        title='Как работать с CSS Grid'
        tag='Front-end'
        text='Грид-раскладка {CSS Grid Layout} представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.'
      />
      {/* <Button appearance='primary' type='button' arrow='right'>
        Кнопка
      </Button>
      <Pgraph size='s'>Привет</Pgraph>
      <Tag size='s'>Small</Tag>
      <Tag size='m' color='primary'>
        Small
      </Tag>
      <Tag size='s' color='green'>
        Small
      </Tag>
      <Tag size='s' color='ghost'>
        Small
      </Tag>
      <Tag size='m' color='red' href='https://yandex.ru'>
        Small
      </Tag> */}
    </main>
  );
}
