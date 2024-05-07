import { styles } from './portfolio-component.style';
import CmBlogLayout from '@/components/commons/layouts/cm-blog-layout';

export default function PortfolioComponent() {
  return (
    <>
      <style jsx>{styles}</style>
      <CmBlogLayout>
        <h2 style={{ marginTop: 50 }}>Comming soon...</h2>
      </CmBlogLayout>
    </>
  );
}
