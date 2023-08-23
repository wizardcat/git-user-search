import { FC } from 'react';
import { UserProps } from './index.props';
import styles from './index.module.css';

const User: FC<UserProps> = (props) => {
  const { avatar_url, name, bio, html_url } = props.userData;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>User Info</div>
      </div>
      <div className={styles.body}>
        <div className={styles.userAvatar}>
          <img src={avatar_url} alt="Avatar" />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userItem}>
            <div className={styles.userItem}>User Name:</div>
            <div className={styles.userItem}>{name}</div>
          </div>
          <div className={styles.userItem}>
            <div className={styles.userItem}>BIO:</div>
            <div className={styles.userItem}>{bio}</div>
          </div>
          <div className={styles.userItem}>
            <div className={styles.userItem}>GitHub profile:</div>
            <div className={styles.userItem}>
              <a href={html_url} rel="noreferrer" target="_blank">
                link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
