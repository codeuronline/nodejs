<?php
 
$people = array(
array("name"=>"Bob","age"=>8,"colour"=>"red"),
array("name"=>"Greg","age"=>12,"colour"=>"blue"),
array("name"=>"Andy","age"=>15,"colour"=>"purple"));
var_dump($people);
$sortArray = array();
foreach($people as $person) {
    foreach($person as $key=>$value) {
        if(!isset($sortArray[$key])) {
            $sortArray[$key] = array();
        }
        $sortArray[$key][] = $value;
    }
} 
$orderby = "name"; //change this to whatever key you want from the array
array_multisort($sortArray[$orderby],SORT_ASC,$people);
//array_multisort($people,$sortArray);
//array_multisort($sortArray["name"],$people);
array_multisort($sortArray["name"],$sortArray["age"],$people);
var_dump($people);
var_dump($sortArray);
var_dump($orderby);