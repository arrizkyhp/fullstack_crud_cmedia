import Link from 'next/link';

type BreadcrumbProps = {
  breadcrumbs: {
    name: string;
    path: string;
    isActive?: boolean;
  }[];
};

const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  return (
    <nav>
      <ul className="flex">
        {breadcrumbs.map(({ name, path, isActive }, index: number) => (
          <li key={path}>
            <Link
              className={`underline ${isActive && 'font-bold'}`}
              href={path}
            >
              {name}
            </Link>
            {index < breadcrumbs.length - 1 && <span className="px-2">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
