import { FC, PropsWithChildren } from 'react';

import cn from 'clsx';

const Heading: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <h1 className={cn('font-bolt text-right text-6x1 uppercase text-gray', className)}>
      {children}
    </h1>
  );
};

export default Heading;
