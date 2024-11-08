<?php
    require_once 'Api.php';
    

    class UsersApi extends Api
    {
        private $ins_id = 1;
        public $apiName = 'users';
    
        public function indexAction()
        {
            $db = new mysqli("db", "user", "password", "appDB");
            $users = $db->query("SELECT * FROM users");
            $res = array();
            foreach($users as $row){
                $res[] = array(
                    "id" => $row['ID'],
                    "name" => $row['name'],
                    'email' => $row['email']
                );
            }
            if($users){
                return $this->response($res, 200);
            }
            return $this->response('Data not found', 404);
        }

        public function viewAction()
        {
            $id = $this->requestUri[1];
            if($id){
                $db = new mysqli("db", "user", "password", "appDB");
                $user = $db->query("SELECT * FROM users WHERE ID = ($id)");
                $res = array();
                foreach($user as $row){
                    $res = array(
                        "id" => $row['ID'],
                        "name" => $row['name'],
                        'email' => $row['email']
                    );
                }
                if($user){
                    return $this->response($res, 200);
                }
            }
            return $this->response('Data not found', 404);
        }
    
        public function createAction()
        {
            $name = $this->requestParams['name'] ?? '';
            $email = $this->requestParams['email'] ?? '';
            if($name && $email){
                $mysqli = new mysqli("db", "user", "password", "appDB");
                $insert = $mysqli->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
                $insert->bind_param("ss",$name,$email);
                if($insert->execute()){
                    return $this->response('Data saved.', 200);
                }
            }
            return $this->response("Saving error", 500);
        }

        public function updateAction()
        {
            $parse_url = parse_url($this->requestUri[1]);
            $userId = $parse_url['path'] ?? null;

            $mysqli = new mysqli("db", "user", "password", "appDB");
            $check = $mysqli->query("SELECT * FROM users WHERE ID = ($userId)");
            if(!$userId || !$check){
                return $this->response("User with id=$userId not found", 404);
            }
    
            $name = $this->requestParams['name'] ?? '';
            $email = $this->requestParams['email'] ?? '';
    
            if($name && $email){
                $update = $mysqli->prepare("UPDATE users SET name = (?) , email = (?)  WHERE id = ($userId)");
                $update->bind_param("ss",$name,$email);
                if($update->execute()){
                    return $this->response('Data updated.', 200);
                }
            }
            return $this->response("Update error", 400);
        }

        public function deleteAction()
        {
            $parse_url = parse_url($this->requestUri[1]);
            $userId = $parse_url['path'] ?? null;
            $mysqli = new mysqli("db", "user", "password", "appDB");
            $check = $mysqli->query("SELECT * FROM users WHERE ID = ($userId)");
            if(!$userId || !$check){
                return $this->response("User with id=$userId not found", 404);
            }

            $delete = $mysqli->prepare("DELETE FROM users WHERE id = ($userId)");
            if($delete->execute()){
                return $this->response('Data deleted.', 200);
            }
            return $this->response("Delete error", 500);
        }
    
    }