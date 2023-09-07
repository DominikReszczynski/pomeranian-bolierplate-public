import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import techstackIcon from '../Images/codeIcon.svg';
import faqIcon from '../Images/faq.svg';
import hitthemoleIcon from '../Images/HitTheMoleIcon.svg';
import memoIcon from '../Images/MemoIcon.svg';
import formIcon from '../Images/FormIcon.svg';
import codewarsIcon from '../Images/codewarsIcon.svg'
import githubIcon from '../TechStack/TechStackIcon/GitHubIcon.svg'
import linkedinIcon from '../Images/linkedinIcon.svg'
import certyficatsIcon from '../Images/certificateIcon.svg'
import todoIcon from '../Images/list-checkIcon.svg'
export function AppAside({ menuIsVisible }) {
  return (
    <aside className={menuIsVisible ? "menu__visible" : ""}>
      <nav>
        <ul>
          <div className="aside-row__conteiner">
            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="dashboard">
                <HouseIcon className="icon" />
                <b>Dashboard</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="cv">
                <PersonalCardIcon className="icon" />
                <b>Moje CV</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="techstack">
                <img src={techstackIcon} className="icon--techstack" alt='' />
                <b>Tech Stack</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="certyficats">
                <img src={certyficatsIcon} className="icon" alt='' />
                <b>Certyfikaty</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="exercises">
                <EditIcon className="icon" />
                <b>Ćwiczenia</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="todoList">
                <img src={todoIcon} className="icon" alt='' />
                <b>To Do List</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="form">
                <img src={formIcon} className="icon" alt='' />
                <b>Formularz</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="hit-the-mole">
                <img src={hitthemoleIcon} className="icon" alt='' />
                <b>Gra | Kret</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="memo">
                <img src={memoIcon} className="icon" alt='' />
                <b>Gra | Memo</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className="asied_row__link__conteiner" to="FAQ">
                <img src={faqIcon} className="icon" alt='' />
                <b>FAQ</b>
              </NavLink>
            </li>
          </div>
          <br />
          <hr color="grey" />
          <br />

          <li className="aside-row">
            <a href='https://www.codewars.com/users/DominikReszczynski' target="_blank" className='aside-row__link' rel="noreferrer">
              <img src={codewarsIcon} className="icon" alt="CW" />
              <b>Codewars</b>
            </a>
          </li>
          <li className="aside-row">
            <a href='https://github.com/DominikReszczynski' target="_blank" className='aside-row__link' rel="noreferrer">
              <img src={githubIcon} className="icon github" alt="GH" />
              <b>GitHub</b>
            </a>
          </li>
          <li className="aside-row">
            <a href='https://www.linkedin.com/in/dominikreszczynski/' target="_blank" className='aside-row__link' rel="noreferrer">
              <img src={linkedinIcon} className="icon" alt="LD" />
              <b>Linkedin</b>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
