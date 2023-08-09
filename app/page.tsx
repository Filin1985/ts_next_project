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
    </main>
  );
}
