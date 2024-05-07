import { styles } from './error-component.style';
import CmBlogLayout from '@/components/commons/layouts/cm-blog-layout';

export default function Error_Component(props: any) {
  const statusCode = props.statusCode;
  const is404Status = statusCode === 404;
  const is500Status = statusCode === 500;

  return (
    <>
      <style jsx>{styles}</style>
      <CmBlogLayout className="error-section">
        {is404Status && (
          <div className="error-text">
            <h2>ページが見つかりません。</h2>
          </div>
        )}
        {is500Status && (
          <div className="error-text">
            <h2>内部エラーが発生しました。</h2>
          </div>
        )}
      </CmBlogLayout>
    </>
  );
}
