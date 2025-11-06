
import React, { useState, useCallback, useEffect } from 'react';
import { getEducationalContent } from '../services/geminiService';
import { IconChevronDown, IconInfoCircle, learnIcons } from '../components/Icons';

const topics = [
  'What is SIP?',
  'Understanding Risk',
  'Asset Allocation',
  'Mutual Funds 101',
  'SEBI Mutual Fund Categories',
  'Tax Implications',
  'Time Value of Money',
  'Investment Strategies',
  'Red Flags to Watch',
  'Important Disclaimer',
];

const staticDisclaimerContent = `
**Educational Purpose Only:** All content provided here is for educational purposes and general information only. It is not personalized financial advice.

**Consult Professionals:** Always consult with SEBI-registered financial advisors before making investment decisions. Consider your financial situation, goals, and risk tolerance.

**Market Risks:** Mutual fund investments are subject to market risks. Past performance does not guarantee future results. Read all scheme-related documents carefully before investing.

**No Guarantees:** Neither returns nor principal is guaranteed. The value of your investment can go up or down. Investors must make their own investment decisions based on their own specific needs.
`;

const staticSebiContent = `
**SEBI (Securities and Exchange Board of India)** has categorized mutual funds to bring uniformity and make it easier for investors to compare schemes. Here's a broad overview:

**1. Equity Schemes (invests mainly in stocks)**
* **Large Cap:** At least 80% in top 100 companies by market capitalization.
* **Mid Cap:** At least 65% in companies ranked 101st to 250th.
* **Small Cap:** At least 65% in companies ranked 251st onwards.
* **Multi Cap:** At least 75% in equity, with minimum 25% each in large, mid, and small-cap stocks.
* **Flexi Cap:** At least 65% in equity, with the fund manager having the flexibility to invest across market caps.
* **ELSS (Equity Linked Saving Scheme):** At least 80% in equity with a 3-year lock-in period, offering tax benefits under Section 80C.
* **Sectoral/Thematic:** At least 80% in a specific sector (e.g., IT, Banking) or theme (e.g., ESG, Consumption).

**2. Debt Schemes (invests mainly in bonds and fixed-income instruments)**
* **Liquid Fund:** Invests in debt instruments with maturity up to 91 days. Low risk.
* **Corporate Bond Fund:** At least 80% in high-rated corporate bonds.
* **Gilt Fund:** At least 80% in government securities (G-secs). Very low credit risk.
* **Short/Medium/Long Duration Funds:** Classified based on the Macaulay duration of the portfolio, indicating sensitivity to interest rate changes.

**3. Hybrid Schemes (a mix of equity and debt)**
* **Aggressive Hybrid:** 65% to 80% in equity. Suitable for investors seeking equity exposure with some debt cushioning.
* **Balanced Hybrid:** 40% to 60% in both equity and debt.
* **Conservative Hybrid:** 10% to 25% in equity, with the rest in debt. Lower risk.
* **Dynamic Asset Allocation (Balanced Advantage):** Manages equity and debt exposure dynamically based on market conditions.

**4. Solution-Oriented & Other Schemes**
* **Retirement/Children's Funds:** Have a lock-in period designed for specific long-term goals.
* **Index Funds/ETFs:** Passively managed funds that track a specific market index like Nifty 50 or Sensex.

For the complete official circular from SEBI, you can refer to the document here: <a href="https://www.sebi.gov.in/legal/circulars/oct-2017/categorization-and-rationalization-of-mutual-fund-schemes_36199.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">SEBI Circular on Categorization of Mutual Fund Schemes</a>.
`;


// A simple markdown to HTML converter to handle bold text and lists.
const parseMarkdownToHTML = (markdown: string): string => {
    const lines = markdown.split('\n');
    let html = '';
    let inList = false;
  
    for (let line of lines) {
      // Bold text
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
      // List items
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        if (!inList) {
          html += '<ul>';
          inList = true;
        }
        html += `<li>${line.trim().substring(2)}</li>`;
      } else {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        if (line.trim().length > 0) {
          html += `<p>${line}</p>`;
        }
      }
    }
  
    if (inList) {
      html += '</ul>';
    }
  
    return html;
  };


const AccordionItem: React.FC<{
  title: string;
  Icon: React.FC<{ className?: string }>;
}> = ({ title, Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = useCallback(async () => {
    if (content || isLoading) return;

    if (title === 'Important Disclaimer') {
        setContent(staticDisclaimerContent);
        return;
    }
    
    if (title === 'SEBI Mutual Fund Categories') {
        setContent(staticSebiContent);
        return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const result = await getEducationalContent(title);
      setContent(result);
    } catch (err) {
      setError('Failed to load content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [title, content, isLoading]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !content) {
      fetchContent();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 transition-all duration-300">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-4">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
            {title !== 'Important Disclaimer' && title !== 'SEBI Mutual Fund Categories' && <p className="text-sm text-slate-500">{learnDescriptions[title]}</p>}
          </div>
        </div>
        <IconChevronDown className={`w-6 h-6 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 ml-14 border-t border-slate-200 pt-4">
          {isLoading && (
            <div className="flex items-center justify-start py-4">
              <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="ml-3 text-slate-500">Fetching wisdom...</p>
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}
          {content && (
            <div className="prose prose-sm prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(content) }} />
          )}
        </div>
      )}
    </div>
  );
};


const learnDescriptions: { [key: string]: string } = {
    'What is SIP?': 'Systematic Investment Plan allows you to invest a fixed amount regularly in mutual funds.',
    'Understanding Risk': 'Risk tolerance varies by individual based on age, income, and financial goals.',
    'Asset Allocation': 'Diversifying investments across asset classes helps balance risk and returns.',
    'Mutual Funds 101': 'Pooled investment vehicles professionally managed for optimal returns.',
    'SEBI Mutual Fund Categories': 'Understand how SEBI classifies mutual funds for clarity and uniformity.',
    'Tax Implications': 'Understanding taxation helps optimize your post-tax returns.',
    'Time Value of Money': 'Why starting early gives you a massive advantage.',
    'Investment Strategies': 'Proven approaches for successful wealth creation.',
    'Red Flags to Watch': 'Warning signs to avoid when selecting mutual funds.',
};

const Learn: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Investment Education Center</h1>
        <p className="text-lg text-slate-600">
          Master the fundamentals of smart investing and financial planning.
        </p>
      </div>
      <div className="space-y-4">
        {topics.map((topic) => (
          <AccordionItem key={topic} title={topic} Icon={learnIcons[topic]} />
        ))}
      </div>
    </div>
  );
};

export default Learn;