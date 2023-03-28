First of all, I would like to say thank you for giving me the opportunity to take the test again today. Here are my possible suggestions for improvement:

# Backend PHP

## 1. Using environment variables

If this were a production server, it would make sense to use environment variables for sensitive data such as client_id and client_secre. Like this, you enhance security by keeping sensitive information out of the codebase. This makes it harder for attackers to access such information even if the code is compromised.

## 2. Error handling

Since I was quite short on time for the tasks, I didn't implement good error handling. It would be good to implement better error cases for when the API requests fail or return.

## 3. curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

During my coding process, I couldn't get the access token with my authorization code, because I kept receiving the error: "Error: SSL certificate problem: unable to get local issuer certificate".
Adding the line of "curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);" fixed this issue. However, I would not use this line of code in production, since it makes it vulnerable to man-in-the-middle attacks.

# Frontend React

# 1. Decoupling Components

Currently, the vast majority of the code is written in the "App.js" file. This can make the code harder to maintain and understand. It would be better to decouple the logic into smaller, more manageable components.

# 2. Using SASS

All the styling of the app is done in pure CSS. Due to time reasons, I did not set up SASS, but this would definitely make sense.
