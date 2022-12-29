import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tty to be sincere',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        你喜欢的紫是哪种紫，香芋紫、麻薯紫、藕荷紫还是鸢尾紫？后来吸取了自己毛衣上的紫色，准确的说是a19bf4紫。
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        盛意以江河，江河不及你。
      </>
    ),
  },
  {
    title: 'Powered by Action',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        对于首页所有svg的选择，大致都是love为主题，看到这个teddy bear and girl，就想起来little bear守护一根小蜡烛。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
