const circleArea = (r) => {
    const area = Math.PI * Math.pow(r,2)
    console.log(`Dairenin alanı: ${area}`);
}

const circleCircumference = (r) => {
    const circum = 2 * Math.PI * r;
    console.log(`Dairenin çevresi: ${circum}`);
}

module.exports = {
    circleArea : circleArea,
    circleCircumference : circleCircumference
}