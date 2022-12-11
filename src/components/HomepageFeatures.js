import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tty to be sincere',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        对于网站主题色的选择斟酌了很久，想着你喜欢的紫是哪种紫，香芋紫、麻薯紫、藕荷紫还是鸢尾紫？后来提取了自己毛衣上的紫色，准确的说是a19bf4紫，标准的a19bf4紫。
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        对于首页的三段话想一想，先写一些小巧思好了，目前主要用来记录的。
      </>
    ),
  },
  {
    title: 'Powered by Action',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        对于首页所有svg的选择，大致都是love为主题，这个teddy bear就和little bear守护一根小蜡烛呼应。
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
