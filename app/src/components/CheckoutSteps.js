const CheckoutSteps = {
  render: (props) => {
    return `
    <div class="checkout-steps">
      <div class="${props.step1 ? "active" : ""}">Connexion</div>
      <div class="${props.step2 ? "active" : ""}">Ventes</div>
      <div class="${props.step3 ? "active" : ""}">Paiement</div>
      <div class="${props.step4 ? "active" : ""}">Passer la commande</div>
    </div>
    `;
  },
};
export default CheckoutSteps;
