import React from 'react';
import CustomAreaChart from '../component/CustomAreaChart.jsx';
import CustomBarChart from '../component/CustomBarChart.jsx';
import CustomPieChart from '../component/CustomPieChart.jsx';
import CustomProgressChart from '../component/CustomProgressChart.jsx';
import CustomProgressSmallChart from '../component/CustomProgressSmallChart.jsx';

class ChartHome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            access_token: ''
        };
        
        this.setAuth = this.setAuth.bind(this);
    }

    setAuth () {
        this.props.setAuth();
    }

    componentWillMount () {
        this.setState({access_token: this.props.access_token});
    }

    render() {
        return (
            <div className='container'>
                <nav className="navbar">
                    <ul className="nav navbar-nav">
                        <li className='active'><a href="#">Overview</a></li>
                        <li><a href="#">Exercise</a></li>
                        <li><a href="#">Nutrition</a></li>
                        <li><a href="#">Rest</a></li>
                        <li><a href="#">Health</a></li>
                    </ul>
                </nav>
                <div className='section' style={{marginTop: 7}}>
                    <div className='top_section'>
                        <div className='row_section blue_line'>
                            <div className='part_section'>
                                <span className='large'>TODAY</span>
                                <span className='medium'>Physical Activity</span>
                                <span style={{color: 'white', fontSize: 32, marginLeft: -10}}>123<span className='medium'>/</span><span className='small'>number of steps yesterday</span> </span>
                            </div>
                            <div className='part_section'>
                                <span className='medium' style={{marginTop: 6, marginLeft: 30}}>Weight</span>
                                <CustomAreaChart setAuth={this.setAuth} access_token={this.state.access_token}/>
                            </div>
                        </div>
                        <div className='row_section'>
                            <div className='part_section'>
                                <span style={{paddingLeft: 28, paddingBottom: 30}} className='medium'>Last 7 Days</span>
                                <CustomBarChart />
                            </div>
                            <div className='part_section'>
                                <span style={{paddingLeft: 28, paddingBottom: 5}} className='medium'>Calories in/out</span>
                                <CustomPieChart />
                                <div style={{width: 180, height: 20, marginLeft: 40, marginTop: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <div style={{color: '#A29349',fontSize: 12, width: '47%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}><div style={{width: 20, height: 20, backgroundColor: '#C9CFD2', paddindRight: 5}}></div><span style={{ paddingTop: 2, paddingLeft: 5}}> Colories in</span></div>
                                    <div style={{color: '#697378',fontSize: 12, width: '47%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}><div style={{width: 20, height: 20, backgroundColor: '#20CC7E', paddindRight: 5}}></div><span style={{ paddingTop: 2, paddingLeft: 5}}> Colories in</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='top_section'>
                        <div className='row_section' style={{height: '37%', paddingLeft: 24, paddingRight: 24}}>
                            <div className='part_section'>
                                <span style={{fontSize: 22, color: '#359971', paddingTop: 8}}>My Goal This Month</span>
                                <div style={{ width: '100%', height: 120, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: -10}}>
                                    <CustomProgressSmallChart />
                                    <span style={{color: 'white', fontSize: 34, marginLeft: 15}}>28<span className='small'>/Total</span> </span>
                                </div>
                            </div>
                            <div className='part_section'>
                                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <div className='number_letter' style={{marginTop: 32}}>
                                            <span style={{color: 'white', fontSize: 24}}>18</span>
                                            <span style={{color: '#359971',fontSize: 12}}>Active</span>
                                        </div>
                                        <div className='number_letter border_left_right' style={{marginTop: 32}}>
                                            <span style={{color: 'white', fontSize: 24}}>4</span>
                                            <span style={{color: '#84888B',fontSize: 12}}>IDL</span>
                                        </div>
                                        <div className='number_letter' style={{marginTop: 32}}>
                                            <span style={{color: 'white', fontSize: 24}}>4</span>
                                            <span style={{color: '#A14A43',fontSize: 12}}>Stressed</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 14, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <div style={{width: '33%', height: 7, borderBottom: 1, borderBottomColor: '#359971', borderBottomStyle: 'solid'}}></div>
                            <span style={{color: '#A29349',fontSize: 12, }}>Most Active Services</span>
                            <div style={{width: '33%', height: 7, borderBottom: 1, borderBottomColor: '#359971', borderBottomStyle: 'solid'}}></div>                             
                        </div>
                        <div className='row_section' style={{flexDirection: 'column', alignItems: 'center'}}>
                            <div className='services_section'>
                                <div className='part_section' style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <div className='blue_sqaure' style={{visibility: 'hidden'}}></div>
                                    <span style={{fontSize: 20, paddingLeft: 13}}>Weight</span>
                                </div>
                                <div className='part_section' style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <div className='blue_sqaure'></div>
                                    <span style={{fontSize: 20, paddingLeft: 13}}>Calories</span>
                                </div>
                            </div>
                            <div className='services_section border_top_bottom'>
                                <div className='part_section' style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <div className='blue_sqaure'></div>
                                    <span style={{fontSize: 20, paddingLeft: 13}}>Excersices</span>
                                </div>
                                <div className='part_section' style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <div className='blue_sqaure'></div>
                                    <span style={{fontSize: 20, paddingLeft: 13}}>Steps</span>
                                </div>
                            </div>
                            <div className='services_section'>
                                <div className='part_section' style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <div className='blue_sqaure'></div>
                                    <span style={{fontSize: 20, paddingLeft: 13}}>Weight</span>
                                </div>
                                <div className='part_section' style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <div className='blue_sqaure'></div>
                                    <span style={{fontSize: 20, paddingLeft: 13}}>Weight</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='bottom_section'>
                        <span style={{fontSize: 22, color: '#359971', paddingBottom: 15}}>Exercise Target</span>
                        <CustomProgressChart />
                        <div className='number_letter' style={{marginTop: -80, paddingBottom: 100}}>
                            <span style={{color: 'white', fontSize: 34}}>402</span>
                            <span style={{color: '#697378',fontSize: 12, marginTop: -3}}>Total Tasks</span>
                        </div>
                        <div className='flex_row' style={{width: '80%'}}>
                            <div className='number_letter'>
                                <span style={{color: 'white', fontSize: 34}}>263</span>
                                <span style={{color: '#359971',fontSize: 12, marginTop: -3}}>Active Tasks</span>
                            </div>
                            <div className='number_letter'>
                                <span style={{color: 'white', fontSize: 34}}>139</span>
                                <span style={{color: '#A29349',fontSize: 12, marginTop: -3}}>Pending Tasks</span>
                            </div>
                        </div>
                    </div>
                    <div className='bottom_section'>
                        <span style={{fontSize: 22, color: '#359971', paddingBottom: 0}}>Calories In vs Out</span>
                        <span style={{color: 'white', fontSize: 32}}>23.5ms</span>
                        <span style={{color: '#A29349',fontSize: 12, marginTop: 0}}>Task Wait Time</span>
                        <div style={{width: 74, height: 30, backgroundColor: '#F3C031', borderRadius: 15, textAlign: 'center', paddingTop: 5, margin: 5}}>
                            <span style={{color: '#43432C',fontSize: 14, marginTop: 0}}>32%</span>                            
                        </div>
                        <CustomBarChart />
                        <span style={{color: '#A29349',fontSize: 12, marginTop: 10}}>- Wait Time Today (ms) -</span>
                    </div>
                    <div className='bottom_section'>
                        <span style={{fontSize: 22, color: '#359971', paddingBottom: 0}}>Heart Rate</span>
                        <img src="../../assets/image/impulse.png" alt="" style={{ margin: 20}}/>
                        <CustomAreaChart setAuth={this.setAuth} access_token={this.state.access_token}/>                        
                        <span style={{color: '#A29349',fontSize: 12, marginTop: 10}}>- Failure Rate Today -</span>       
                    </div>
                </div>
            </div>
        );
    }
}
export default ChartHome;