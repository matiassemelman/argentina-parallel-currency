interface RightViewInterface {
  amount: number;
  values: object;
}

export const RightView = ({ amount, values }: RightViewInterface) => {
  return (
    <section className="bg-emerald-800 md:rounded-r-xl rounded-b-xl md:rounded-l-none p-8">
      <div>
        <ul className="space-y-10">
          {Object.entries(values).map(([name, value]) => {
            const { compra, venta } = value;
            const exchange = (amount / compra).toFixed(2);

            return (
              <li key={name} className="flex gap-5 text-white">
                <div className="w-20 self-center">{name}</div>
                <div className="text-values">Rate: {venta.toFixed(2)}</div>
                <div>Exchange: $ {exchange}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
