<?php
header('Content-Type: application/json');

// 指定图片目录
$directory = "/src/views/zhuanqian/背景库/";
$images = array();

// 获取目录中的所有文件
if (is_dir($directory)) {
    if ($dh = opendir($directory)) {
        while (($file = readdir($dh)) !== false) {
            $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
            if ($ext == 'jpg' || $ext == 'png') {
                $images[] = $directory . $file;
            }
        }
        closedir($dh);
    }
}

// 返回 JSON 格式的文件列表
echo json_encode($images);
?>