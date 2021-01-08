<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link to="/" class="navbar-brand page-scroll">主页</router-link>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav nav-justified ">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="active">
                        <router-link to="/" class="page-scroll">主页</router-link>
                    </li>
                    <li>
                        <router-link to="/story" class="page-scroll">我们的故事</router-link>
                    </li>
                    <!-- <li>
                        <a class="page-scroll" href="#nav-people">Important People</a>
                    </li> -->
                    <li>
                        <router-link to="/blog" class="page-scroll">爱情日志</router-link>
                    </li>
					<li>
                        <router-link to="/a" class="page-scroll">相册</router-link>
                    </li>
                    <!-- <li>
                        <a class="page-scroll" href="#nav-location">Location</a>
                    </li> -->
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
    name:'HeadPage',
}
</script>
