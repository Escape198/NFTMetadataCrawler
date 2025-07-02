import { ethers } from 'ethers';

export async function getTokenUri(
  contractAddress: string,
  tokenId: number,
  providerUrl: string
): Promise<string> {
  const abi = [
    'function tokenURI(uint256 tokenId) public view returns (string memory)',
  ];

  const provider = new ethers.JsonRpcProvider(providerUrl);

  const checksumAddress = ethers.getAddress(contractAddress.trim());

  const contract = new ethers.Contract(checksumAddress, abi, provider);
  const uri = await contract.tokenURI(tokenId);
  return uri;
}
