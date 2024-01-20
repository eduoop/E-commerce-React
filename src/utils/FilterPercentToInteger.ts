function FilterPercentToInteger(percent: string): number {
    const percentAsFloat = parseFloat(percent);
    
    if (isNaN(percentAsFloat)) {
        throw new Error("O valor fornecido não é um número válido.");
    }

    const integerEquivalent = Math.round(percentAsFloat * 100);

    return integerEquivalent;
}

export default FilterPercentToInteger;