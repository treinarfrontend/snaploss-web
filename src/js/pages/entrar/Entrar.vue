<template>
    <div class="login">
        <div class="hero is-fullheight form">
            <div class="hero-body">
                <div class="container">

                    <div class="columns">
                        <div class="column is-8 is-offset-2">
                            <form action="#" @submit.prevent="">
                                <div class="field">
                                    <label class="label">E-mail</label>

                                    <div class="control">
                                        <input type="text" class="input is-medium" placeholder="digite seu e-mail">
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Senha</label>

                                    <div class="control">
                                        <input type="password" class="input is-medium" placeholder="digite sua senha">
                                    </div>
                                </div>

                                <div class="columns is-multiline">
                                    <div class="column">
                                        <button class="button is-medium is-fullwidth is-success">Entrar</button>
                                    </div>

                                    <div class="column">
                                        <a href="" class="button is-medium is-fullwidth is-outlined">Recuperar senha</a>
                                    </div>
                                </div>
                            </form>

                            <hr>

                            <a href="#" class="button is-medium is-fullwidth is-link">
                                <span class="icon is-small">
                                    <i class="fab fa-facebook-f"></i>
                                </span>

                                <span>Entrar com o Facebook</span>
                            </a>

                            <br>

                            <a href="#" class="button is-medium is-fullwidth is-white">Cadastre-se</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="hero is-info is-fullheight slider"></div>
    </div>
</template>

<style lang="scss" scoped>
    .login {
        display: flex;

        .form,
        .slider {
            flex: 1;

            .container {
                width: auto;
            }
        }

        .form {}

        .slider {
            background-image: url('https://timedotcom.files.wordpress.com/2017/07/owning-dog-happy.jpg');
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
        }
    }
</style>