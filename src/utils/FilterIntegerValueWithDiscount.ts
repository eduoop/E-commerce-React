function FilterIntegerValueWithDiscount(valor: number, desconto: number = 0) {
    const valueWithDiscount = valor - (valor * desconto);
    console.log(valueWithDiscount)
    return valueWithDiscount
}

export default FilterIntegerValueWithDiscount;