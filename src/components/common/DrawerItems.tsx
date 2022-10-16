import { FaFile } from 'react-icons/fa';

interface DrawerItemsProps {
  createdAt: string;
  title: string;
}

export function DrawerItems({ createdAt, title }: DrawerItemsProps) {
  return (
    <div className="flex">
      <div>
        <FaFile />
      </div>
      <div>
        <p className="text-gray-500">{createdAt}</p>
        <p className="text-white">{title}</p>
      </div>
    </div>
  );
}
