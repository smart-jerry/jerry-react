/**
 * Created by jerry on 2018/12/4.
 */
import React, { Component } from 'react';
import "./timer.less";
	// 倒计时
class Timer extends Component {
	// data
	constructor(props) {
		super(props);
		this.times = props.times || 1000;
		this.state = {
			day:0,
			hour:0,
			minute:0,
			second:0
		}
	}
	// 倒计时
	componentDidMount() {
		const splitTimer = function (times) {
			let day = Math.floor(times / 86400);
			let hour = Math.floor((times - day * 86400) / 3600);
			let minute = Math.floor((times - day * 86400 - hour * 3600) / 60);
			let second = times - day * 86400 - hour * 3600 - minute * 60;
			
			return {
				day,
				hour,
				minute,
				second
			};
		}
		this.timer = setInterval(function () {
			this.times -- ;
			let {day, hour, minute, second} = splitTimer(this.times);
			
			this.setState ({
				day:day,
				hour:hour>9?hour:'0'+hour,
				minute:minute>9?minute:'0'+minute,
				second:second>9?second:'0'+second
			});
		}.bind(this), 1000);
	}
	
	render() {
		return (<div class="timer-box">
			<span>{this.state.day}</span> day(s)
			<span>{this.state.hour}</span> :
			<span>{this.state.minute}</span> :
			<span>{this.state.second}</span>
		</div>);
	}
}

export default  Timer;
