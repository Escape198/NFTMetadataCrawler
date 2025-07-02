# NFT Metadata Crawler

A parser and visualizer for NFT metadata by ERC-721 contract address.

## 📦 Features

- Fetches `tokenURI` from any ERC-721 contract
- Supports HTTP and IPFS metadata
- Displays name, description, image, and raw JSON

## 🛠 Tech Stack

- TypeScript
- Next.js (App Router)
- ethers.js
- axios

## 🚀 Getting Started

### Prerequisites

- Node.js v20+
- Windows OS
- Git
- Infura account (Ethereum mainnet endpoint)

### Installation

```powershell
npm install
```

Create .env.local:

```
NEXT_PUBLIC_INFURA_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
```

### Run Development Server

```commandline
npm run dev
```
Visit: http://localhost:3000

### Example Usage
1. Enter contract address (e.g., CryptoPunks, BoredApes) 
2. Enter token ID (e.g., 1)
3. Click Fetch Metadata

for example: Contract Address - 0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d; token ID - 1![image](https://github.com/user-attachments/assets/d1694fcb-eced-49a7-81e7-d74b2c5931fb)



