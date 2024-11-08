<?php
    abstract class Api
    {
        public $apiName = ''; 

        protected $method = ''; 
        
        public $requestUri = [];
        public $requestParams = [];
        
        protected $action = '';
        
        
        public function __construct() {
            $this->requestUri = explode("/",trim($_SERVER['REQUEST_URI'], "/"));
            $this->$requestBody = file_get_contents('php://input');
            $this->requestParams = json_decode($this->$requestBody, true);

            //Определение метода запроса
            $this->method = $_SERVER['REQUEST_METHOD'];
        }
        
        public function run() {

            ini_set("display_errors", 1);
            ini_set("display_startup_errors", 1);
            error_reporting(E_ALL);
            //Первые 2 элемента массива URI должны быть "api" и название таблицы
            if($this->requestUri[0] !== $this->apiName){
                throw new RuntimeException('API Not Found', 404);
            }
            //Определение действия для обработки
            $this->action = $this->getAction();
        
            //Если метод(действие) определен в дочернем классе API
            if (method_exists($this, $this->action)) {
                return $this->{$this->action}();
            } else {
                throw new RuntimeException('Invalid Method', 405);
            }
        }
        
        protected function response($data, $status = 500) {
            // header("HTTP/1.1 " . $status . " " . $this->requestStatus($status));
            return json_encode($data);
        }
        
        private function requestStatus($code) {
            $status = array(
                200 => 'OK',
                404 => 'Not Found',
                405 => 'Method Not Allowed',
                500 => 'Internal Server Error',
            );
            return ($status[$code])?$status[$code]:$status[500];
        }
        
        protected function getAction()
        {
            $method = $this->method;
            switch ($method) {
                case 'GET':
                    if($this->requestUri[1]) {
                        return 'viewAction';
                    } else {
                        return 'indexAction';
                    }
                    break;
                case 'POST':
                    return 'createAction';
                    break;
                case 'PUT':
                    return 'updateAction';
                    break;
                case 'DELETE':
                    return 'deleteAction';
                    break;
                default:
                    return null;
            }
        }
        
        abstract protected function indexAction();
        abstract protected function viewAction();
        abstract protected function createAction();
        abstract protected function updateAction();
        abstract protected function deleteAction();
    }