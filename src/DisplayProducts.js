import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayProducts(props) {
  return (
    <div>
      {props.products.map((product) => {
        return (
          <div key={product.id} className="border border-1 p-3">
            <h4 className="mx-5">{product.desc}</h4>
            <img
              src={product.image}
              width="150"
              alt={product.desc}
              className="mx-5"
            />
            <button
              className="btn btn-secondary mx-2"
              onClick={() => props.increaseBtn(product)}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => props.decreaseBtn(product)}
            >
              <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
            </button>
            <span id="qty" className="mx-5 p-3 border border-3">
              {product.value}
            </span>
            quantity
          </div>
        );
      })}
    </div>
  );
}

export default DisplayProducts;
