import { styles } from './link-component.style';
import CmBlogLayout from '@/components/commons/layouts/cm-blog-layout';

export default function LinkComponent() {
  const qiitaUrl = process.env.NEXT_PUBLIC_QIITA_URL ?? '';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? '';
  const xUrl = process.env.NEXT_PUBLIC_X_URL ?? '';

  return (
    <>
      <style jsx>{styles}</style>
      <CmBlogLayout>
        <div className="link-section">
          <h2 className="section-title">リンク集</h2>
          <ul className="link-section-list">
            <li>
              <h2>Qiita</h2>
              <a href={qiitaUrl} target="_blank">
                {qiitaUrl}
              </a>
            </li>
            <li>
              <h2>GitHub</h2>
              <a href={githubUrl} target="_blank">
                {githubUrl}
              </a>
            </li>
            <li>
              <h2>Twitter(X)</h2>
              <a href={xUrl} target="_blank">
                {xUrl}
              </a>
            </li>
          </ul>
        </div>
      </CmBlogLayout>
    </>
  );
}
