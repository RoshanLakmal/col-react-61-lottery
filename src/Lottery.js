import React, {Component} from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component{
    static defaultProps = {
        title: 'Lotto',
        numBalls: 20,
        maxNum: 40
    }
    constructor(props){
        super(props);
        this.state = {nums: []};
        // this.state = {nums: Array.from({ length: this.props.numBalls})};
        this.handleClick = this.handleClick.bind(this);

    }

    increamentScore(curState){
        let idx = Math.floor(Math.random() * this.props.maxNum) + 1;
        return { nums: [...curState.nums, idx] };
    }

    generate(){
    //    this.setState(curState => ({
    //        nums: curState.nums.push(Math.floor(Math.random() * this.props.maxNum) + 1)
    //    }));
    this.setState({nums: []});
    for(let i=0;i<this.props.numBalls;i++){
        this.setState(this.increamentScore);
    }
       
    }

    handleClick(){
        this.generate();
    }
    render(){
        const myNums = this.state.nums.map(i => <LotteryBall number={i}/>);
        return(
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                {myNums}
                <div>
                <button onClick={this.handleClick}>Generate</button>
                </div>
                
            </div>
        )
    }
}

export default Lottery;