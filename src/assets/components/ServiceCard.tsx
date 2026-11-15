type ServiceCardProps = {
  name: string;
  price: number;
};

function ServiceCard({ name, price }: ServiceCardProps) {
  return (
    <article className="service-card">
      <h3>{name}</h3>
      <p>{price} ₾</p>
    </article>
  );
}

export default ServiceCard;
