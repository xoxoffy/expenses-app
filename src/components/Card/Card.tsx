interface cardProps {
  children: any; // JAKI TO TYP?? >.> KONSOLA MÓWI ŻE OBIEKT ALE KRZYCZY JAK DAM OBIEKT
  className: string;
}

const Card = ({ children, className }: cardProps) => {
  const classes = `card ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
