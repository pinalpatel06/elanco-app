import './index.css';

const Product: React.FC<any> = (props: { product: any }) => {
  const product = props.product
  return (
    <div key={product.id} className="group relative border-shadow">
      <div className="mt-4">
        <div>
          <h3 className="text-1xl text-medium">
            <a href={product.ResourceGroup}>
              <span aria-hidden="true" className="absolute inset-0" />
              ResourceName- {product.ResourceGroup}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          Cost-{product.Cost}</p>
      </div>
    </div>
  )
}

export default Product
