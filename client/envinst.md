Firebase Configuration Environment Variables

To set up your Firebase configuration in the .env file, follow these instructions:

1. API Key:
   - Find your Firebase project's API Key from the Firebase Console.
   - Replace 'your_api_key' with your actual API Key.

2. Auth Domain:
   - Find your Firebase project's Auth Domain from the Firebase Console.
   - Replace 'your_auth_domain' with your actual Auth Domain.

3. Project ID:
   - Find your Firebase project's Project ID from the Firebase Console.
   - Replace 'your_project_id' with your actual Project ID.

4. Storage Bucket:
   - Find your Firebase project's Storage Bucket from the Firebase Console.
   - Replace 'your_storage_bucket' with your actual Storage Bucket.

5. Messaging Sender ID:
   - Find your Firebase project's Messaging Sender ID from the Firebase Console.
   - Replace 'your_messaging_sender_id' with your actual Messaging Sender ID.

6. App ID:
   - Find your Firebase project's App ID from the Firebase Console.
   - Replace 'your_app_id' with your actual App ID.

Once you have replaced all placeholder values with your actual Firebase configuration details, save the .env file. Your Vite application will automatically pick up these environment variables and use them to initialize Firebase.

VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_actual_auth_domain
VITE_FIREBASE_PROJECT_ID=your_actual_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_actual_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_actual_messaging_sender_id
VITE_FIREBASE_APP_ID=your_actual_app_id
