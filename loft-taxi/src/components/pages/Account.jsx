import React from 'react';
import Map from './sections/Map';
import Profile from './sections/Profile';

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSection: "map"
        }

        this.defaultProperties.changeSection = this.defaultProperties.changeSection.bind(this);
    }

    defaultProperties = {
        changeSection(section) {
            this.setState({currentSection: section})
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="main_map">
                    <div className="map_nav">
                        <div className="nav_logo"></div>
                        <div className="nav_list">
                            <div className="style_list_nav" onClick={() => this.defaultProperties.changeSection("map")}>Карта</div>
                            <div className="style_list_nav" onClick={() => this.defaultProperties.changeSection("profile")}>Профиль </div>
                            <div className="style_list_nav" onClick={() => this.props.defaultProperties.navigateTo("entrance")}>Выйти</div>
                        </div>
                    </div>
                    <div className="account_section">
                        {
                            {
                                map: <Map defaultProperties={this.defaultProperties}/>,
                                profile: <Profile defaultProperties={this.defaultProperties}/>
                            }[this.state.currentSection]
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Account;