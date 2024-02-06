const Help = () => {
  return (
    <section>
      <section className="mt-5">
        <h4 className="text-xl font-semibold">Payment</h4>
        <ul className='list-disc px-5 mt-5 text-neutral-500'>
          <li>
            Payment by credit cards issued in South Korea may be rejected.
          </li>
          <li>
            Your order can be canceled or pending when it is considered to be
            paid by stolen credit/debit cards or under a name that doesn’t match
            the account holder.
          </li>
        </ul>
      </section>
      <section className="mt-5">
        <h4 className="text-xl font-semibold">Shipping</h4>
        <ul className='list-disc px-5 mt-5 text-neutral-500'>
          <li>
            Shipping may be delayed due to stock availability and warehousing
            operations.
          </li>
          <li>
            Delivery takes 5 to 30 business days depending on your destination.
          </li>
          <li>
            if your order includes made-to-order or pre-order items, your
            shipment will be dispatched when all items you purchase are
            prepared.
          </li>
          <li>
            If the item you purchase is out of stock, you will be notified
            individually.
          </li>
          <li>
            Your shipment may not arrive on the scheduled date due to custom
            clearance or shipping operations.
          </li>
          <li>
            Customs charges are calculated based on the materials, manufacturing
            methods, and purposes of imported products. Make an inquiry to your
            local customs office for more information.
          </li>
          <li>
            Recipients are responsible for taxes or customs charges levied on
            the imported product by the local customs office.
          </li>
        </ul>
      </section>
      <section className="mt-5">
        <h4 className="text-xl font-semibold">Returns & Exchanges</h4>
        <article className="text-neutral-500 mt-2">
          Make a private inquiry to our customer service within 7 days of
          delivery and include the picture or video of your item to prove the
          grounds for exchanges/refunds (the whole item or defective part),
          order number, barcode, reason for returns.
        </article>
        <ul className='list-disc px-5 mt-5 text-neutral-500'>
          <li>
            Returns for defective and mis-shipped items are offered when the
            request is made within 7 days of delivery.
          </li>
          <li>
            If you need to request an exchange or return for missed items, read
            through FAQs before you make an inquiry.
          </li>
        </ul>
      </section>
    </section>
  );
};
export default Help;
