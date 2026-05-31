import React from 'react';

export function SEOContent() {
  return (
    <div className="space-y-16">
      <section id="what-is-gst" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">1. What is GST (Goods and Services Tax)?</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          The Goods and Services Tax (GST) is a revolutionary indirect tax system implemented in India on July 1, 2017. It was designed to replace a complex web of multiple indirect taxes like Value Added Tax (VAT), Central Excise Duty, Service Tax, and Luxury Tax. GST is a comprehensive, multi-stage, destination-based tax that is levied on every value addition in the supply chain.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          By adopting a "One Nation, One Tax" philosophy, GST has streamlined the taxation process, reduced the cascading effect of taxes (tax on tax), and improved the ease of doing business across state borders. It is divided into three main components: CGST (Central GST), SGST (State GST), and IGST (Integrated GST), which ensure that tax revenue is fairly distributed between the Central and State governments.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          The implementation of GST marked a paradigm shift in the Indian economy. It replaced the previous regime where taxes were levied by both the Central and State governments independently, often leading to double taxation and a "cascading effect" where tax was calculated on the tax already paid at previous stages. Under GST, tax is levied only on the value addition at each stage, and manufacturers or service providers can claim 'Input Tax Credit' for the taxes paid on their purchases.
        </p>
      </section>

      <section id="calculator-guide" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">2. VSNEXOS GST Calculator Guide</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Using the VSNEXOS GST Calculator is simple and intuitive. Whether you are a business owner calculating tax for an invoice or a consumer checking the tax on a purchase, our tool provides instant accuracy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 glass-card rounded-3xl space-y-4">
            <h4 className="font-bold text-indigo-600">Step 1: Choose Calculation Type</h4>
            <p className="text-slate-600 dark:text-slate-400">Select "GST Exclusive" if you want to add tax to a base price. Select "GST Inclusive" if you want to find out the base price from a total amount that already includes tax.</p>
          </div>
          <div className="p-8 glass-card rounded-3xl space-y-4">
            <h4 className="font-bold text-indigo-600">Step 2: Enter the Amount</h4>
            <p className="text-slate-600 dark:text-slate-400">Type in the numerical value. Our calculator works in real-time, so you'll see the results update as you type.</p>
          </div>
          <div className="p-8 glass-card rounded-3xl space-y-4">
            <h4 className="font-bold text-indigo-600">Step 3: Select GST Rate</h4>
            <p className="text-slate-600 dark:text-slate-400">Choose from the standard Indian GST slabs: 0%, 3%, 5%, 12%, 18%, or 28%. The tool automatically calculates the CGST and SGST/UTGST split.</p>
          </div>
          <div className="p-8 glass-card rounded-3xl space-y-4">
            <h4 className="font-bold text-indigo-600">Step 4: Download or Share</h4>
            <p className="text-slate-600 dark:text-slate-400">Once you have your result, you can copy it to your clipboard, share it via social media, or download a professional PDF report for your records.</p>
          </div>
        </div>
      </section>

      <section id="inclusive-formula" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">3. Understanding GST Inclusive Formula</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          GST Inclusive amount refers to the total value of a product or service after adding the GST amount to the original value of the product. Many retail prices are "Inclusive of all taxes." If you need to "back-calculate" to find the original price before tax, you use the inclusive formula.
        </p>
        <div className="bg-slate-900 text-indigo-300 p-8 rounded-3xl font-mono text-lg shadow-2xl">
          <p className="mb-2">// GST Inclusive Formula</p>
          <p>GST Amount = Total Amount - (Total Amount * (100 / (100 + GST Rate)))</p>
          <p>Net Price = Total Amount - GST Amount</p>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Example: If a product costs ₹1,180 (inclusive of 18% GST), the base price would be ₹1,000 and the GST amount would be ₹180.
        </p>
      </section>

      <section id="exclusive-formula" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">4. Understanding GST Exclusive Formula</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          GST Exclusive amount refers to the value of a product or service before adding the GST. This is common in B2B transactions where prices are quoted "plus GST." To find the total amount you need to pay, you add the calculated GST to the base price.
        </p>
        <div className="bg-slate-900 text-cyan-300 p-8 rounded-3xl font-mono text-lg shadow-2xl">
          <p className="mb-2">// GST Exclusive Formula</p>
          <p>GST Amount = (Base Price * GST Rate) / 100</p>
          <p>Total Amount = Base Price + GST Amount</p>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Example: If a service costs ₹1,000 (exclusive of 18% GST), you add ₹180 as tax, making the total payable ₹1,180.
        </p>
      </section>

      <section id="gst-slabs" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">5. Latest GST Slabs in India (2026)</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          The Indian government categorizes goods and services into different tax brackets to ensure social and economic balance. Essential items are taxed at lower rates, while luxury items attract higher taxes.
        </p>
        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white font-bold">
                <th className="px-6 py-4">Slab</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="px-6 py-4 font-bold text-indigo-600">0% (Exempt)</td>
                <td className="px-6 py-4">Essential Items</td>
                <td className="px-6 py-4">Fresh vegetables, milk, eggs, salt, books.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-indigo-600">5%</td>
                <td className="px-6 py-4">Mass Consumption</td>
                <td className="px-6 py-4">Sugar, spices, tea, edible oils, life-saving drugs.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-indigo-600">12%</td>
                <td className="px-6 py-4">Standard Rate (Lower)</td>
                <td className="px-6 py-4">Computers, processed food, mobile phones.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-indigo-600">18%</td>
                <td className="px-6 py-4">Standard Rate (Higher)</td>
                <td className="px-6 py-4">Industrial goods, capital goods, professional services.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold text-indigo-600">28%</td>
                <td className="px-6 py-4">Luxury/Sin Goods</td>
                <td className="px-6 py-4">Luxury cars, tobacco products, carbonated drinks.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="benefits-of-gst" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">6. Key Benefits of GST Implementation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="text-xl font-bold">Removal of Cascading Effect</h4>
            <p className="text-slate-600 dark:text-slate-400">Before GST, taxes were applied on already taxed items. GST allows for Input Tax Credit (ITC), where businesses can offset tax paid on inputs against tax collected on sales.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-bold">Simplified Compliance</h4>
            <p className="text-slate-600 dark:text-slate-400">A single portal for registration, filing, and refunds has significantly reduced the paperwork and administrative burden for Indian businesses.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-bold">Unified National Market</h4>
            <p className="text-slate-600 dark:text-slate-400">The removal of check posts and entry taxes at state borders has improved logistics and made it easier for companies to operate across India.</p>
          </div>
        </div>
      </section>

      <section id="gst-for-businesses" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">7. GST Compliance for Businesses</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          For any business in India, understanding GST registration is crucial. If your annual turnover exceeds ₹40 lakhs (for goods) or ₹20 lakhs (for services), registration is mandatory. Some states in the North East have lower thresholds of ₹10 lakhs.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Registered businesses must issue GST-compliant invoices, maintain proper records of purchases and sales, and file regular returns (GSTR-1, GSTR-3B). Failure to comply can lead to penalties and loss of Input Tax Credit.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Business owners should also be aware of the 'Composition Scheme', which is designed for small taxpayers with a turnover of up to ₹1.5 crore. Under this scheme, businesses can pay a fixed percentage of their turnover as tax and file quarterly returns instead of monthly ones. This significantly reduces the compliance burden for small retailers and restaurants.
        </p>
      </section>

      <section id="gst-for-freelancers" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">8. GST Guide for Freelancers and Consultants</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Freelancers providing services like software development, design, or marketing often wonder if they need GST. If you provide services to clients within India and your turnover is above ₹20 lakhs, you must register.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          For export of services (working for international clients), GST is technically 0% under the "Zero Rated Supply" rules, provided you have a Letter of Undertaking (LUT). However, registration is still required if you cross the threshold.
        </p>
      </section>

      <section id="gst-invoices" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">9. Essential Components of a GST Invoice</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          A valid GST invoice must contain specific details to be legally recognized. These include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
          <li>Name, address, and GSTIN of the supplier.</li>
          <li>A unique consecutive serial number for the financial year.</li>
          <li>Date of issue.</li>
          <li>Name, address, and GSTIN of the recipient (if registered).</li>
          <li>HSN code for goods or SAC code for services.</li>
          <li>Description of goods or services.</li>
          <li>Total value and taxable value.</li>
          <li>Tax rate (CGST, SGST, or IGST).</li>
          <li>Signature of the authorized supplier.</li>
        </ul>
      </section>

      <section id="faq-extended" className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">10. Frequently Asked Questions (FAQ)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Is GST mandatory for small shops?</h4>
            <p className="text-slate-600 dark:text-slate-400">Only if the annual turnover exceeds the threshold (usually ₹40 lakhs for goods). Smaller shops can opt for the Composition Scheme for easier compliance.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold">What is the difference between CGST and SGST?</h4>
            <p className="text-slate-600 dark:text-slate-400">CGST is the Central portion of the tax, while SGST is the State portion. For a 12% GST rate, 6% goes to the Center and 6% goes to the State.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold">How often should I file GST returns?</h4>
            <p className="text-slate-600 dark:text-slate-400">Most businesses file monthly returns (GSTR-3B). Smaller businesses under the QRMP scheme can file quarterly but pay tax monthly.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Can I calculate GST for international prices?</h4>
            <p className="text-slate-600 dark:text-slate-400">Yes, the mathematical formula remains the same regardless of currency. Just enter the amount and the applicable tax rate for your region.</p>
          </div>
        </div>
      </section>
      
      <section id="hsn-sac-codes" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">11. HSN and SAC Codes Explained</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          HSN (Harmonized System of Nomenclature) is an international classification system for goods. In India, it is used to identify the GST rate applicable to different products. Similarly, SAC (Services Accounting Code) is used for classifying services.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Using the correct HSN or SAC code is essential for accurate invoicing and return filing. Businesses with a turnover of more than ₹5 crore must use 6-digit HSN codes, while those with less than ₹5 crore can use 4-digit codes for B2B invoices.
        </p>
      </section>

      <section id="gst-for-startups" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">12. GST for Startups and New Businesses</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          For startups, getting GST registration early can be beneficial even if the turnover is below the threshold. It allows the business to claim Input Tax Credit on capital goods, office rentals, and professional services, which can significantly reduce the initial burn rate.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Moreover, many B2B clients prefer working with GST-registered vendors as it allows them to claim ITC on their purchases. Being GST-compliant also builds trust and professional credibility in the market.
        </p>
      </section>

      <section id="gst-ecommerce" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">13. GST Rules for E-commerce Sellers</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          If you are selling products through platforms like Amazon, Flipkart, or your own Shopify store, GST registration is mandatory regardless of your turnover. E-commerce operators are also required to collect TCS (Tax Collected at Source) at the rate of 1% on the net value of taxable supplies made through them.
        </p>
      </section>

      <section id="gst-penalties" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">14. GST Penalties and Late Fees</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Filing GST returns after the due date attracts a late fee. Currently, the late fee is ₹50 per day of delay (₹25 for CGST and ₹25 for SGST) for regular taxpayers, and ₹20 per day for 'Nil' return filers. The maximum late fee is usually capped at ₹5,000.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          In addition to late fees, interest at 18% per annum is charged on the outstanding tax amount from the day following the due date.
        </p>
      </section>

      <section id="itc-rules" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">15. Input Tax Credit (ITC) Rules and Eligibility</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Input Tax Credit is the backbone of the GST system. It allows a taxpayer to reduce the tax they have already paid on inputs from the tax they have collected on their output. However, to claim ITC, certain conditions must be met:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
          <li>The taxpayer must possess a valid tax invoice or debit note.</li>
          <li>The goods or services must have been actually received.</li>
          <li>The supplier must have paid the tax to the government.</li>
          <li>The taxpayer must have filed their GST returns.</li>
          <li>The input must be used for business purposes only.</li>
        </ul>
      </section>

      <section id="gst-audit" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">16. GST Audit Requirements</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Previously, businesses with a turnover exceeding ₹2 crore were required to undergo a GST audit by a CA or CMA. However, the government has now replaced this with a self-certification requirement. Businesses with a turnover of more than ₹5 crore must file a self-certified reconciliation statement in Form GSTR-9C.
        </p>
      </section>

      <section id="gstr-returns" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">17. Different Types of GST Returns</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          GST returns are the primary way businesses report their sales, purchases, and tax liability to the government. There are several types of returns, but the most common ones are:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400 text-lg">
          <li><strong>GSTR-1:</strong> Used to report details of outward supplies (sales). Filed monthly or quarterly.</li>
          <li><strong>GSTR-3B:</strong> A self-declaration summary return for reporting tax liability and paying tax. Filed monthly.</li>
          <li><strong>GSTR-4:</strong> Annual return for taxpayers registered under the Composition Scheme.</li>
          <li><strong>GSTR-9:</strong> Annual consolidated return for regular taxpayers.</li>
        </ul>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Timely filing of these returns is essential to maintain a good 'GST Compliance Rating', which can affect a business's reputation and its ability to claim ITC.
        </p>
      </section>

      <section id="gst-conclusion" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">18. Conclusion: The Importance of Accurate GST Calculation</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          In the modern Indian business landscape, GST compliance is not just a legal requirement but a strategic advantage. Accurate calculations ensure that you don't overpay taxes, avoid penalties, and maintain healthy cash flow through proper ITC management.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          The VSNEXOS GST Calculator is designed to be your reliable partner in this journey, providing you with the precision and speed you need to focus on what matters most—growing your business.
        </p>
      </section>

      <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-800 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          This comprehensive GST guide was professionally written for VSNEXOS to provide accurate financial information. We update our content regularly to reflect the latest changes in Indian tax laws.
        </p>
      </div>
    </div>
  );
}
