function weatherConvert(value: number): number {
    const tempKelvin = 273.15;
    const result = Math.round(value - tempKelvin);

    return result;
}; 

export default weatherConvert;