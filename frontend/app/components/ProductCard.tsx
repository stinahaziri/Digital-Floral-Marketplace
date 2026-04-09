import { Product } from '../data/products'

interface Props {
  product: Product
}

export default function ProductCard({ product: p }: Props) {
  return (
    <div className="product-card">
      <div className="product-img">
        {p.badge && <div className="product-badge">{p.badge}</div>}
        <span>{p.emoji}</span>
      </div>
      <div className="product-body">
        <div className="product-cat">{p.cat}</div>
        <div className="product-name">{p.name}</div>
        <div className="product-shop">🏪 {p.shop} &nbsp;★ {p.rating}</div>
        <div className="product-footer">
          <div className="product-price">
            €{p.price.toFixed(2)} <small>/ copë</small>
          </div>
          <button className="btn btn-primary btn-icon">+</button>
        </div>
      </div>
    </div>
  )
}
