

export default function Item(props) {

    let {name, quantity, category} = props

    return(
        <div>
            <ul className="list-disc pl-4 text-center">
                <li>Name: {name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>
        </div>
    );
}