import { Component } from "react";
import Link from "next/link";
import withStyle from "react-jss";
import routeObserver from "../services/RouteObserver";
import { px, media } from "../styles/theme";
import WithStyle from "../types/WithStyle";

interface IProps extends WithStyle<Footer> {}

@withStyle(style)
export default class Footer extends Component<IProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <div className={classes.logoAndCopyright}>
          <div className={classes.lowLogo}>
            <img
              src="/static/img/Mapper_Diamond_Logo_grey.svg"
              alt="mapper logo"
            />
          </div>

          <div className={classes.mapper2018}>&#169; mapper 2018</div>
        </div>

        <div className={classes.mapLinks}>
          <Link href="/MapCities/#Map">
            <a>
              <span>Maps</span>
            </a>
          </Link>
          <Link href="/MapCities/#How">
            <a>
              <span>How</span>
            </a>
          </Link>
          <Link href="/MapCities/#Cities">
            <a>
              <span>Cities</span>
            </a>
          </Link>
          <Link href="/AboutNewsContact/#About">
            <a>
              <span>About</span>
            </a>
          </Link>
          <Link href="/AboutNewsContact/#News">
            <a>
              <span>News</span>
            </a>
          </Link>
          <Link href="/AboutNewsContact/#Contact">
            <a>
              <span>Contact</span>
            </a>
          </Link>
          <Link href="/TeamJobsInvestors/#Team">
            <a>
              <span>Team</span>
            </a>
          </Link>
          <Link href="/TeamJobsInvestors/#Investors">
            <a>
              <span>Investors</span>
            </a>
          </Link>
          <Link href="/TeamJobsInvestors/#Jobs">
            <a>
              <span>Jobs</span>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  componentDidMount() {
    routeObserver.on("pathchange", this.goToHash, this);
  }

  componentWillUnmount() {
    routeObserver.off("pathchange", this.goToHash);
  }

  goToHash(pathName: string) {
    console.log("scroll to:", pathName);

    // if ( !pathName.includes( '#' ) ) return
    //
    // const parts = pathName.split( '#' )
    // const el = document.getElementById( parts[ parts.length - 1 ] )
    //
    // if ( !el ) return
    //
    // el.scrollIntoView()
  }
}

function style() {
  return {
    footer: {
      backgroundColor: "#f1f1f1",
      display: "flex",
      fontFamily: "AvenirNext-Regular, sans-serif",

      [media("<desktop")]: {
        flexFlow: "column-reverse",
        alignItems: "center",
        paddingTop: px(60),
        paddingBottom: px(60)
      },

      [media(">=desktop")]: {
        flexFlow: "row",
        paddingTop: px(50),
        paddingBottom: px(50),
        height: px(260)
      },

      "& $logoAndCopyright": {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "40%",
        paddingTop: px(30),
        paddingBottom: px(25),

        [media("<desktop")]: {
          paddingTop: px(60)
        },

        "& $lowLogo": {
          [media("<desktop")]: {
            margin: "auto"
          },

          "& img": {
            width: px(100)
          }
        },

        "& $mapper2018": {
          fontSize: px(14),
          fontWeight: "bold",
          color: "#898989",
          marginTop: px(10),

          [media("<desktop")]: {
            fontFamily: "SF",
            fontSize: px(26)
          },

          [media(">=desktop")]: {
            fontFamily: "SFLight",
            textAlign: "left"
          }
        }
      },

      "& $mapLinks": {
        width: "100%",
        fontFamily: "SFRegular",
        fontSize: px(20),
        color: "#898989",
        display: "flex",
        flexFlow: "column",
        flexWrap: "wrap",

        [media("<desktop")]: {
          height: px(200),
          textAlign: "center",
          justifyContent: "space-evenly",
          fontSize: px(36)
        },

        [media(">=desktop")]: {
          textAlign: "right"
        },

        // TODO, move this somewhere else, because it is global, which means not only for the Footer
        "@global": {
          a: {
            color: "#898989",
            letterSpacing: px(1),
            textDecoration: "none",
            textAlign: "center",
            height: "33%",
            width: "33%",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",

            "&:nth-child(3n-2)": {
              fontFamily: "SFBold",

              "&:focus, &:active, &:hover": {
                letterSpacing: px(1)
              }
            },

            "&:focus, &:active, &:hover": {
              color: "black",
              fontWeight: "bold",
              fontFamily: "SFBold",
              letterSpacing: 0
            }
          }
        }
      }
    },

    logoAndCopyright: {},
    lowLogo: {},
    mapper2018: {},
    mapLinks: {}
  };
}
