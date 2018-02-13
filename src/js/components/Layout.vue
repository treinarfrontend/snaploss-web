<template>
    <div>
        <nav class="navbar is-white has-shadow">
            <div class="container">

                <div class="navbar-brand">
                    <div class="navbar-item">
                        <router-link :to="{ name: 'app.home.index' }" class="title is-5" exact>snaploss</router-link>
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

<style lang="scss" scoped>
    .navbar {
        box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.1);
    }
</style>