import axios from 'axios';

export async function fetchMetadata(uri: string): Promise<any> {
  let url = uri;
  if (uri.startsWith('ipfs://')) {
    url = uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
  }
  const res = await axios.get(url);
  return res.data;
}
