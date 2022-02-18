export function fakerUserName(): string {
    const arrayNames = ['Jo', 'Kim', 'Lora', 'Jack', 'Paul', 'Phill', 'Alex', 'Mike', 'Tom'];
    let rand = Math.random() * arrayNames.length;
    return arrayNames[Math.floor(rand)];
}

export function fakerLatitude(): number {
    const arrayNames = [24.0025, 167.0043, 198.8043];
    let rand = Math.random() * arrayNames.length;
    return arrayNames[Math.floor(rand)];
}

export function fakerLongitude(): number {
    const arrayNames = [311.0034, 12.0053, 534.2405];
    let rand = Math.random() * arrayNames.length;
    return arrayNames[Math.floor(rand)];
}

export function fakerCompanyName(): string {
    const arrayNames = ['Apple', 'Tesla', 'Xiaomi', 'Nike', 'Microsoft'];
    let rand = Math.random() * arrayNames.length;
    return arrayNames[Math.floor(rand)];
}

export function fakerCatchPhrase(): string {
    const arrayNames = ['LAskdap[sdasd asd a sd...', 'Laasd asda das d!!!', 'Kkokpko k ko kokokkoko kokko ad!'];
    let rand = Math.random() * arrayNames.length;
    return arrayNames[Math.floor(rand)];
}