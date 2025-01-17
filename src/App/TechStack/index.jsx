import React, { useState } from 'react';
import './index.css';
import jsIcon from './TechStackIcon/JavaScriptIcon.svg';
import tsIcon from './TechStackIcon/TypeScriptLogo.svg';
import reactIcon from './TechStackIcon/ReactIcon.svg';
import htmlIcon from './TechStackIcon/HTML5Icon.svg';
import cssIcone from './TechStackIcon/CssIcon.svg';
import discordIcon from './TechStackIcon/DiscordIcon.svg';
import gitHubIcon from './TechStackIcon/GitHubIcon.svg';
import gitIcon from './TechStackIcon/GitIcon.svg';
import vsCodeIcon from './TechStackIcon/VSCodeIcon.svg';
import pythoneIcon from './TechStackIcon/PythoneIcon.svg';
import javaIcon from './TechStackIcon/JavaIcon.svg';
import bashIcon from './TechStackIcon/BashIcon.svg';
import webstormIcon from './TechStackIcon/WebstormIcon.svg';
import intellijIcon from './TechStackIcon/IntellijIcon.svg';
import netbeansIcon from './TechStackIcon/NetbeansIcon.svg';
import pycharmIcon from './TechStackIcon/PyCharmIcon.svg';
import msteamsIcon from './TechStackIcon/MsTeamsIcon.svg';
import { TechStackBlock } from './TechStackBlock/TechStackBlock';
import jestIcon from './TechStackIcon/JestIcon.svg';
import firebaseIcon from './TechStackIcon/FirebaseIcon.svg';
import reduxIcon from './TechStackIcon/ReduxIcon.svg';
import nodejsIcon from './TechStackIcon/NodejsIcon-1.svg'
import wordpressIcon from './TechStackIcon/wordpressIcon.svg'
import keystoneJSIcon from './TechStackIcon/keystonejsIcon.svg'
import ghostIcon from './TechStackIcon/ghostIcon.svg'
export const TechStack = () => {
  const [availableTechStackLanguage] = useState([
    {
      image: <img src={jsIcon} alt="js" />,
      text: 'JAVA SCRIPT',
    },
    {
      image: <img src={tsIcon} alt="ts" />,
      text: 'TYPE SCRIPT',
    },
    {
      image: <img src={reactIcon} alt="react" />,
      text: 'REACT',
    },
    {
      image: <img src={jestIcon} alt="jest" />,
      text: 'JEST',
    },
    {
      image: <img src={reduxIcon} alt="react" />,
      text: 'REDUX',
    },
    {
      image: <img src={htmlIcon} alt="html" />,
      text: 'HTML',
    },
    {
      image: <img src={cssIcone} alt="css" />,
      text: 'CSS',
    },
    {
      image: <img src={nodejsIcon} alt="css" />,
      text: 'NODE.JS',
    },
    {
      image: <img src={pythoneIcon} alt="python" />,
      text: 'PYTHON',
    },
    {
      image: <img src={javaIcon} alt="java" />,
      text: 'JAVA',
    },
    {
      image: <img src={bashIcon} alt="bash" />,
      text: 'BASH',
    },
    {
      image: <img src={gitIcon} alt="git" />,
      text: 'GIT',
    },
    {
      image: <img src={firebaseIcon} alt="firebase"></img>,
      text: 'FIREBASE',
    }
  ]);
  const [availableTechStackIDE] = useState([
    {
      image: <img src={vsCodeIcon} alt="vs code" />,
      text: 'VS CODE',
    },
    {
      image: <img src={webstormIcon} alt="webstorm" />,
      text: 'WebStorm',
    },
    {
      image: <img src={intellijIcon} alt="intellij" />,
      text: 'IntelliJ IDEA',
    },
    {
      image: <img src={netbeansIcon} alt="net beans" />,
      text: 'Net Beans',
    },
    {
      image: <img src={pycharmIcon} alt="pycharm" />,
      text: 'PyCharm',
    },
  ]);
  const [availableTechStackAPP] = useState([
    {
      image: <img src={gitHubIcon} alt="git hub" />,
      text: 'GIT HUB',
    },
    {
      image: <img src={discordIcon} alt="discord" />,
      text: 'Discord',
    },
    {
      image: <img src={msteamsIcon} alt="MsTeams" />,
      text: 'MsTeams',
    },
  ]);
  const [availableTechStackCMS] = useState([
    {
      image: <img src={wordpressIcon} alt="wordpress" />,
      text: 'WordPress',
    },
    {
      image: <img src={ghostIcon} alt="ghost" />,
      text: 'Ghost',
    },
    {
      image: <img src={keystoneJSIcon} alt="keystoneJS" />,
      text: 'KeystoneJS',
    },
  ]);
  return (
    <>
      <h3 className='techStack-text'>
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się od
        początku mojej nauki.
      </h3>

      <div className="TechStack">
        <p className="TechStack__title"> Języki Programowania </p>
        <div className="TechStack__module">
          {availableTechStackLanguage.map((item) => {
            return <TechStackBlock image={item.image} text={item.text} />;
          })}
        </div>
        <br />

        <p className="TechStack__title"> IDE </p>
        <div className="TechStack__module">
          {availableTechStackIDE.map((item) => {
            return <TechStackBlock image={item.image} text={item.text} />;
          })}
        </div>
        <br />

        <p className="TechStack__title"> CMS </p>
        <div className="TechStack__module">
          {availableTechStackCMS.map((item) => {
            return <TechStackBlock image={item.image} text={item.text} />;
          })}
        </div>
        <br />

        <p className="TechStack__title"> Inne aplikacje i strony </p>
        <div className="TechStack__module">
          {availableTechStackAPP.map((item) => {
            return <TechStackBlock image={item.image} text={item.text} />;
          })}
        </div>
      </div>
    </>
  );
};
