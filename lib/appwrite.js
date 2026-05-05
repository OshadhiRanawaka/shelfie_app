import { Client, Account, Databases, Storage, Avatars } from 'react-native-appwrite';
import 'react-native-url-polyfill/auto';

const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1') // Replace with your endpoint if self-hosting
    .setProject('69eb56070014f90a9f55')               // Your project ID from Appwrite console
    .setPlatform('dev.oshadhi.shelfie');            // The package name you registered in Step 1

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
export default client;
