function kelompokkanBilangan(bilangan) {
    if (bilangan % 2 === 0 && bilangan % 4 === 0) {
        return 'Genap dan bisa dibagi 4';
    } else if (bilangan % 2 === 0) {
        return 'Genap tetapi tidak bisa dibagi 4';
    } else {
        return 'Ganjil';
    }
}


export default kelompokkanBilangan;