import Link from 'next/link';

type BreadcrumbProps = {
  breadcrumbs: {
    name: string;
    path: string;
  }[];
};

const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) => {
  return (
    <nav>
      <ul className="flex">
        {breadcrumbs.map(({ name, path }, index: number) => (
          <li key={path}>
            <Link className="underline" href={path}>
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
