import { Xmark } from 'framework7-icons/react';
import { MdClose } from 'react-icons/md';
import { useTheme } from 'konsta/react';

export default function CloseIcon() {
  const theme = useTheme();
  return theme === 'ios' ? (
    <Xmark className="size-5" />
  ) : (
    <MdClose className="size-6" />
  );
}
