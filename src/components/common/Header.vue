<template lang="">
    <nav>
        <div class="nav-inner">
            <div class="logo">
                <img src="../../assets/logo.svg" alt="logoWeb">
            </div>
            <div class="links">
                <a href="#">Home</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Beauty</a>
                <a href="#">Blog</a>
                <a href="#">Contact us</a>
            </div>
            <div class="icons">
                <span class="icon">

                </span>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
nav{
    border-bottom: 2px solid #f8f8f8;
}
    nav .nav-inner {
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;
    }
    .nav-inner .links a{
        margin: 0px 16px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.25;
        color: #121212;
        border-bottom: 1px solid #121212;
        transition: .3s;
    }
    .nav-inner .links a:hover{
        border-color: #121212;
    }
    .icon span {
        margin: 0 13px;
        display: inline-block;
    }

</style>