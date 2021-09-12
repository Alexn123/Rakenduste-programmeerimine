import Item from '../props/Item';

function Home() {
    return (
        <div>
            Tere
            <Item name="Item1" price="10" category="mobile" />
            <Item name="Item2" price="20" category="laptop" />
        </div>
    )
}

export default Home;