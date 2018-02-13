<template>
    <div class="column is-3">
        <div class="card" @click.prevent="animalSelected">
            <div class="card-image">
                <div class="comments">12 <i class="fas fa-comments"></i></div>

                <figure class="image">
                    <img src="https://fthmb.tqn.com/iJagept4z9ZLIfYBs3Pppw48JvU=/2122x1414/filters:no_upscale():fill(transparent,1)/200515125-001-56a26a5b3df78cf772755c66.jpg" alt="">
                </figure>
            </div>

            <div class="card-content">
                <h3 class="title is-5">Paçoca</h3>
                <p>Com 3 anos, de cor marrom avermelhado, etc..</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            animalSelected() {
                alert('clicou')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.1);
        cursor: pointer;

        &:hover {
            box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.125);

            .card-image > .image {
                opacity: 0.85;
            }
        }

        .card-image {
            position: relative;

            .comments {
                width: 100%;
                color: #fff;
                background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5) 50%);
                padding: 1.25rem 1.35rem;
                position: absolute;
                bottom: 0;
                z-index: 1;
            }
        }
    }
</style>