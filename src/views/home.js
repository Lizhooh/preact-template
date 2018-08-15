import { Component } from 'preact';
import Swiper from '../lib/swiper';
import Fine from 'redux-fine';
import { connect } from 'preact-redux';

export default connect(
    state => ({ state: state.home }),
    Fine.action('home'),
)(class HomeView extends Component {
    render() {
        const { name } = this.props.state;

        return (
            <div>
                <h3>{name}</h3>
                <Swiper
                    options={{
                        loop: true,
                        autoPlay: true,
                    }}>
                    <div style={styles.red}>slider1</div>
                    <div style={styles.green}>slider2</div>
                    <div style={styles.blue}>slider3</div>
                </Swiper>
            </div>
        );
    }
})

const styles = {
    red: {
        color: '#fff',
        width: '100%',
        height: '100%',
        backgroundColor: '#f45',
    },
    green: {
        color: '#fff',
        width: '100%',
        height: '100%',
        backgroundColor: '#3b4',
    },
    blue: {
        color: '#fff',
        width: '100%',
        height: '100%',
        backgroundColor: '#39f',
    },
}