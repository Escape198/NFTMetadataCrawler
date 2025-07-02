'use client';

import React, { useState } from 'react';
import { getTokenUri } from '@/lib/getTokenUri';
import { fetchMetadata } from '@/lib/fetchMetadata';

interface Metadata {
  name?: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

export default function NftMetadataViewer() {
  const [contract, setContract] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [error, setError] = useState('');

  const loadMetadata = async () => {
    try {
      setError('');
      setMetadata(null);
      const uri = await getTokenUri(
        contract,
        Number(tokenId),
        process.env.NEXT_PUBLIC_INFURA_URL!
      );
      const data = await fetchMetadata(uri);
      setMetadata(data);
    } catch (err) {
      setError('Error fetching metadata.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>NFT Metadata Viewer</h2>
      <input
        type="text"
        placeholder="Contract Address"
        value={contract}
        onChange={(e) => setContract(e.target.value)}
      />
      <input
        type="number"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <button onClick={loadMetadata}>Fetch Metadata</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {metadata && (
        <div>
          <h3>{metadata.name}</h3>
          <p>{metadata.description}</p>
          {metadata.image && (
            <img
              src={
                metadata.image.startsWith('ipfs://')
                  ? metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/')
                  : metadata.image
              }
              alt={metadata.name}
              style={{ maxWidth: '300px' }}
            />
          )}
          <pre>{JSON.stringify(metadata, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
