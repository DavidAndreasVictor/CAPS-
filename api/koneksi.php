<?php
  $server = "localhost";
  $user = "id9861369_david";
  $pass = "1qaz2wsx3edc";
  $db = "id9861369_absendosen";
  $koneksi = mysqli_connect($server,$user,$pass,$db);
  mysqli_set_charset($koneksi,'utf8');
  if(mysqli_connect_errno()){
  	echo 'Gagal melakukan koneksi ke Database : '.mysqli_connect_error();
  }else{
  }
?>
