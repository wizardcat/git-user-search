import { FC } from 'react';
import styles from './index.module.css';

const Loader: FC=()=>(<div className={styles.containerLoader}><span className={styles.loader}></span></div> );

export default Loader;
