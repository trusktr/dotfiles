<template>
    <div class="footer" >

        <div class="logoAndCopyright">
            <div class="lowLogo">
                <img src="/assets/img/Mapper_Diamond_Logo_grey.svg" alt="mapper logo"/>
            </div>

            <div class="mapper2018">&#169; mapper 2018</div>
        </div>

        <div class="badges">
            <div><img src="/assets/badges/A-Design.png"/></div>
            <div><img src="/assets/badges/best-innovation-purple.png"/></div>
            <div><img src="/assets/badges/best-ui-purple.png"/></div>
            <div><img src="/assets/badges/best-ux-purple.png"/></div>
            <div><img src="/assets/badges/cssda-special-kudos-purple.png"/></div>
        </div>

        <div class="mapLinks" >

            <router-link to='/MapCities/#Map'><span>Maps</span></router-link>
            <router-link to='/MapCities/#How'><span>How</span></router-link>
            <router-link to='/MapCities/#Cities'><span>Cities</span></router-link>
            <router-link to='/AboutNewsContact/#About'><span>About</span></router-link>
            <router-link to='/AboutNewsContact/#News'><span>News</span></router-link>
            <router-link to='/AboutNewsContact/#Contact'><span>Contact</span></router-link>
            <router-link to='/TeamJobsInvestors/#Team'><span>Team</span></router-link>
            <router-link to='/TeamJobsInvestors/#Investors'><span>Investors</span></router-link>
            <router-link to='/TeamJobsInvestors/#Jobs'><span>Jobs</span></router-link>

        </div>

    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend( {

        watch: {

            $route() {

                this.goToHash()

            },

        },

        methods: {

            goToHash() {

                const currentRoute = this.$router.history.current
                const path = currentRoute.fullPath

                if ( !path.includes( '#' ) ) return

                const parts = path.split( '#' )
                const el = document.getElementById( parts[ parts.length - 1 ] )

                if ( !el ) return

                el.scrollIntoView()

            },

        },

    } )
</script>

<style lang="scss" scoped>
    @import 'stylelib';

    .footer {
        background-color: #f1f1f1;
        display: flex;

        @include media('<desktop') {
            flex-flow: column-reverse;
            align-items: center;
            padding-top: 60px;
            padding-bottom: 60px;
        }
        @include media('>=desktop') {
            flex-flow: row;
            padding-top: 50px;
            padding-bottom: 50px;
            height: 260px;
        }

        .logoAndCopyright {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            width: 40%;
            padding-top: 30px;
            padding-bottom: 25px;

            @include media('<desktop') {
                padding-top: 60px;
            }

            .lowLogo {
                @include media('<desktop') {
                    margin: auto;
                }

                img {
                    width: 100px;
                }
            }

            .mapper2018 {
                font-size: 14px;
                font-weight: bold;
                color: #898989;
                margin-top: 10px;

                @include media('<desktop') {
                    font-family: SF;
                    font-size: 26px;
                }

                @include media('>=desktop') {
                    font-family: SFLight;
                    text-align: left;
                }
            }
        }

        .badges {
            display: flex;
            flex-direction: row;
            align-items: center;

            & > * {
                width: 100px;
                margin-left: 10px;
                margin-right: 10px;

                img {
                    width: 100%;
                }
            }
        }

        .mapLinks {
            width: 100%;
            font-family: SFRegular;
            font-size: 20px;
            color: #898989;
            display: flex;
            flex-flow: column;
            flex-wrap: wrap;

            @include media('<desktop') {
                height: 200px;
                text-align: center;
                justify-content: space-evenly;
                font-size: 36px;
            }

            @include media('>=desktop') {
                text-align: right;
            }

            a {
                color: #898989;
                letter-spacing: 1px;
                text-decoration: none;
                text-align: center;
                height: 33%;
                width: 33%;
                display: flex;
                flex-flow: column;
                justify-content: center;

                &:nth-child(3n-2) {
                    font-family: SFBold;

                    &:focus, &:active, &:hover {
                        letter-spacing: 1px;
                    }
                }

                &:focus, &:active, &:hover {
                    color: black;
                    font-weight: bold;
                    font-family: SFBold;
                    letter-spacing: 0;
                }
            }
        }
    }
</style>
