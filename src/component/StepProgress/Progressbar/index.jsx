import React, { Component } from 'react'
import { StepNav } from '..'
import './style.css'

export default class Progressbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            actualStep: this.props.activeStep,
            stepLabel: this.props.steps[this.props.actualStep-1],
            numberOfSteps: this.props.steps.length,
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.activeStep !== this.props.activeStep){
            this.setState(prevState => ({
                ...prevState,
                actualStep: prevProps.activeStep >= 0 
                            && prevProps.activeStep <= this.state.numberOfSteps
                            ? this.props.activeStep
                            : this.state.actualStep
            }))
        }
    }


    render() {
        console.log(this.state)
        const {
            actualStep,
            numberOfSteps,
        } = this.state
        
        const {
            steps,
            handleChangeStepOnClick
        } = this.props

        const first = actualStep === 1 
        const last = actualStep === numberOfSteps

        return (
            <div className='progressbarWrapper'>
                <div className='blockWrapper' >
                    <div className={`block`}/>
                    <div className={`${first ? 'active' : ''}`}/>
                </div>
                <StepNav 
                    steps={steps} 
                    actualStep={actualStep}
                    numberOfSteps={numberOfSteps}
                    handleChangeStepOnClick={handleChangeStepOnClick}
                />
                <div className='blockWrapper' >
                    <div className={`block`}/>
                    <div className={`${last ? 'active' : ''}`}/>
                </div>
            </div>
        )
    }
}
