export default function () {
    return (
        <div className="card">
            <div className="favorite">
                <img src="heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/sneakers/1.png " alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/plus.svg" alt="a" />
                </button>
            </div>
        </div>
    )
}