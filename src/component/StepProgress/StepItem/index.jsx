import React, { Component } from 'react'
import './style.css'

export default class StepItem extends Component {
    render() {
        const {
            actualStep,
            stepIndex,
            onClickStep,
            stepLabel,
        } = this.props

        const activeStep = actualStep === stepIndex
        return (
            <div className={`stepItem ${activeStep ? 'activeStep' : ''}` }>
                <div 
                    className={`stepCircle`}
                    onClick={()=>onClickStep(stepIndex)}>
                        {stepIndex}
                    </div>
                <div className="stepLabel">{stepLabel}</div>
            </div>
        )
    }
}
