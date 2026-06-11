import { clsx } from 'clsx';
import { resolveIconSize, type IconSizeProp } from './_iconSize';

export interface BellRinging04IconProps {
  size?: IconSizeProp;
  className?: string;
  'aria-label'?: string;
}

export function BellRinging04Icon({ size = 'md', className, ...props }: BellRinging04IconProps) {
  const px = resolveIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('inline-block', className)}
      aria-hidden={!props['aria-label']}
      {...props}
    >
      <g clipPath="url(#bellringing04-clip0_118_46728)">
<path d="M13.0382 15.0121C13.3956 16.3458 12.6041 17.7166 11.2705 18.0739C9.93681 18.4313 8.56598 17.6398 8.20861 16.3062M1.71401 9.67751C1.38943 8.51234 1.72696 7.25267 2.59063 6.40591M10.1219 4.7838C10.3754 4.32772 10.4589 3.77647 10.3132 3.23263C10.0154 2.12125 8.87306 1.4617 7.76165 1.75949C6.65026 2.05729 5.99071 3.19966 6.28851 4.31105C6.43423 4.85487 6.78217 5.29052 7.22976 5.55875M16.9325 5.59976C16.631 4.42842 15.7088 3.50625 14.5375 3.20477M14.5755 7.87082C14.2781 6.76072 13.484 5.83242 12.3679 5.29013C11.2518 4.74786 9.90523 4.63602 8.62431 4.97924C7.34343 5.32246 6.23316 6.09261 5.53776 7.12027C4.84236 8.14792 4.6188 9.34892 4.91625 10.459C5.4084 12.2958 5.31283 13.761 5.00204 14.8745C4.64781 16.1435 4.47071 16.7781 4.51855 16.9055C4.5733 17.0513 4.61289 17.0913 4.75809 17.1475C4.885 17.1967 5.41814 17.0538 6.48442 16.7681L16.372 14.1188C17.4382 13.833 17.9714 13.6902 18.0567 13.5842C18.1543 13.4628 18.1686 13.4084 18.1431 13.2548C18.1209 13.1205 17.6502 12.6596 16.709 11.7377C15.8831 10.9288 15.0676 9.70751 14.5755 7.87082Z" stroke="currentColor" strokeWidth="1.6667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="bellringing04-clip0_118_46728">
<rect width="20" height="20" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  );
}
