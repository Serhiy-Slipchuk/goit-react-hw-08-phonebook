import iconHTML from '../../assets/images/htmI.svg';
import iconCSS from '../../assets/images/css.svg';
import iconSass from '../../assets/images/sass.svg';
import iconJs from '../../assets/images/js.svg';
import iconReact from '../../assets/images/react.svg';
import iconRedux from '../../assets/images/redux.svg';
import goIT from '../../assets/images/goit-logo.webp';
import css from './Technologies.module.scss';
import Paragraph from 'components/Paragraph/Paragraph';

const Technologies = function () {
  const technologiesList = [
    {
      id: '1',
      name: 'HTML',
      icon: iconHTML,
      urlWebDocs: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      id: '2',
      name: 'CSS',
      icon: iconCSS,
      urlWebDocs: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      id: '3',
      name: 'Sass',
      icon: iconSass,
      urlWebDocs: 'https://en.wikipedia.org/wiki/Sass_(style_sheet_language)',
    },
    {
      id: '4',
      name: 'JavaScript',
      icon: iconJs,
      urlWebDocs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      id: '5',
      name: 'React',
      icon: iconReact,
      urlWebDocs: 'https://en.wikipedia.org/wiki/React_(software)',
    },
    {
      id: '6',
      name: 'Redux',
      icon: iconRedux,
      urlWebDocs: 'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)',
    },
  ];

  return (
    <section className={css['technologies']}>
      <Paragraph text="This application is developed by front-end developer Serhiy Slipchuk using technologies:" />
      <ul className={css['tech-list']}>
        {technologiesList.map(({ id, name, icon, urlWebDocs }) => {
          return (
            <li key={id} className={css['tech-item']}>
              <a
                className={css['tech-link']}
                href={urlWebDocs}
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                <img src={icon} width={100} height={100} alt={name} />
                <p className={css['tech-text']}>{name}</p>
              </a>
            </li>
          );
        })}
      </ul>
      <Paragraph text="using backend, developed by" />
      <img className={css['tech-image']} src={goIT} alt="GoIT" />
    </section>
  );
};

export default Technologies;
