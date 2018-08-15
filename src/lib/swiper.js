import { Component } from 'preact';
import Swiper from 'swiper';

export default class MySwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.swiper = null;
        this.update = true;
    }

    componentWillReceiveProps() {
        if (this.swiper) {
            this.swiper.update();
        }
    }

    shouldComponentUpdate() {
        return this.update;
    }

    componentDidMount() {
        const opt = {
            observer: true,
            ...this.props.options,
        }

        if (opt.loop) {
            opt.loopedSlides = this.props.children.length;
        }

        this.swiper = new Swiper(this.swiperview, opt);
        this.update = false;
    }

    componentWillUnmount() {
        this.swiper.destroy();
    }

    render({ children = [] }) {

        return (
            <div
                className="swiper-container"
                ref={r => this.swiperview = r}
                style={{ height: 360 }}>
                <div className="swiper-wrapper">
                    {children.map((item, index) => (
                        <div className="swiper-slide" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

