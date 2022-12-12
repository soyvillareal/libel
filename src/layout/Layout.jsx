import s from './Layout.module.scss';
import Header from '../components/Header/Header';

const HomeLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      {children}
    </div>
  );
};

export default HomeLayout;
