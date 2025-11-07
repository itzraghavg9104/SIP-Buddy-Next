

import React, { useState, useCallback, useEffect } from 'react';
import { getEducationalContent } from '../services/geminiService';
import { IconChevronDown, IconBook, learnIcons } from '../components/Icons';

const topics = [
    // Foundational Concepts
    'What is SIP?',
    'Time Value of Money',
    'Mutual Funds 101',
    'Mutual Funds vs. Stocks',
    'SEBI Mutual Fund Categories',
    // Fund Selection & Analysis
    'Choosing the Right Mutual Fund',
    'What is Expense Ratio?',
    'Key Ratios & Metrics',
    'Understanding Sharpe Ratio',
    'Understanding Risk',
    // Portfolio Strategy
    'Asset Allocation',
    'The Danger of Portfolio Overlap',
    'Investment Strategies',
    'Tax Implications',
    // Warnings & Disclaimers
    'Red Flags to Watch',
    'Important Disclaimer',
];


const staticContent: { [key: string]: string } = {
    'Important Disclaimer': `
    **Educational Purpose Only:** All content provided here is for educational purposes and general information only. It is not personalized financial advice.
    *   **Consult Professionals:** Always consult with SEBI-registered financial advisors before making investment decisions. Consider your financial situation, goals, and risk tolerance.
    *   **Market Risks:** Mutual fund investments are subject to market risks. Past performance does not guarantee future results. Read all scheme-related documents carefully before investing.
    *   **No Guarantees:** Neither returns nor principal is guaranteed. The value of your investment can go up or down. Investors must make their own investment decisions based on their own specific needs.
    `,
    'SEBI Mutual Fund Categories': `
    **SEBI (Securities and Exchange Board of India)** has categorized mutual funds to bring uniformity and make it easier for investors to compare schemes. Here's a broad overview:
    *   **Equity Schemes (invests mainly in stocks):** Large Cap, Mid Cap, Small Cap, Multi Cap, Flexi Cap, ELSS (Tax Saver), Sectoral/Thematic.
    *   **Debt Schemes (invests mainly in bonds):** Liquid Fund, Corporate Bond Fund, Gilt Fund, and funds based on duration (Short, Medium, Long).
    *   **Hybrid Schemes (a mix of equity and debt):** Aggressive Hybrid, Conservative Hybrid, and Balanced Advantage Funds.
    *   **Other Schemes:** Index Funds, Fund of Funds (for international exposure), and solution-oriented schemes like retirement or children's funds.
    For the complete official circular, you can refer to the document here: <a href="https://www.sebi.gov.in/legal/circulars/oct-2017/categorization-and-rationalization-of-mutual-fund-schemes_36199.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">SEBI Circular on Categorization of Mutual Fund Schemes</a>.
    `,
    'Choosing the Right Mutual Fund': `
    Choosing the right mutual fund can feel like building a championship sports team. You need the right players, a good strategy, and a clear goal. Here's a simple guide to help you scout the best funds:
    *   **Know Your Goal (The Championship Trophy):** What are you investing for? Retirement? A house down payment? Your goal determines your strategy. A long-term goal like retirement allows you to pick aggressive, high-growth players (equity funds), while a short-term goal needs steady, reliable players (debt funds).
    *   **Check the Fund Manager (The Coach):** The fund manager is the coach of your investment team. Look into their experience and track record. A seasoned coach who has successfully navigated different market conditions is a valuable asset.
    *   **Review Past Performance (Player Statistics):** While past performance doesn't guarantee future results, it's like looking at a player's stats. Check the fund's returns over the last 3, 5, and 10 years. Is it consistently outperforming its rivals (benchmark index)?
    *   **Understand the Expense Ratio (The Player's Salary):** This is the fee you pay for the fund manager's expertise. A lower expense ratio means more of your money stays invested and working for you. A star player might deserve a high salary, but make sure the performance justifies the cost!
    *   **Look at the Portfolio (The Team Roster):** What companies or bonds is the fund invested in? Does the roster align with the team's strategy? If it's a "Technology Sector" team, you'd expect to see top tech companies on the roster. Diversification is key—you don't want all your players in one position.
    `,
    'What is Expense Ratio?': `
    Imagine you hire a professional chef to manage your kitchen and cook your meals. The chef does all the hard work: researching recipes, buying ingredients, and preparing delicious food. For this service, they charge a small management fee. The **Expense Ratio** is exactly like that fee, but for your mutual fund.
    *   **What it is:** It's an annual fee charged by the mutual fund company (the chef) to cover its operating costs. This includes the fund manager's salary, research team's fees, advertising, and administrative costs.
    *   **How it works:** The fee is expressed as a percentage of the fund's total assets. For example, an expense ratio of 1% means that for every ₹10,000 you invest, you're paying ₹100 per year to the fund house. This fee is deducted from your investment's returns automatically—you won't see a separate bill.
    *   **Why it matters:** A small percentage might not seem like much, but over the long term, it can significantly impact your returns. Think of it as a small leak in a bucket; over time, you lose a lot of water.
    **The Analogy:** Two chefs are offering you the same meal (investment returns). Chef A charges a 0.5% fee, while Chef B charges a 1.5% fee. If both chefs cook an equally delicious meal, you'd obviously choose Chef A to save money. Similarly, when comparing two funds with similar performance, the one with the lower expense ratio will leave you with more wealth in your pocket. Always check the expense ratio before investing!
    `,
    'Understanding Sharpe Ratio': `
    Imagine you're planning a road trip from Mumbai to Goa and have two car options.
    *   **Car A:** A high-performance sports car. It's incredibly fast, but the ride is bumpy, noisy, and it's a bit risky to handle on sharp turns.
    *   **Car B:** A luxury sedan. It's still very fast—almost as fast as the sports car—but the ride is incredibly smooth, quiet, and safe.
    Which car would you choose? Most people would pick the luxury sedan. It offers a great reward (speed) for a much lower level of risk (a smooth, safe ride).
    The **Sharpe Ratio** is a tool that helps you make this exact decision for your investments. It doesn't just look at the investment's returns (the car's speed); it tells you how much return you're getting for the amount of risk (the bumpiness of the ride) you're taking on.
    *   **What it measures:** It measures the **risk-adjusted return**.
    *   **How to read it:** A **higher Sharpe Ratio is better**. It means the investment is giving you more return for each unit of risk it takes.
    **The Analogy:** A fund with a **high Sharpe Ratio** is like the luxury sedan: it delivers excellent returns without wild, stomach-churning ups and downs (volatility). A fund with a **low Sharpe Ratio** is like the sports car: it might offer high returns, but the journey will be a stressful, bumpy ride. When comparing funds, the one with the higher Sharpe Ratio is generally considered the "smarter" investment.
    `,
    'Mutual Funds vs. Stocks': `
    Choosing between mutual funds and stocks is like deciding between ordering a full meal at a restaurant versus cooking a single dish yourself at home. Both can be great, but they serve different needs.
    **The Analogy: A Full Meal (Mutual Fund) vs. A Single Dish (Stock)**
    *   **Stocks (Cooking a Single Dish):** When you buy a stock, you're buying a piece of one company. It's like deciding to cook paneer butter masala. If you're a great cook and you nail the recipe, the reward is immense—it's the best paneer ever! But if you get it wrong, the entire meal is ruined. You have high risk and high potential reward, concentrated in one dish. It requires research, skill, and constant monitoring.
    *   **Mutual Funds (Ordering a Full Meal):** When you buy a mutual fund, you're getting a professionally managed portfolio containing dozens or even hundreds of stocks (and/or bonds). It's like ordering a 'thali' or a buffet. You get a bit of everything—dal, sabzi, roti, rice. If one dish isn't great, the others balance it out. The risk is spread out (diversified). A professional chef (the fund manager) handles all the cooking for you.
    **Key Differences:**
    *   **Diversification:** Stocks offer zero diversification on their own. Mutual funds offer instant diversification.
    *   **Management:** With stocks, you are the manager. With mutual funds, you hire a professional fund manager.
    *   **Cost:** Buying individual stocks has lower ongoing costs (no expense ratio), but requires a larger initial investment to build a diversified portfolio. Mutual funds have an expense ratio but allow you to start with a small amount.
    *   **Control:** You have full control over when to buy/sell individual stocks. In a mutual fund, the fund manager makes those decisions.
    **Which is right for you?** If you have the time, expertise, and capital to research and manage individual companies, stocks can be very rewarding. For most people, especially beginners, **mutual funds are a much safer and more practical way to start investing** in the stock market.
    `,
    'Key Ratios & Metrics': `
    Beyond simple returns, professional investors use several key metrics to judge a mutual fund's quality and behavior. Think of these as the advanced stats on a player's profile.
    *   **Turnover Ratio (Team Player Trades):** This shows how often the fund manager sells existing stocks and buys new ones. A **low turnover** (e.g., under 30%) suggests a long-term, buy-and-hold strategy. A **high turnover** (e.g., over 100%) means the manager is trading frequently, which can lead to higher costs and taxes. There's no "good" or "bad" number, but it tells you about the manager's style.
    *   **Alpha (The Coach's Secret Plays):** Alpha measures a fund manager's real skill. It's the **extra return** they generated compared to what was expected for the level of risk taken. A **positive alpha is great**—it means the manager's choices beat the market. A negative alpha means you would have been better off in a simple index fund.
    *   **Beta (The Car's Handling):** Beta measures a fund's volatility compared to the overall market (like the Nifty 50).
        - A **Beta of 1** means the fund moves in line with the market.
        - A **Beta > 1** (e.g., 1.2) means it's more volatile—it goes up more than the market in good times, and down more in bad times (like a sports car).
        - A **Beta < 1** (e.g., 0.8) means it's less volatile (like a sturdy SUV).
    *   **Standard Deviation (Weather Predictability):** This measures how much the fund's returns swing up and down from its average return. A **low standard deviation** means the returns are consistent and predictable (like a place with stable weather). A **high standard deviation** means the returns are all over the place—big gains one year, big losses the next (like a place with unpredictable weather).
    `,
    'The Danger of Portfolio Overlap': `
    Imagine you've decided to hire several expert chefs to create a diverse and balanced menu for a big party. You hire one chef famous for Italian food, another for Mexican, and a third for Indian. But when the party starts, you discover they all cooked... chicken curry. This is **Portfolio Overlap**.
    *   **What it is:** It's what happens when you invest in multiple mutual funds that all own the same stocks. For example, you might own three different "Large Cap" funds, but find that all three have HDFC Bank, Reliance, and ICICI Bank as their top holdings.
    *   **Why it's a problem:**
        - **False Diversification:** You think you're spreading your risk by owning three funds, but you're actually concentrating your risk in the same few companies. If those top stocks perform poorly, all your funds will suffer together.
        - **Over-Exposure:** You might end up with a much larger percentage of your money in a single stock than you realize or are comfortable with.
        - **Cluttered Portfolio:** Managing and tracking many funds that do the same thing is inefficient.
    **The Analogy's Lesson:** Hiring multiple chefs is a great idea for diversification, but only if they cook different dishes! Before adding a new fund to your portfolio, check its top holdings. If they are very similar to a fund you already own, you might not be adding any real diversification. The goal is to build a team of funds that work together, not a crowd of funds that all do the same job.
    `,
};


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
          html += '<ul class="list-disc list-inside space-y-2">';
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

    if (staticContent[title]) {
        setContent(staticContent[title]);
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
            <p className="text-sm text-slate-500">{learnDescriptions[title]}</p>
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
    'What is SIP?': 'The power of regular, disciplined investing.',
    'Time Value of Money': 'Why starting early gives you a massive advantage.',
    'Mutual Funds 101': 'Understand what a mutual fund is and how it works.',
    'Mutual Funds vs. Stocks': 'A full meal vs. a single dish. Know the difference.',
    'SEBI Mutual Fund Categories': 'Learn how SEBI classifies funds for investor clarity.',
    'Choosing the Right Mutual Fund': 'A step-by-step guide to selecting funds like a pro.',
    'What is Expense Ratio?': 'The small fee that can have a big impact on your returns.',
    'Key Ratios & Metrics': 'Go beyond returns: Alpha, Beta, Standard Deviation & more.',
    'Understanding Sharpe Ratio': 'Measure a fund’s performance in relation to its risk.',
    'Understanding Risk': 'Learn about different types of risk and your own tolerance.',
    'Asset Allocation': 'The art of balancing risk and reward in your portfolio.',
    'The Danger of Portfolio Overlap': 'Why owning too many "different" funds can be risky.',
    'Investment Strategies': 'Proven approaches for successful long-term wealth creation.',
    'Tax Implications': 'How your investment returns are taxed and how to save.',
    'Red Flags to Watch': 'Warning signs to avoid when selecting mutual funds.',
    'Important Disclaimer': 'Crucial information you must know before investing.',
};

const Learn: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-blue-100 text-blue-700 rounded-full p-4 mb-4">
          <IconBook className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Knowledge Hub</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Your guide to mastering the fundamentals of smart investing. Each section is designed to build your confidence, one concept at a time.
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