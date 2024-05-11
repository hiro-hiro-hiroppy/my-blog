import Error_Component from '@/components/pages/error-component/error-component';

type ErrorPagePropsType = {
  statusCode?: number;
};

export default function Error({ statusCode }: ErrorPagePropsType) {
  return <Error_Component statusCode={statusCode}></Error_Component>;
}

Error.getInitialProps = ({ res }: any) => {
  const statusCode = res.statusCode;
  return { statusCode };
};
