import React, { useState, useCallback } from 'react';
import { IconChevronDown, IconBook, learnIcons } from '../components/Icons';

const topics = [
    // Foundational Concepts
    'What is SIP?',
    'Lumpsum vs. SIP',
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
    'What is SIP?': `
    **Systematic Investment Plan (SIP)** is a method of investing a fixed amount of money in mutual funds at regular intervals (usually monthly). Think of it like a recurring deposit for mutual funds, but with the potential for much higher returns.
    *   **Power of Discipline:** SIPs automate your investing, instilling a habit of saving and investing without you having to actively think about it.
    *   **Rupee Cost Averaging:** This is the secret sauce of SIPs. When the market is down, your fixed amount buys more units of the mutual fund. When the market is up, it buys fewer units. Over time, this averages out your purchase cost, reducing the risk of investing a large amount at the wrong time.
    *   **Start Small:** You don't need a large amount to start. You can begin investing with as little as ₹500 per month, making it accessible to everyone.
    **Example:** Imagine you commit to investing ₹5,000 every month. Whether the market is booming or in a slump, your investment goes in. This discipline protects you from making emotional decisions like panic selling during a downturn.
    `,
    'Lumpsum vs. SIP': `
    This is a classic investment dilemma: Should you invest a large sum of money all at once (**Lumpsum**) or invest smaller amounts regularly (**SIP**)? The answer depends on your financial situation and the market conditions.
    **The Analogy: Watering a Plant**
    *   **SIP (Systematic Investment Plan):** This is like watering your plant a little bit every day. It's a disciplined, consistent approach. You ensure the plant gets a steady supply of water, regardless of the weather. This is less risky and builds a strong foundation over time.
    *   **Lumpsum Investment:** This is like pouring a whole bucket of water on the plant at once. If you time it perfectly on a hot, dry day, it can be very effective. But if you do it when the soil is already soaked, you might drown the plant. Lumpsum investing is all about timing.
    **Key Differences:**
    *   **Market Timing:** Lumpsum works best when you invest at the bottom of a market cycle (when prices are low), but timing the market is extremely difficult. SIPs work in all market conditions by averaging out your purchase cost (Rupee Cost Averaging).
    *   **Risk:** SIPs are generally considered lower risk because you spread your investment over time. Lumpsum is riskier because your entire investment is exposed to the market's price at a single point in time.
    *   **Who is it for?**
        *   **SIP:** Ideal for salaried individuals who can invest a fixed amount from their monthly income. Perfect for beginners and long-term goal planning.
        *   **Lumpsum:** Suitable if you have received a large, one-time amount like a bonus, inheritance, or sale of property, and you are confident the market is undervalued.
    **Conclusion:** For most retail investors, **SIP is the more prudent and effective strategy** for long-term wealth creation. It removes the stress of timing the market and builds a disciplined investment habit.
    `,
    'Time Value of Money': `
    The **Time Value of Money** is the idea that money available today is worth more than the same amount in the future. This is because of its potential to grow through investing, a process called **compounding**.
    **Compounding is like a snowball effect:** Your initial investment earns returns. The next period, you earn returns not just on your initial investment, but also on the returns you've already accumulated. Your money starts working for you!
    *   **The Key Ingredient:** Time is the most powerful factor in compounding. The longer your money is invested, the more time it has to grow exponentially.
    **Example:** Let's say you invest ₹1 lakh. If it grows at 12% per year, after 1 year it's ₹1.12 lakh. The next year, you earn 12% on ₹1.12 lakh, not just the original ₹1 lakh. After 30 years, that single ₹1 lakh could grow to nearly ₹30 lakhs! Someone who starts 10 years later would need to invest much more to catch up. The lesson is clear: **start investing as early as possible**, no matter how small the amount.
    `,
    'Understanding Risk': `
    In investing, **risk** means the possibility of your investment's actual return being different from what you expected. This includes the potential to lose some or all of your original investment. However, **risk is not always a bad thing**—it's directly linked to potential reward. Higher risk often comes with the potential for higher returns.
    *   **Market Risk:** The risk that the entire market will decline, affecting all investments. This can be caused by economic changes, political events, etc.
    *   **Inflation Risk:** The risk that your investment returns will not keep up with the rate of inflation, meaning your money loses purchasing power over time.
    *   **Risk Tolerance:** This is your personal ability and willingness to handle market ups and downs. It's generally categorized as:
        *   **Conservative:** You prefer safety over high returns. You're uncomfortable with large fluctuations. (Suited for debt funds).
        *   **Moderate:** You're willing to take on some risk for better returns, seeking a balance. (Suited for hybrid funds).
        *   **Aggressive:** You're comfortable with high risk for the potential of high returns and can handle significant market swings. (Suited for equity funds, especially mid/small cap).
    Understanding your own risk tolerance is the first step to building a portfolio that lets you sleep at night.
    `,
    'Asset Allocation': `
    **Asset Allocation** is the strategy of dividing your investment portfolio among different asset categories, such as **stocks (equity), bonds (debt), and gold**. It's the most important decision you'll make as an investor.
    Think of it like building a meal. You don't just eat one type of food. You have a mix of proteins, carbs, and vegetables for a balanced diet. Similarly, a balanced portfolio has a mix of different assets.
    *   **Why is it important?** Different asset classes perform differently in various market conditions. When stocks are down, bonds might be stable or up. This diversification helps to reduce the overall risk and volatility of your portfolio.
    *   **How is it determined?** Your ideal asset allocation depends mainly on your **risk tolerance** and **investment time horizon** (how long you plan to invest).
    **Example:** A young, aggressive investor with a 30-year time horizon might have 80% in equity and 20% in debt. An older, conservative investor nearing retirement might have 30% in equity and 70% in debt. The goal is not to eliminate risk, but to manage it according to your personal profile.
    `,
    'Tax Implications': `
    Understanding taxes is crucial to maximizing your investment returns. In India, the tax on mutual funds depends on the type of fund and how long you stay invested (your holding period).
    *   **Equity Funds (funds with >65% in stocks):**
        *   **Short-Term Capital Gains (STCG):** If you sell within 1 year, your profits are taxed at a flat rate of **15%**.
        *   **Long-Term Capital Gains (LTCG):** If you sell after 1 year, your profits up to ₹1 lakh in a financial year are **tax-free**. Gains above ₹1 lakh are taxed at **10%**.
    *   **Debt Funds (funds with <65% in stocks):**
        *   As per the latest rules, gains from debt funds are added to your income and taxed at your **income tax slab rate**, regardless of the holding period.
    *   **ELSS (Equity Linked Savings Scheme):** These are special equity funds that allow you to claim a tax deduction of up to ₹1.5 lakh under **Section 80C** of the Income Tax Act. They have a mandatory lock-in period of 3 years.
    **Disclaimer:** Tax laws are subject to change. It's always a good idea to consult a tax advisor for personalized advice.
    `,
    'Investment Strategies': `
    An investment strategy is a set of rules and principles that guides your investment decisions. Having a clear strategy helps you stay focused on your goals and avoid emotional reactions to market noise.
    *   **Goal-Based Investing:** This is the most recommended strategy. You link each investment to a specific financial goal (e.g., retirement, child's education, buying a house). This helps you determine the right amount to invest, the ideal asset allocation, and the required time horizon.
    *   **Value Investing:** This strategy involves looking for stocks or funds that appear to be trading for less than their intrinsic or book value. Value investors are like bargain hunters, looking for high-quality assets at a discount.
    *   **Growth Investing:** This strategy focuses on companies that are expected to grow at an above-average rate compared to other companies in the market. These are often younger companies in rapidly expanding industries. They are typically riskier than value stocks.
    *   **Buy and Hold:** This is a passive, long-term strategy where you buy a diversified portfolio and hold it for a very long time, ignoring short-term market fluctuations. This strategy works well with SIPs and relies on the power of compounding.
    The best strategy is the one that aligns with your financial goals, risk tolerance, and that you can stick with through thick and thin.
    `,
    'Red Flags to Watch': `
    The world of investing can be noisy. It's important to be cautious and look out for warning signs to protect your hard-earned money.
    *   **"Guaranteed" High Returns:** Be extremely skeptical of any investment promising high, guaranteed returns. In financial markets, high returns always come with high risk. Guarantees are usually only offered by low-return products like Fixed Deposits.
    *   **Chasing Past Performance:** A fund that was a top performer last year might not be this year. Don't invest in a fund just because it did well recently. Look for long-term consistency and a solid investment process.
    *   **Very High Expense Ratios:** While every fund charges a fee, be wary of funds with unusually high expense ratios compared to their peers, especially if their performance doesn't justify the cost.
    *   **Frequent Fund Manager Changes:** A revolving door of fund managers can be a sign of instability at the fund house. You want a steady hand managing your money.
    *   **Over-Diversification:** While diversification is good, owning too many funds (e.g., 20-30) can lead to portfolio overlap and make it difficult to track. You might end up owning the same stocks through different funds, defeating the purpose.
    `,
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
    'Mutual Funds 101': `
    A **Mutual Fund** is a professionaly managed investment vehicle that pools money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities.
    *   **How it works:** When you invest in a mutual fund, you are buying units, which represent a share of the fund's total holdings. The value of each unit is called the Net Asset Value (NAV), which goes up or down based on the performance of the underlying investments.
    *   **Key Benefits:**
        *   **Professional Management:** Your money is managed by experienced fund managers and research teams.
        *   **Diversification:** You get instant access to a basket of securities, which is much less risky than buying just one or two stocks.
        *   **Affordability:** You can start investing with a small amount of money (as low as ₹500 via SIP).
        *   **Liquidity:** You can easily buy or sell your mutual fund units on any business day.
    **Example:** Imagine you want to invest in the top 10 tech companies in India. Buying shares of all 10 companies individually would require a lot of money. Instead, you can invest in a "Technology Sector Mutual Fund". The fund pools money from thousands of investors like you and buys shares in all those companies. You get the benefit of owning a piece of all of them, without needing a large capital.
    `
};


// A simple markdown to HTML converter to handle bold text and lists.
const parseMarkdownToHTML = (markdown: string): string => {
    if (!markdown) return '';
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

  const fetchContent = useCallback(() => {
    if (content) return;
    setContent(staticContent[title] || 'Content coming soon.');
  }, [title, content]);

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
    'Lumpsum vs. SIP': 'One big splash vs. a steady stream. Which is for you?',
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
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Knowledge Hub</h1>
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