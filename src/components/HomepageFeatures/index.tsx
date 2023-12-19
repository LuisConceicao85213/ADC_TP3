import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Rápidos',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Na nossa oficina, a agilidade é a chave. Garantimos serviços rápidos e de qualidade para colocar você de volta na estrada com confiança.
      </>
    ),
  },
  {
    title: 'Eficazes',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Na nossa oficina, a velocidade não é apenas uma promessa, é a nossa expertise. Serviços eficazes e rápidos que garantem a excelência, proporcionando uma experiência automotiva única e eficiente..
      </>
    ),
  },
  {
    title: 'Baratos',
    Svg: require('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpikbest.com%2Ffree-png-images%2Fsave-money.html&psig=AOvVaw1qgltVcxvPdXUAt8LkvRn_&ust=1703109406206000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODjj5W_nIMDFQAAAAAdAAAAABAD').default,
    description: (
      <>
        Conosco os custos sao poucos e duradouros.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
