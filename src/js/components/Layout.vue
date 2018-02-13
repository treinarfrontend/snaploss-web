<template>
    <div>
        <nav class="navbar is-white has-shadow">
            <div class="container">

                <div class="navbar-brand">
                    <div class="navbar-item">
                        <a href="" class="title is-5">snaploss</a>
                    </div>
                </div>

                <div class="navbar-menu">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <a href="" class="button is-link is-outlined">Adicionar animal</a>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <router-link :to="{ name: 'app.home.index' }" class="navbar-item" exact>Feed</router-link>
                        <router-link :to="{ name: 'app.animals.index' }" class="navbar-item">Animais Perdidos</router-link>
                        <router-link :to="{ name: 'app.account.index' }" class="navbar-item">Minha Conta</router-link>
                    </div>
                </div>

            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>