import { Image } from 'antd/lib';
import { styles } from './profile-component.style';
import CmBlogLayout from '@/components/commons/layouts/cm-blog-layout';
import CmImage from '@/components/commons/parts/cm-image';

type secondaryItemType = {
  category: string;
  details?: string;
};

type skillTree = {
  primaryItem: string;
  secondaryItem: secondaryItemType[];
};

export default function ProfileComponent() {
  const skillTrees: skillTree[] = [
    {
      primaryItem: 'フロントエンド',
      secondaryItem: [
        { category: 'HTML', details: '' },
        { category: 'CSS/Sass', details: '' },
        {
          category: 'JavaScript/TypeScript',
          details: 'React, Next.js, jQuery, D3.js, axios, Jest'
        }
      ]
    },
    {
      primaryItem: 'バックエンド',
      secondaryItem: [
        {
          category: 'C#',
          details:
            'ASP.Net Web Forms, Web API, WPF, Blazor, XUnit, Entity Framework Core, Unity'
        },
        { category: 'Java', details: 'Spring Boot' }
      ]
    },
    {
      primaryItem: 'インフラ',
      secondaryItem: [
        { category: 'DB', details: 'Oracle, SQL Server, PostgreSQL' },
        {
          category: 'AWS',
          details:
            'AWS CDK, ECS, ApiGateway, Lambda, S3, AuroraDB, DynamoDB, CloudWatch, SNS, SQS, CloudFormation'
        }
      ]
    },
    {
      primaryItem: 'ツール',
      secondaryItem: [
        {
          category: 'IDE',
          details: 'Visual Studio, Visual Studio Code, Eclipse, Intellij IDEA'
        },
        {
          category: 'その他',
          details:
            'SourceTree, Subversion, Docker, GitHub Desktop, Jenkins, SonarQube, Azure Devopes, JMeter, A5-SQL, pgAdmin4'
        }
      ]
    },
    {
      primaryItem: 'OS',
      secondaryItem: [{ category: 'Windows' }, { category: 'Mac' }]
    },
    {
      primaryItem: '資格',
      secondaryItem: [
        { category: '基本情報技術者' },
        { category: '数学検定準一級' },
        { category: '統計検定二級' }
      ]
    }
  ];

  return (
    <>
      <style jsx>{styles}</style>
      <CmBlogLayout>
        <div className="profile-section">
          <h2 className="section-title">プロフィール</h2>
          <div className="profile-contents">
            <div className="profile-photo">
              <CmImage
                src="/image/profile-photo_0507093229.png"
                alt="プロフィール画像"
                width={100}
              ></CmImage>
              <div className="profile-name">
                <h3>横田 裕之（Hiroyuki Yokota）</h3>
              </div>
            </div>
            <div className="profile-biography">
              <div className="profile-biography-row">
                <h3>経歴</h3>
              </div>
              <div className="profile-biography-row">
                <span className="profile-biography-year">2012年</span>
                東京理科大学 理工学部 数学科 入学
              </div>
              <div className="profile-biography-row">
                <span className="profile-biography-year">2018年</span>
                東京理科大学 理工学部 数学科 卒業
              </div>
              <div className="profile-biography-row">
                <span className="profile-biography-year">2021年</span>
                Webエンジニアとしてフリーランス開始
              </div>
              <div className="profile-biography-row">
                <span className="profile-biography-year">2024年</span>
                東京理科大学 工学部 情報学科 入学
              </div>
            </div>
          </div>
        </div>
        <div className="skill-section">
          <h2 className="section-title">スキル集（※実務経験有のみ記載）</h2>
          <ul className="skill-section-list">
            {skillTrees.map((p) => (
              <li key={p.primaryItem}>
                <h3>{p.primaryItem}</h3>
                <ul>
                  {p.secondaryItem.map((s) => (
                    <li key={s.category}>
                      {s.category}
                      {s.details && (
                        <ul>
                          <li>{s.details}</li>
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </CmBlogLayout>
    </>
  );
}
