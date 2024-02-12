import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { getCustomers } from '@/app/lib/data';
import Folder from '@/app/ui/customers/folder-card';
import { Button } from '@/app/ui/button';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await getCustomers();
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-16 grid auto-cols-max grid-flow-col justify-end gap-6">
        <Button
          className="bg-red-500 hover:bg-red-400 active:bg-red-600"
          type="button"
        >
          Remove Customer
        </Button>
        <Button type="button">Add Customer</Button>
      </div>
      <div className="mt-16 flow-root">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {customers?.map((customer) => <Folder customer={customer} />)}
        </div>
      </div>
    </div>
  );
}
