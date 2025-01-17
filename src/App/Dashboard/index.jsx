import './styles.css';
import hand from '../Images/emogiHand.svg';

import { DashboardCard } from '../Components/DashboardCard/DashboardCard';
import exerciseIcone from '../Images/exerciseIcone.svg';
import BlogIcone from '../Images/blogIcon2.svg';
import CodeIcone from '../Images/codeIcon.svg';
import FaqIcon from '../Images/FaqIcon.svg';
import personalcard from '../Images/personalcard.svg';
import DominikProfile from '../Images/DominikProfile.jpg';
export const Dashboard = () => {
  const availableCards = [
    {
      sectionTitle: 'Moje CV',
      icon: <img src={personalcard} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <img src={exerciseIcone} alt="business card resume" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/exercises',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={BlogIcone} alt="business card resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={CodeIcone} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/techstack',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={FaqIcon} alt="business card resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ];
  return (
    <div className="dashboard">
      <header>
        <div className="dasboard-head">
          <h3><img src={hand} alt="hand" />Hej, tutaj Dominik!</h3>
          <p>
            Poniżej znajdziesz najważniejsze informacje na temat mojej
            działalności
          </p>
        </div>

      </header>
      <div className="windows">
        {availableCards.map((card) => {
          return (
            <div className="window-main">
              <DashboardCard
                sectionTitle={card.sectionTitle}
                icon={card.icon}
                description={card.description}
                link={card.link}
              />
            </div>
          );
        })}
      </div>
      <aside className='personal-info'>
        <div >
          <div className="profile-img">
            <img className="img-placeholder" src={DominikProfile} alt="" />
            <h2>Dominik Reszczyński</h2>
            <p>Brzeg</p>
          </div>
          <div className="info">
            <p>e-mail:</p>
            <p style={{ marginBottom: '30px' }}>
              <a href="mailto:dominikreszczynski10@gmail.com">
                dominikreszczynski10@gmail.com
              </a>
            </p>
            <p>telefon:</p>
            <p>
              <a href="tel:+48516802283">+48 516 802 283</a>
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};
