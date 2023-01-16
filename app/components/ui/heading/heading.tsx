import { FC, PropsWithChildren } from 'react';

import cn from 'clsx';

const Heading: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
    <h1 className={cn('ml-auto w-2/3 text-right text-6x1 font-black text-gray', className)}>
      {children}
    </h1>
  );
};

export default Heading;
