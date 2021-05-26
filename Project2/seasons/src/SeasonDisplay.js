import React, {Component} from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}


class SeasonDisplay extends Component {  

    render() {

        const season = getSeason(this.props.lat, new Date().getMonth());
        console.log(season)

        return(
            <div>
                Season Display
            </div>
        );
    };
}

export default SeasonDisplay;