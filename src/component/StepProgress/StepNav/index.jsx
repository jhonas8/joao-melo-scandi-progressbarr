import React, { Component } from 'react'
import { StepItem } from '..'
import './style.css'

export default class SetpNav extends Component {

    render() {
        const {
            actualStep,
            numberOfSteps,
            steps,
            handleChangeStepOnClick
        } = this.props

        return (
            <div className='stepWrapper'>
                {steps
                .slice(0,numberOfSteps-1)
                .map(
                    (stepLabel, index) =><StepItem 
                            onClickStep={handleChangeStepOnClick} 
                            actualStep={actualStep}
                            stepLabel={stepLabel}
                            stepIndex={index+1}
                            key={index}
                        />
                    ) 
                }
            </div>
        )
    }
}
