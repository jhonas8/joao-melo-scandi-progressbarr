import * as imports from 'SourceRoute/Checkout/Checkout.config'

const object_of_imports_as_array = Object.keys(imports)

const array_of_steps = object_of_imports_as_array.filter((stepLabel) => 
    typeof stepLabel === 'string'
    && stepLabel.toLowerCase().includes('step'))

export default array_of_steps