import { Web3Storage } from "web3.storage";

const web3storage_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY5MTFmNzYwY0MyMkU4RDFlNjdhNDI2MjQzNTM5NzQ3Q0ZBNDdDMGUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQxMjI3MzI3NTgsIm5hbWUiOiJTdG9yYWdlLURhcHAifQ.Pxk_zmDbdiS40tIQUXTMB3lrV9-RjadQJkzZaYLH9UY";

function GetAccessToken() {
  return web3storage_key;
}

function MakeStorageClient() {
  return new Web3Storage({ token: GetAccessToken() });
}

export const StoreContent = async (files) => {
  console.log("Uploading files to IPFS with web3.storage....");
  const client = MakeStorageClient();
  const cid = await client.put([files]);
  console.log("Stored files with cid:", cid);
  return cid;
};
