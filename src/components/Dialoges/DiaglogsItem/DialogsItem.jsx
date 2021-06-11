import styles from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  const path = '/Dialogs/' + props.id

  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem