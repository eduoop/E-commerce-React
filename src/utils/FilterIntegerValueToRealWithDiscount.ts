function FilterIntegerValueToRealWithDiscount(valor: number, desconto: number = 0) {
    const valueWithDiscount = valor - (valor * desconto);
    return valueWithDiscount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default FilterIntegerValueToRealWithDiscount;