import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper'
import { Progressbar } from 'Component/StepProgress'
import steps from '../../utils/steps'

/** @namespace Route/Checkout/Component */
export class Checkout extends SourceCheckout {
    render(){
        const checkoutIndex = steps.findIndex(step => step === this.props.checkoutStep)
        return(
            <main block="Checkout">
                <div className='stepHeaderTitle'>
                    <Progressbar
                        steps={[...steps.map(label => label.replace(/_STEP/g, ''))]}
                        activeStep={checkoutIndex + 1}
                     />
                </div>
                <ContentWrapper
                wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
        </main>
        )
    }
}

export default Checkout