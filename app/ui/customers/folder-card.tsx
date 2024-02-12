import { TestCustomer } from '@/app/lib/definitions';
import Link from 'next/link';

export default async function Folder({ customer }: { customer: TestCustomer }) {
  const name = customer.name;
  const id = customer.id;

  return (
    <Link
      href={`/dashboard/customers/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      {name}
    </Link>
  );
}
