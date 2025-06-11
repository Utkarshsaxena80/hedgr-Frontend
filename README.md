Hedgr is a decentralized finance (DeFi) application designed to offer an intelligent and automated hedging mechanism to users exposed to market volatility. Built using Next.js and TypeScript, it presents an intuitive interface for interacting with Ethereum smart contracts and implementing secure, on-chain financial strategies.

🚀 Overview
In the volatile world of cryptocurrency and decentralized finance, managing risk is critical. Hedgr addresses this challenge by allowing users to automatically hedge their Ethereum (ETH) holdings when certain risk thresholds are breached. This is achieved through:

A Next.js frontend for seamless user interaction
Smart contracts for managing user registrations, balances, and hedging logic
Real-time Chainlink data feeds for price tracking
Custom token logic that acts as a hedge asset (e.g., HEDG token)
Portfolio performance insights and APY calculations
🔧 Installation & Setup
To get started with the project locally, follow the steps below:

1. Clone the repository
git clone https://github.com/Utkarshsaxena80/hedgr-Frontend.git
cd hedgr-Frontend
2. Install dependencies
npm install
3. Environment Variables
Create a .env.local file and add the necessary environment variables:

NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourDeployedContractAddress
NEXT_PUBLIC_CHAIN_ID=11155111  # Example: Sepolia Testnet
4. Start the development server
npm run dev
Visit http://localhost:3000 to see the app in action.

💡 How the Hedging Works
At the core of Hedgr is a smart contract that enables users to deposit ETH and set a tolerance level. This level represents how much price volatility the user is willing to tolerate before the protocol intervenes.

1. User Onboarding
Users connect their wallets (via MetaMask) and register on-chain. During registration, they specify:

Whether they want auto-hedging enabled
Their tolerance level (as a percentage, stored as a scaled integer)
The ETH amount to be protected
2. Monitoring Market Prices
The protocol uses Chainlink Price Feeds to get the latest ETH/USD prices securely and reliably.

3. Hedging Trigger
When ETH price falls below the tolerance level:

The protocol triggers an automated hedge
The user’s ETH is swapped into a stable token (currently the HEDG token)
4. Rebalancing
Users can choose to rebalance their portfolios manually or let the protocol handle it. This is particularly useful when markets recover and users wish to de-hedge their positions.

🧠 Smart Contract Design
The smart contracts handle:

User registrations
Storing individual tolerance levels and balances
Hedging logic using Uniswap V3 (or mock swap functions)
Events for tracking state changes
Example Solidity snippet:

function getUserToleranceLevel() external view returns (uint8) {
    return userInfo[msg.sender].tolerance;
}

function getUserBalance() external view returns (uint256) {
    return userInfo[msg.sender].value;
}
📊 Portfolio Metrics
The UI displays:

Current Holdings: Shows ETH balance and USD value
Period Returns: Gain or loss in the current period
Absolute Gain: Overall return as a percentage
APY: Annualized performance yield
Chart.js is used to visualize data in Pie Charts and Line Charts, with customization options for mobile and dark mode.

Example:

<div className="text-3xl font-bold text-green-400">
  $ {userBalance * (price - lastPrice).toFixed(2)}
</div>
📦 Token Integration
For now, the protocol hedges ETH into a custom ERC20 token called HEDG Token:

Why HEDG Token?
Acts as a stable or relatively non-volatile asset
Enables liquidity control within the protocol
Customizable rules for minting and burning
Future Roadmap:
Hedging into real stablecoins like USDC/DAI
Yield strategies (e.g., yield farming stable tokens post-hedge)
Governance over token selection
🔐 Security Considerations
Security is a top priority:

Tolerance logic prevents unauthorized hedges
On-chain checks to avoid double hedging
Chainlink oracle for tamper-proof price feed
🛠 Tech Stack
Frontend: Next.js, TypeScript, TailwindCSS, Zustand (for state)
Web3: Ethers.js v6, Metamask, Sepolia Testnet
Charts: Chart.js (React wrapper)
Smart Contracts: Solidity, OpenZeppelin Contracts
Oracle: Chainlink ETH/USD price feed
🧪 Testing
Run unit and integration tests:

npm run test
For smart contracts (if present in a separate repo):

npx hardhat test
🤝 Contribution Guide
Fork the repo and create a new branch
Commit and push changes
Create a pull request (PR)
📈 Future Enhancements
Cross-chain hedging using LayerZero or Axelar
NFT-based hedging receipts for proof of hedge
DAO governance over hedge policies
Risk analytics dashboard
Telegram/Discord bot alerts
🙋 FAQ
Q: Is my ETH locked?
A: No. You can withdraw your ETH anytime unless it’s hedged. In that case, you’ll receive HEDG tokens instead.

Q: Can I turn off auto-hedging?
A: Yes, you can update your settings via the UI.

Q: Will more tokens be supported?
A: Absolutely. We plan to allow BTC, stablecoins, and even LP tokens in the future.

📜 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Chainlink for price feeds
Ethers.js and Hardhat for Web3 interactions
OpenZeppelin for secure contract templates
Vercel for Next.js hosting
🌐 Connect
Created with passion by Utkarsh Saxena

Thank you for using Hedgr – the decentralized hedge you can trust.

About
No description, website, or topics provided.
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Deployments
5
 Preview 2 days ago
 Production – hedgr-frontend-c8sy 2 days ago
 Production
+ 2 deployments
Languages
TypeScript
99.0%
 
Other
1.0%
Suggested workflows
Based on your tech stack
Gulp logo
Gulp
Build a NodeJS project with npm and gulp.
Deno logo
Deno
Test your Deno project
Grunt logo
Grunt
Build a NodeJS project with npm and grunt.
More workflows
Footer
© 2025 GitHub, In
