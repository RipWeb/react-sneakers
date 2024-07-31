import axios from 'axios';
import Card from '../components/Card/Card.js';
import React from 'react';

export default function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://66a8079a53c13f22a3d1b746.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false);
            } catch (error) {
                alert('err2');
            }
        })();
    }, [])

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>
            <div className="d-flex flex-wrap">
                {(isLoading ? [...Array(8)] : orders).map((item, index) =>
                    <Card
                        key={index}
                        loading={isLoading}
                        {...item} />
                )}
            </div>
        </div>
    );
}