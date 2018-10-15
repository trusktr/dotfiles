
<template>
    <div class="Gallery">

        <div class="slider">

            <div class="frame">
                <ul ref="slider" class="GalleryPickRow">

                    <li class="js_slide GalleryPicture" v-for="pic of pics" :key="pic.pic + pic.first + pic.last">
                        <img :src="'/assets/staff/' + pic.pic" />
                        <h2>{{ pic.first }}</h2>
                        <h3>{{ pic.last }}</h3>
                    </li>

                </ul>
            </div>

        </div>

        <div class="GalleryControls" ref="controls">

            <img
                @click="prev"
                src="/assets/img/left.svg"
                class="GalleryControl btn"
            />

            <img
                @click="next"
                src="/assets/img/right.svg"
                class="GalleryControl btn"
            />

        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import VueTypes from 'vue-types'
    import { tns } from 'tiny-slider/src/tiny-slider'
    import 'tiny-slider/dist/tiny-slider.css'
    import { debounce } from 'lodash'

    export default Vue.extend( {

        props: {

            picNum: VueTypes.number.def( 3 ),
            pics: VueTypes.arrayOf( Object ).isRequired,
            step: VueTypes.number.def( 1 ),
            className: VueTypes.string.def( '' ),

        },

        data: () => ( {

            currentPosition: 0,

        } ),

        mounted() {

            const slider = this.slider = this.$refs.slider

            this.tns = ( this.tns && this.tns.rebuild() ) || tns( {

                container: slider,
                items: 3,
                // gutter: 20,
                slideBy: 'page',
                controls: false,
                nav: false,
                arrowKeys: true,
                speed: 1000,
                autoplay: true,
                autoplayTimeout: 8000,
                autoplayButtonOutput: false,
                mouseDrag: true,

                responsive: {
                    1115: { // 'desktop' size in SCSS
                        items: 4,
                    },
                },

            } )

            const afterInteract = debounce( () => {

                this.tns.play()
                this.$refs.controls.classList.add( 'disabled' )

            } )

            this.onInteract = () => {

                this.tns.pause()
                this.$refs.controls.classList.remove( 'disabled' )
                afterInteract()

            }

            this.tns.events.on( 'touchMove', this.onInteract )
            this.tns.events.on( 'dragMove', this.onInteract )

        },

        destroyed() {

            this.tns.destroy()

        },

        methods: {

            prev() {

                this.onInteract()
                this.tns.goTo( 'prev' )

            },

            next() {

                this.onInteract()
                this.tns.goTo( 'next' )

            },

        },

    } )
</script>

<style lang="scss">
    @import 'stylelib';

    $mobileOuterPaddingSize: 0.08;

    .Gallery {
        width: 100%;
        position: relative;

        * {
            user-select: none;
        }

        .slider {
            position: relative;

            .frame {
                width: 100%;
                position: relative;
                overflow: hidden;
                white-space: nowrap;

                .GalleryPickRow {
                    margin: 0;
                    padding: 0;
                    display: inline-block;
                    width: auto;

                    .GalleryPicture {
                        overflow: hidden;
                        text-align: center;
                        display: inline-block;
                        padding: 0 10px;
                        padding-top: 130px;
                        position: relative;
                        height: 660px;

                        * {
                            display: block;
                        }

                        img {
                            @include media('>=desktop') {
                                width: 100%;
                                border-radius: 6px;
                            }
                            @include media('<desktop') {
                                width: 100%;
                                border-radius: 8px;
                            }
                        }

                        h2, h3 {
                            color: $colorWhite;
                            font-weight: normal;
                        }

                        h2 {
                            font-family: SFProDisplay-Semibold;
                            margin-bottom: 0px;

                            @include media('<desktop') {
                                font-size: 40px;
                            }
                            @include media('>=desktop') {
                                font-size: 30px;
                            }
                        }

                        h3 {
                            font-family: SFProDisplay-Thin;
                            margin-top: 0;

                            @include media('<desktop') {
                                font-size: 32px;
                            }
                            @include media('>=desktop') {
                                font-size: 24px;
                            }
                        }
                    }
                }
            }
        }

        .GalleryControls {
            display: flex;
            padding-top: 30px;
            flex-flow: row;
            justify-content: center;
            position: absolute;

            bottom: 50px;
            left: 50%;
            transform: translateX( -50% );

            &.disabled {
                pointer-events: none;
            }

            .GalleryControl {
                @include media('>=desktop') {
                    width: 70px;
                    height: 70px;
                }
                @include media('<desktop') {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
</style>
