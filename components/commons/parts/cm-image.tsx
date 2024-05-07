import { Image, ImageProps } from 'antd/lib';

export type CmImageProps = ImageProps;

export default function CmImage(props: CmImageProps) {
  return <Image {...props}></Image>;
}
