import React from 'react';

const quickLinks = [
  { label: 'What Is GST?', href: '#what-is-gst' },
  { label: 'Calculator Guide', href: '#calculator-guide' },
  { label: 'Inclusive Formula', href: '#inclusive-formula' },
  { label: 'Exclusive Formula', href: '#exclusive-formula' },
  { label: 'GST Slabs', href: '#gst-slabs' },
  { label: 'Business Compliance', href: '#gst-for-businesses' },
  { label: 'Invoices', href: '#gst-invoices' },
  { label: 'ITC Rules', href: '#itc-rules' },
];

const stepCards = [
  {
    title: 'Choose the calculator mode',
    text: 'Use GST Exclusive when you want to add tax on top of a base amount, and GST Inclusive when you want to extract the tax portion from a final billed amount.',
  },
  {
    title: 'Enter the transaction amount',
    text: 'Type the amount you want to evaluate. The calculator updates in real time, so you can quickly compare tax outcomes for different values.',
  },
  {
    title: 'Pick the applicable GST slab',
    text: 'Select 0%, 3%, 5%, 12%, 18%, or 28% based on the relevant Indian GST category for the product or service.',
  },
  {
    title: 'Review and export the result',
    text: 'Check the base amount, GST amount, and total payable amount, then copy, share, or export the calculation for business records.',
  },
];

const slabRows = [
  ['0% (Exempt)', 'Essential goods', 'Fresh vegetables, milk, eggs, books, salt'],
  ['5%', 'Mass-use items', 'Tea, sugar, edible oil, packaged essentials'],
  ['12%', 'Lower standard slab', 'Processed foods, computers, some electronics'],
  ['18%', 'Main standard slab', 'Most services, industrial goods, business purchases'],
  ['28%', 'Luxury and demerit goods', 'High-end consumer items, tobacco, some vehicles'],
];

const invoicePoints = [
  'Supplier name, address, and GSTIN',
  'A unique invoice number and issue date',
  'Recipient name, address, and GSTIN when applicable',
  'HSN code for goods or SAC code for services',
  'Item description, taxable value, and tax rate',
  'Separate CGST, SGST, or IGST breakdown',
  'Total invoice value and authorized signature',
];

const returnTypes = [
  { name: 'GSTR-1', detail: 'Used to report outward supplies or sales.' },
  { name: 'GSTR-3B', detail: 'Summary return for tax liability and payment.' },
  { name: 'GSTR-4', detail: 'Annual return for composition taxpayers.' },
  { name: 'GSTR-9', detail: 'Annual return for regular registered taxpayers.' },
];

export function SEOContent() {
  return (
    <div className="space-y-10 md:space-y-12">
      <section className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 p-6 md:p-8 lg:p-10 space-y-6">
        <div className="space-y-3 max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            GST Resource Center
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            GST Guide for calculations, slabs, invoices, and compliance
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            This guide explains the practical side of GST in India, including how to use a GST calculator, how inclusive and exclusive tax formulas work, what the current slabs mean, and what businesses need for compliance and invoicing.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section id="what-is-gst" className="space-y-5 max-w-6xl">
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
          What is GST in India?
        </h3>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Goods and Services Tax is a destination-based indirect tax system introduced in India to replace multiple older taxes such as VAT, service tax, and excise duty. It simplifies taxation by applying a unified structure across the supply chain and allowing tax to be levied on value addition rather than repeatedly on the same base.
        </p>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          GST is typically divided into CGST, SGST, and IGST depending on whether a transaction happens within a state or across states. This structure helps both businesses and consumers understand how tax is applied on products and services in a more transparent way.
        </p>
      </section>

      <section id="calculator-guide" className="space-y-6">
        <div className="max-w-5xl space-y-3">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            How to use the GST calculator
          </h3>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            The VSNEXOS GST Calculator is designed for quick day-to-day calculations, whether you are preparing an invoice, checking a supplier quote, or validating the tax portion in a total amount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {stepCards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-6 md:p-7 space-y-3"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                Step {index + 1}
              </p>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{card.title}</h4>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
        <div id="inclusive-formula" className="space-y-5 rounded-[2rem] bg-slate-950 text-white p-6 md:p-8">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-black">GST inclusive formula</h3>
            <p className="text-slate-300 leading-relaxed">
              Use the inclusive formula when the final price already contains GST and you want to find the original base amount and tax portion separately.
            </p>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-5 font-mono text-sm md:text-base text-indigo-300 space-y-2">
            <p>GST Amount = Total Amount - (Total Amount × 100 / (100 + GST Rate))</p>
            <p>Base Amount = Total Amount - GST Amount</p>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Example: if the total billed price is ₹1,180 inclusive of 18% GST, the base amount is ₹1,000 and the GST amount is ₹180.
          </p>
        </div>

        <div id="exclusive-formula" className="space-y-5 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 p-6 md:p-8">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              GST exclusive formula
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Use the exclusive formula when your amount is before tax and you want to calculate the GST amount and final payable value.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-900 text-cyan-300 p-5 font-mono text-sm md:text-base space-y-2">
            <p>GST Amount = (Base Amount × GST Rate) / 100</p>
            <p>Total Amount = Base Amount + GST Amount</p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Example: if the base amount is ₹1,000 and GST is 18%, the tax is ₹180 and the total becomes ₹1,180.
          </p>
        </div>
      </section>

      <section id="gst-slabs" className="space-y-6">
        <div className="max-w-5xl space-y-3">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Current GST slabs in India
          </h3>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Indian GST rates are grouped into different slabs based on the nature of the product or service. Essentials generally fall into lower slabs, while luxury and demerit goods attract higher tax rates.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40">
          <table className="w-full min-w-[720px] text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white">
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Slab</th>
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Category</th>
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Common examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
              {slabRows.map((row) => (
                <tr key={row[0]}>
                  <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400">{row[0]}</td>
                  <td className="px-6 py-4">{row[1]}</td>
                  <td className="px-6 py-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        <div id="gst-for-businesses" className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            GST compliance for businesses
          </h3>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Businesses crossing the applicable turnover threshold generally need GST registration, periodic return filing, tax payment, proper invoicing, and record keeping. Good GST compliance reduces risk, improves vendor confidence, and makes it easier to claim input tax credit.
          </p>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Even smaller businesses often monitor GST closely because registration can become necessary based on turnover, interstate transactions, or platform-based selling requirements.
          </p>
        </div>

        <div id="gst-for-freelancers" className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            GST for freelancers and consultants
          </h3>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Freelancers, agencies, and consultants often need GST calculations for service billing, retainers, digital work, and interstate client engagements. Knowing whether a quote is inclusive or exclusive helps prevent undercharging or issuing incorrect invoices.
          </p>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            If your turnover or business activity triggers registration requirements, GST-compliant invoicing becomes an important part of professional operations.
          </p>
        </div>
      </section>

      <section id="gst-invoices" className="space-y-6">
        <div className="max-w-5xl space-y-3">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Essential elements of a GST invoice
          </h3>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            A proper GST invoice needs more than just an amount and tax rate. The right information supports return filing, buyer verification, and accurate bookkeeping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {invoicePoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 px-5 py-4 text-slate-700 dark:text-slate-300"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        <div id="hsn-sac-codes" className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            HSN and SAC codes explained
          </h3>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            HSN codes classify goods and SAC codes classify services under GST. Using the right code helps identify the applicable GST rate, improves invoice accuracy, and reduces mismatches during compliance and reporting.
          </p>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            As businesses grow, correct code usage becomes even more important for B2B billing, audits, and return reconciliation.
          </p>
        </div>

        <div id="itc-rules" className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Input Tax Credit rules and eligibility
          </h3>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Input Tax Credit allows businesses to offset GST paid on purchases against GST collected on sales. To claim ITC properly, the invoice must be valid, goods or services must be received, and the purchase must be tied to business use.
          </p>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            ITC is one of the biggest reasons accurate GST calculation and invoice structuring matter in routine financial workflows.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10">
        <div id="gstr-returns" className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Common GST returns businesses should know
          </h3>
          <div className="space-y-4">
            {returnTypes.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 px-5 py-4"
              >
                <p className="text-lg font-bold text-slate-900 dark:text-white">{item.name}</p>
                <p className="mt-1 text-slate-600 dark:text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="gst-conclusion" className="rounded-[2rem] bg-gradient-to-br from-indigo-600 to-cyan-600 p-6 md:p-8 text-white space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-100">
            Why It Matters
          </p>
          <h3 className="text-2xl md:text-3xl font-black">
            Accurate GST calculation supports better business decisions
          </h3>
          <p className="text-indigo-100 leading-relaxed">
            Whether you are pricing products, issuing invoices, checking supplier tax, or planning compliance, accurate GST calculations reduce manual errors and improve confidence.
          </p>
          <p className="text-indigo-100 leading-relaxed">
            The VSNEXOS GST Calculator is built to make that process faster, clearer, and easier for businesses, freelancers, and individual users across India.
          </p>
        </div>
      </section>
    </div>
  );
}
