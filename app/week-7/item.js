

export default function Item(props) {

    let {name, quantity, category} = props

    return(
        <div className="bg-gray-800 mb-4">
            <ul className="list-disc pl-4">
                <li>Name: {name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>
        </div>
    );
}