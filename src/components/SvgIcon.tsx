import { getSvgIconByName } from '@/utils/svgMap';
import React from 'react';

type SvgIconProps = {
  name: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
};

const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  width = 24,
  height = 24,
  fill = 'currentColor',
  className = '',
}) => {
  const Icon = getSvgIconByName(name);
  if (!Icon) return null;

  return <Icon width={width} height={height} fill={fill} className={className} />;
};

export default SvgIcon;
