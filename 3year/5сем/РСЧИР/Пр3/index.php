
<?php
	require_once 'UsersApi.php';
	require_once 'OrdersApi.php';

	$api = null;

	if (explode('/', $_SERVER['REQUEST_URI'])[1] == 'users') {
		$api = new UsersApi();
	} else if (explode('/', $_SERVER['REQUEST_URI'])[1] == 'orders') {
		$api = new OrdersApi();
	}

	if ($api != null) {
		try {
			echo $api->run();
		} catch (Exception $e) {
			echo json_encode(Array('error' => $e->getMessage()));
		}
	} else {
		echo json_encode(Array('error' => 'Unknown endpoint'));
	}
