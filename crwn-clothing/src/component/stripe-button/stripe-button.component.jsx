import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publicableKey = 'pk_test_51Ic4UwCm1pAJ0YISSwuChslu10uwN3P8jxRED8LEvZPwdolqn7wQuN7FmJw1NWEHYGC7jKHNFdEvEvF7RwUehCjf001aWJ3a5k'
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicableKey}
        />
    )
}

export default StripeCheckoutButton;