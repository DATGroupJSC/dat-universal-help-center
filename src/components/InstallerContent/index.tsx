import Link from '@docusaurus/Link';
import {installerGuideGroups, installerSteps} from '@site/src/data/installerContent';
import styles from './styles.module.css';

export function InstallerCards({steps = false}: {steps?: boolean}) {
  const entries = steps
    ? installerSteps.map(item => ({title: item.title, to: '/huong-dan/nha-lap-dat/su-dung-nen-tang/sau-buoc/' + item.id}))
    : installerGuideGroups.map(item => ({title: item.title, to: '/huong-dan/nha-lap-dat/' + item.id}));
  return <section className="ambassador-topic-cards" aria-label={steps ? 'Hướng dẫn thao tác 6 bước' : 'Chủ đề dành cho Nhà lắp đặt'}>
    <div className={styles.grid}>
      {entries.map(item => <Link className={`ambassador-topic-card ${styles.card}`} key={item.to} to={item.to}><h2>{item.title}</h2></Link>)}
    </div>
  </section>;
}
