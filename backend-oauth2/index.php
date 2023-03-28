<?php
// Define the Withings API endpoints
$authorize_url = 'https://account.withings.com/oauth2_user/authorize2';
$token_url = 'https://wbsapi.withings.net/v2/oauth2';
$getmeas_url_base = 'https://wbsapi.withings.net/measure?action=getmeas';

// Set the client_id, secret, and redirect_uri 
$client_id = 'a16837aaa8f536b229ce20fa8e90a2739885b640ff67de7b84562b6fe0e27513';
$client_secret = '881b7dc5686e38894ef0cb27019ebc44e7daf72cc329fe914a43acee15774782';
$redirect_uri = 'http://localhost:7070';

// If we click on the "Authorize App" button, redirect to the Withings authorization page
if (isset($_POST['submit'])) {
	$auth_url = $authorize_url . '?response_type=code&client_id=' . $client_id . '&redirect_uri=' . urlencode($redirect_uri) . '&state=withings_test&scope=user.metrics&mode=demo';
	header('Location: ' . $auth_url);
}

// If we have an authorization code, exchange it for an access token
if (isset($_GET['code'])) {

	$auth_code = $_GET['code'];

	echo "The auth code is: " . $auth_code . '<br>';

	// Make a post request to receive the access token
	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL, $token_url);

	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
		'action' => 'requesttoken',
		'grant_type' => 'authorization_code',
		'client_id' => $client_id,
		'client_secret' => $client_secret,
		'code' => $auth_code,
		'redirect_uri' => $redirect_uri
	]));

	$rsp = curl_exec($ch);
	curl_close($ch);

	if (curl_error($ch)) {
		echo "Error: " . curl_error($ch);
	} else {
		echo "The auth token is: " . $rsp;
	}
}

?>


<html>

<head>
	<title>Withings Authorization</title>
</head>

<body>
	<h1>Authorize the App to Access Your Withings Data</h1>
	<p>Click the button below to authorize the app to access your Withings data:</p>
	<form action="https://account.withings.com/oauth2_user/authorize2" method="GET">
		<input type="hidden" name="response_type" value="code">
		<input type="hidden" name="client_id" value="a16837aaa8f536b229ce20fa8e90a2739885b640ff67de7b84562b6fe0e27513">
		<input type="hidden" name="redirect_uri" value="http://localhost:7070">
		<input type="hidden" name="state" value="withings_test">
		<input type="hidden" name="scope" value="user.metrics">
		<input type="hidden" name="mode" value="demo">
		<button type="submit">Authorize App</button>
	</form>
</body>

</html>