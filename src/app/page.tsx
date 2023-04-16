import { Inter } from 'next/font/google';
import Image from 'next/image';

import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

const Home = (): JSX.Element => {
  return (
    <div>
      <h1>Kota Kawakami</h1>
    </div>
  );
};

export default Home;
