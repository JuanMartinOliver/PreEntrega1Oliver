const CartWidget = () => {
    return (
        <div>
            <button type="button" class="btn btn position-relative">
                🛒
                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">1</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget 