<?php
    require_once 'Api.php';
    
    class OrdersApi extends Api
    {
        public $apiName = 'orders';
    
        public function indexAction()
        {
            $db = new mysqli("db", "user", "password", "appDB");
            $orders = $db->query("SELECT * FROM orders");
            $res = array();
            foreach($orders as $row){
                $res[] = array(
                    "id" => $row['ID'],
                    'user_id' => $row['user_id'],
                    'product' => $row['product'],
                    'price' => $row['price']
                );
            }
            if($orders){
                return $this->response($res, 200);
            }
            return $this->response('Data not found', 404);
        }

        public function viewAction()
        {
            $id = $this->requestUri[1];
            if($id){
                $db = new mysqli("db", "user", "password", "appDB");
                $order = $db->query("SELECT * FROM orders WHERE user_id = ($id)");
                $res = array();
                foreach($order as $row){
                    $res[] = array(
                        "id" => $row['ID'],
                        'user_id' => $row['user_id'],
                        'product' => $row['product'],
                        'price' => $row['price']
                    );
                }
                if($order){
                    return $this->response($res, 200);
                }
            }
            return $this->response('Data not found', 404);
        }
    
        public function createAction()
        {
            $userId = $this->requestParams['user_id'] ?? '';
            $product = $this->requestParams['product'] ?? '';
            $price = $this->requestParams['price'] ?? '';
            
            $mysqli = new mysqli("db", "user", "password", "appDB");
            $check = $mysqli->query("SELECT * FROM users WHERE ID = ($userId)");

            if($userId && $product && $price && $check){
                
                $insert = $mysqli->prepare("INSERT INTO orders (user_id, product, price) VALUES (?, ?, ?)");
                $insert->bind_param("sss", $userId, $product, $price);
                if($insert->execute()){
                    return $this->response('Data saved.', 200);
                }
            }
            return $this->response("Saving error", 500);
        }

        public function updateAction()
        {
            $parse_url = parse_url($this->requestUri[1]);
            $orderId = $parse_url['path'] ?? null;
    
            $mysqli = new mysqli("db", "user", "password", "appDB");
            $check = $mysqli->query("SELECT * FROM orders WHERE id = ($orderId)");
            if(!$orderId || !$check){
                return $this->response("Order with id=$orderId not found", 404);
            }
            $product = $this->requestParams['product'] ?? '';
            $price = $this->requestParams['price'] ?? '';
            if($product && $price){
                $update = $mysqli->prepare("UPDATE orders SET product = ?, price = ? WHERE id = ($orderId)");
                $update->bind_param("ss", $product, $price);
                if($update->execute()){
                    return $this->response('Data updated.', 200);
                }
            }
            return $this->response("Update error", 400);
        }

        public function deleteAction()
        {
            $parse_url = parse_url($this->requestUri[1]);
            $orderId = $parse_url['path'] ?? null;
    
            $mysqli = new mysqli("db", "user", "password", "appDB");
            $check = $mysqli->query("SELECT * FROM orders WHERE id = ($orderId)");
            if(!$orderId || !$check){
                return $this->response("Order with id=$orderId not found", 404);
            }

            $delete = $mysqli->prepare("DELETE FROM orders WHERE id = ($orderId)");
            if($delete->execute()){
                return $this->response('Data deleted.', 200);
            }
            return $this->response("Delete error", 500);
        }
    
    }