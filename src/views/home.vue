<template>
    <section id="nav-home">
		<!-- Carousel -->
    	<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
			<!-- Indicators -->
			<ol class="carousel-indicators">
			  	<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
			    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
			</ol>
			<!-- Wrapper for slides -->
			<div class="carousel-inner">
			    <div class="item active">
			    	<img src="/static/images/1.jpg" alt="First slide">
                    <!-- Static Header -->
                    <div class="header-text hidden-xs">
                        <div class="col-md-12 text-center">
                            <h2 class="header-text">我们的故事从这里开始--><br><br><span> </span></h2>
                        </div>
                    </div><!-- /header-text -->
			    </div>
			    <div class="item">
			    	<img src="/static/images/2.jpg" alt="Second slide">
			    	<!-- Static Header -->
                    <div class="header-text hidden-xs">
                        <div class="col-md-12 text-center">
                            <h2 class="header-text">永远也不会结束。<br><br><span> </span></h2>
                        </div>
                    </div><!-- /header-text -->
			    </div>
			</div>
			<!-- Controls -->
			<a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
		    	<span class="glyphicon glyphicon-chevron-left"></span>
			</a>
			<a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
		    	<span class="glyphicon glyphicon-chevron-right"></span>
			</a>
		</div><!-- /carousel -->

	</section>
</template>

<script>
export default {
    name:'HomePage'
}
</script>
