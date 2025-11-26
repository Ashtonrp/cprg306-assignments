import ItemList from "./item-list";

export default function Page () {

    return (
        <main>
            <h1 className="text-center">Item Shopping List:</h1>
            <div>
                <ItemList />
            </div>
        </main>
    );
}