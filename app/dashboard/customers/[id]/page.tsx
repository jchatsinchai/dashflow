import { Metadata } from 'next';
import { fetchCustomerById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export const metadata: Metadata = {
  title: 'Customer Page',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await fetchCustomerById(id);
  const name = customer.name;
  const contact = customer.contact;

  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: `${name}`,
            href: `/dashboard/customers/${id}`,
            active: true,
          },
        ]}
      />
      <div className="mt-8 grid gap-6">
        <p>{name}</p>
        <p>{contact}</p>
      </div>
    </div>
  );
}
