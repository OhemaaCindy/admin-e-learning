interface InvoiceItem {
  id: string;
  name: string;
  amount: number;
  avatar: string;
}

const InvoiceList: React.FC<{ invoices: InvoiceItem[] }> = ({ invoices }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Latest Invoice
      </h3>
      <div className="space-y-1">
        <div className="flex justify-between text-xs font-medium text-gray-500 uppercase tracking-wide pb-3">
          <span>Name</span>
          <span>Amount</span>
        </div>
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center space-x-3">
              <img
                src={invoice.avatar}
                alt={invoice.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-medium text-gray-900">{invoice.name}</span>
            </div>
            <span className="font-semibold text-gray-900">
              ${invoice.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceList;
