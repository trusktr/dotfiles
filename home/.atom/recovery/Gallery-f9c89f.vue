
<template>
    <div class="Gallery">

        <!-- Based on default lory markup, see http://meandmax.github.io/lory/. -->
        <div class="slider js_slider">

            <div class="frame js_frame">
                <ul ref="slides" class="slides js_slides GalleryPickRow">

                    <li class="js_slide GalleryPicture" v-for="pic of pics" :key="pic.pic + pic.first + pic.last">
                        <img :src="'/assets/staff/' + pic.pic" />
                        <h2>{{ pic.first }}</h2>
                        <h3>{{ pic.last }}</h3>
                    </li>

                </ul>
            </div>

        </div>

        <div v-if="lory" class="GalleryControls">

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

        <div class="slider js_slider">

            <div class="frame js_frame">
                <ul ref="slider" class="slides js_slides GalleryPickRow">

                    <li class="js_slide GalleryPicture" v-for="pic of pics" :key="pic.pic + pic.first + pic.last">
                        <img :src="'/assets/staff/' + pic.pic" />
                        <h2>{{ pic.first }}</h2>
                        <h3>{{ pic.last }}</h3>
                    </li>

                </ul>
            </div>

        </div>

        <div class="GalleryControls">

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

            this.tns.pause()

            const resumeAfterInteraction = debounce( () => {

                // this.tns.play()

            } )

            this.pauseAndResumeAfterInteraction = () => {

                this.tns.pause()
                resumeAfterInteraction()

            }

            this.tns.events.on( 'touchMove', this.pauseAndResumeAfterInteraction )
            this.tns.events.on( 'dragMove', this.pauseAndResumeAfterInteraction )

        },

        destroyed() {

            this.tns.destroy()

        },

        methods: {

            prev() {

                this.pauseAndResumeAfterInteraction()
                this.tns.goTo( 'prev' )

            },

            next() {

                this.pauseAndResumeAfterInteraction()
                this.tns.goTo( 'next' )

            },

        },

    } )
</script>

<style lang="scss">
    @import 'stylelib';

    $imageSizeDesktop: 250px;

    $imageSizeMobile: 200px;
    //$imageSizeMobile: 275px;

    $mobileOuterPaddingSize: 0.08;

    .Gallery {

        @include media('<desktop') {
            --image-size: #{ $imageSizeMobile };
            --visible-images: 3;

            --gallery-width: calc( var( --body-width ) - ( #{ $mobileOuterPaddingSize } * var( --body-width ) ) * 2 );
            width: 100%;

            //--gallery-width: calc( var( --body-width ) * 1.15 );
            //width: var( --gallery-width );
            //margin-left: 50%;
            //transform: translateX( -50% );
        }
        @include media('>=desktop') {
            --image-size: #{ $imageSizeDesktop };
            --visible-images: 4;

            --gallery-width: calc( var( --body-width ) - #{ $galleryPadding } * 2 - #{ $innerPaddingSize } * 2 );

            width: 100%;
        }

        /**
         * Based on default lory style, see http://meandmax.github.io/lory.
         */
        .slider {
            position: relative;
        }

        .frame {
            width: 100%;
            position: relative;
            overflow: hidden;
            white-space: nowrap;

            /* added */
            .GalleryPickRow {
                padding: 0;
                display: inline-block;
            }
            .GalleryPicture {
                display: inline-block;

                // margin-right: calc( ( var( --gallery-width ) - var( --image-size ) * var( --visible-images ) ) / ( var( --visible-images ) - 1 ) );
                padding: 10px;

                * {
                    display: block;
                }
            }
        }

        .slides {
            display: inline-block;
            width: auto;
        }

        li {
            position: relative;
            display: inline-block;
        }

        .GalleryPickRow {
            margin: 0;

            @include media('>=desktop') {
            }
            @include media('<desktop') {
            }

            .GalleryPicture {
                overflow: hidden;
                text-align: center;

                @include media('>=desktop') {
                    width: $imageSizeDesktop;

                }
                @include media('<desktop') {
                    width: $imageSizeMobile;
                }

                img {
                    @include media('>=desktop') {
                        // width: $imageSizeDesktop;
                        // height: $imageSizeDesktop;
                        width: 100%;
                        border-radius: 6px;
                    }
                    @include media('<desktop') {
                        // width: $imageSizeMobile;
                        // height: $imageSizeMobile;
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

        .GalleryControls {
            display: flex;
            padding-top: 30px;
            flex-flow: row;
            justify-content: center;

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
