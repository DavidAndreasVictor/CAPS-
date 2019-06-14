<?php
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";
	$sql = "select * from dosen";
	$query = mysqli_query($koneksi, $sql);
	$arrDosen = array();
	while ($row = mysqli_fetch_array($query)){
		$arrDosen[] = $row;
	}
	echo json_encode($arrDosen );
	mysqli_close($koneksi);
 ?>
