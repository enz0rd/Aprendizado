<?php

$conexao = new mysqli("localhost", "devbuscapet", "devbuscapet", "bdbuscapet");
$cd_nome = $_GET['ds_empresa'];
$id_empresa = $_GET['id_empresa'];

if ($conexao -> connect_errno) {
    echo "Failed to connect".$conexao -> connect_errno;
    exit();
} else {
    echo "Connection successful";
}

echo "<table style:'font-family: Arial; font_size:20px;'>";
$sql = "select * from empresas order by ds_empresa";
$rss = mysqli_query($conexao, $sql);
while ($rs = mysqli_fetch_array($rss)) {
    echo "<tr>";
    echo "<td>".$rs["id_empresa"]."</td>";
    echo "<td>".$rs["ds_empresa"]."</td>";
    echo "</tr>";
}
echo "</table>";

?>