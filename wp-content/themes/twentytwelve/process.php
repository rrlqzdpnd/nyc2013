<?php

    function clean($query)    {
        $query = preg_replace('/[\n]/', '<br />', $query);
        $query = preg_replace('/[,\'\(\)]/', '\\\$0', $query);
        $query = preg_replace('/[#@!&`~=;\{\}\^\$\|\*\+\[\]]+/', '', $query);
        return $query;
    }

    if(!empty($_POST))	{
        $name = clean($_POST['name']);
        $body = clean($_POST['body']);
        $image = clean($_POST['image']);
        $school = clean($_POST['school']);
        $include_image = $_POST['includeimage'];
        $region = $_POST['region'];
   
        $connect_str = "host=localhost dbname=wordpress user=postgres";
       
        if($connect = pg_connect($connect_str))    {
            $query = "SELECT * FROM responses2013 WHERE body ilike '".$body."' AND (insertedon::date + interval '1 day') > now()::date";
            $test = pg_query($connect, $query);
            $result = pg_fetch_all($test);

            if(!$result)    {
                $query = "INSERT INTO responses2013(fullname, school, regionid, body".(($include_image == 'true') ? ", hasimage, imagelink" : "" ).") ";
                $query .= "VALUES('".$name."', '".$school."', '".$region."', '".$body."'".(($include_image == 'true') ? ", true, '".$image."'" : "").")";

                pg_query($connect, $query);
                echo(json_encode("Done"));
            }
            else
                echo(json_encode("Duplicate"));
            pg_close($connect);
        }
        else
            echo(json_encode("Failed"));

    }
?>
