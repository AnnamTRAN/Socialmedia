<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MeowChat</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Great+Vibes&family=Lora&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" sizes="16x16" href="favicon_package_v0.16/favicon.ico">
</head>
<body>
    <header>
        <div id="alert">
            <div id="alert-border">
                <p>You must be connected to view more</p>
                <div>
                    <form action="signin.html"><button>Sign in</button></form>
                    <form action="signup.html"><button>Sign up</button></form>
                </div>
            </div>
        </div>
        <!-- SIDE NAVBAR -->
        <nav id="navbar">
            <ul class="navbar-nav">

                <li class="nav-item">
                    <a href="index.php" class="nav-link">
                        <p>Home</p>
                        <img src="favicon_package_v0.16/favicon-32x32.png" alt="logo"/>
                        <span class="link-text"> Home </span>    
                    </a>
                </li>                
                
                <li class="nav-item">
                    <a href="signin.html" class="nav-link">
                        <?php if (isset($_SESSION['username'])){
                            echo '<p>'.$_SESSION['username'].'</p>';
                            echo '<img src="profile_pic/'.$_SESSION['pic'].'" alt="profile_pic">';
                        } else{
                        echo '<p>Profile</p>';
                        echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>';
                        }
                        ?>  
                        <span class="link-text"> Profil </span>
                    </a>
                </li>
    
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <p>Settings</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>
                        <span class="link-text"> Settings </span>
                    </a>
                </li>
    
            </ul>

            <div id="div-filter">
                <input type="button" value="Uncheck" id="uncheck" onclick="Uncheck(this)">

                <ul id="filter">
                    <?php
                        for ($i= 1; $i <= 10; $i++){
                            echo '<li>
                                    <div>
                                        <input type="checkbox" data-value="tag' . $i .'" class="checkbox" id="tag' . $i .'" onchange="filter(event)">
                                        <label for="tag' . $i .'" id="label-tag' . $i .'">Tag ' . $i .'</label>
                                    </div>
                                </li>';
                        }
                    ?>
                </ul>
            </div>
        </nav>
        <!-- SIDE NAVBAR -->


        
    </header>


    <main>
        <div id="global">
            <!-- MAIN CONTENT -->

            <div id="main_content">
                <!-- Banner -->
                <div id="banner">

                    <button id="mobile-menu" onclick="display()">  
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
                    </button>

                    <h1>MeowChat</h1>



                </div>
                <!-- Banner -->



                <!-- Posts space-->
                <div id="post">

                    <?php require_once 'php/pdo.php';
                        $users = $database->query('SELECT * FROM meow ORDER BY meow_time DESC');
                        foreach ($users as $user): ?>

                        <article class="tag" data-value="<?=$user['meow_tag']?>">
                            <h2><?=$user['meow_title'];?></h2>
                            <h5><?=$user['meow_tag'];?></h5> 
                            <p><?=$user['meow_content'];?></p>
                            <img src="post_pic/<?=$user['meow_pic'];?>">
                            <p><?=$user['meow_time'];?></p>
                            <button class="remove-button">delete <i class="fa fa-trash"></i></button>
                            <div class="remove">
                                <div class="remove-border">
                                    <p>Are you sure to delete?</p>
                                    <div class="confirm-button">
                                        <form action="php/delete.php" method="post" enctype="multipart/form-data">
                                            <input type="hidden" name="form" value="delete">
                                            <button type="submit" class="yes" name ="delete" value="<?=$user['meow_id'];?>">Yes</button>
                                        </form>
                                        <button class="no">No</button>
                                    </div>
                                </div>
                            </div>
                        </article>

                    <?php endforeach; ?>
                </div>
                <!-- Posts space -->
           
            </div>
            <!-- MAIN CONTENT -->


            <!-- TREND SIDE -->
            <div id="trend">

                <div id="modal">
                    <div id="modal-border">

                        <form class="modal-content" action="php/new_meow.php" method="post" enctype="multipart/form-data">
                            <input type="hidden" name="form" value="meow">
                            <input type="text" name="post_title" id="title-post" placeholder="title" maxlength="32" required>
                            <select name="post_select" id="tag-select" required>
                                <option name="">Select tag</option>
                                <?php
                                for ($i = 1; $i <= 10; $i++){
                                    echo '<option data-value="tag'. $i .'">tag' . $i . '</option>';
                                }
                                ?>
                            </select>

                            <div id="post_pic">
                                <img src="" class="frame" alt="placeholder/profilepreview">
                            </div>
                            <div>
                                <label for="inputGroupFile01" class="form-control label-file">Edit pic</label>
                                <input type="file" name="post_pic" accept=".png, .jpg, .gif" id="inputGroupFile01" placeholder="Edit picture" onchange="preview(event)" required>
                            </div>
                            
                            <textarea id="textarea" name="post_content" placeholder="What's the news?" rows="5" cols="50" maxlength="250"></textarea>
                            <input type="submit" id="submit">
                        </form>

                    </div>                    
                </div>

                <div class="trend-item">
                    <a href="#" id="modal-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    </a>
                </div>

            </div>
            <!-- TREND SIDE -->

        </div>       
    </main>


    <footer>

    </footer>
    <script src="script.js"></script>
</body>

</html>